import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { Ii8n } from '@variousjs/various'
import getConsole from './console'
import { isComponentLoaded, getMountedComponents } from './component-helper'
import { connect, getStore, emit, subscribe } from './store'
import { getOnMessage, getPostMessage } from './message'
import { MOUNTED_COMPONENTS, ERROR_TYPE } from '../config'
import {
  RequireError, ErrorState, ComponentProps, RequiredComponent, Creator, ConnectProps,
  ComponentDispatcher,
} from '../types'

export default function componentCreator({
  config,
  name: nameWidthModule,
  storeDispatcher,
  componentDispatcher,
  Loader,
  Error: ErrorNode,
  onMounted = () => null,
  isRender,
}: Creator) {
  const storeKeys = Object.keys(getStore())
  const { components, ...rest } = config
  const symbolModule = Symbol('module')
  const [name, module = symbolModule] = nameWidthModule.split('.')
  const console = getConsole(nameWidthModule)

  class R extends Component<
    ConnectProps & { $silent?: boolean },
    ErrorState & { componentReady: boolean, componentExist?: boolean }
  > {
    state = {
      componentExist: undefined,
      componentReady: false,
      errorType: undefined,
      errorMessage: '',
    }

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

    private i18nConfig?: ReturnType<Ii8n>

    private unSubscribe = () => null as unknown

    componentDidMount() {
      this.setState({ componentExist: isComponentLoaded(name) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      console.error(`[${ERROR_TYPE.SCRIPT_ERROR}] ${e.message}`)
      this.setState({ errorType: ERROR_TYPE.SCRIPT_ERROR, errorMessage: e.message })
      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: `${components[name]}#`,
        },
      })
      this.unMountComponent()
    }

    componentWillUnmount() {
      this.ComponentNode = null
      this.unMountComponent()
      this.isUnMounted = true
      this.unSubscribe()
    }

    unMountComponent = () => {
      let mountedComponents = getMountedComponents()
      mountedComponents = mountedComponents.filter((item) => item !== nameWidthModule)
      emit({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[nameWidthModule]
    }

    mountComponent = () => {
      if (name === 'store') {
        const errorMessage = 'cannot load component named `store`'
        console.error(`[${ERROR_TYPE.INVALID_COMPONENT}] ${errorMessage}`)
        this.setState({ errorType: ERROR_TYPE.INVALID_COMPONENT, errorMessage })
        return
      }

      try {
        const { registry, urlFetched } = window.requirejs.s.contexts._
        Object.keys(registry).forEach((key) => {
          if (registry[key].error) {
            delete urlFetched[registry[key].map.url]
            delete registry[key]
          }
        })
      } catch (e) {
        // ignore
      }

      window.requirejs([name], (C: RequiredComponent) => {
        if (this.isUnMounted) {
          return
        }

        if (!C) {
          const errorMessage = 'no content'
          console.error(`[${ERROR_TYPE.INVALID_COMPONENT}] ${errorMessage}`)
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const componentNode = module === symbolModule ? (C.default || C) : C[module]

        if (!componentNode) {
          const errorMessage = 'module not defined'
          console.error(`[${ERROR_TYPE.INVALID_COMPONENT}] ${errorMessage}`)
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        if (typeof componentNode !== 'function') {
          const errorMessage = 'module cannot be executed'
          console.error(`[${ERROR_TYPE.INVALID_COMPONENT}] ${errorMessage}`)
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const mountedComponents = getMountedComponents()
        const actions: ComponentDispatcher = {}

        if (!mountedComponents.includes(nameWidthModule)) {
          mountedComponents.push(nameWidthModule)
        }

        Object
          .getOwnPropertyNames(componentNode)
          .forEach((method) => {
            if (typeof componentNode[method] !== 'function') {
              return
            }
            if (method === '$onMessage') {
              this.unSubscribe = subscribe(getOnMessage(nameWidthModule, componentNode[method]))
              return
            }
            if (method === '$i18n') {
              const i18nConfig = (componentNode[method] as Ii8n)()
              this.i18nConfig = i18nConfig
              return
            }

            actions[method] = componentNode[method]
          })

        componentDispatcher[nameWidthModule] = actions // eslint-disable-line no-param-reassign

        this.ComponentNode = componentNode
        this.setState({ componentReady: true })

        onMounted()
        emit({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
      }, (e: RequireError) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${components[name]}#`,
          },
        })

        if (this.isUnMounted) {
          return
        }

        const [requireModule] = e.requireModules

        const errorType = requireModule === name
          ? ERROR_TYPE.LOADING_ERROR : ERROR_TYPE.DEPENDENCIES_LOADING_ERROR
        console.error(`[${errorType}] ${e.message}`)
        this.setState({ errorType, errorMessage: e.message })
      })
    }

    onReload = () => {
      this.setState({
        componentReady: false,
        errorType: undefined,
        errorMessage: '',
      }, () => {
        this.mountComponent()
      })
    }

    $postMessage = getPostMessage(nameWidthModule)

    $dispatch: ComponentProps['$dispatch'] = (dispatchName, func, value) => {
      const { dispatch } = this.props

      if (dispatchName === 'store') {
        if (!storeDispatcher[func]) {
          const errorMessage = `[dispatch] \`store\` action \`${func}\` is not present`
          console.error(errorMessage)
          throw new Error(errorMessage)
        }
        return dispatch(storeDispatcher[func], { value, trigger: nameWidthModule })
      }

      const actions = componentDispatcher[dispatchName]

      if (!actions) {
        const errorMessage = `[dispatch] component \`${dispatchName}\` is not ready`
        console.error(errorMessage)
        throw new Error(errorMessage)
      }

      if (!actions[func]) {
        const errorMessage = `[dispatch] \`${dispatchName}\` action \`${func}\` is not present`
        console.error(errorMessage)
        throw new Error(errorMessage)
      }

      return Promise.resolve(actions[func]({ value, trigger: nameWidthModule }))
    }

    $t: ComponentProps['$t'] = (key, params) => {
      if (!this.i18nConfig) {
        console.warn('[i18n] config not exist')
        return key
      }
      const { localeKey, resources } = this.i18nConfig
      const locale = this.props[localeKey] as string
      const resource = resources[locale]

      if (!resource) {
        console.warn(`[i18n] locale \`${locale}\` not exist`)
        return key
      }

      if (!resource[key]) {
        console.warn(`[i18n] key \`${key}\` not exist`)
        return key
      }

      const text = resource[key]
      if (!params || Object.prototype.toString.call(params) !== '[object Object]') {
        return text
      }

      const args = Object.keys(params)
      if (!args.length) {
        console.warn(`[i18n] key \`${key}\` parameters empty`)
        return text
      }

      return args.reduce((next, arg) => {
        const regex = new RegExp(`{\\s*${arg}\\s*}`, 'g')
        return next.replace(regex, params[arg].toString())
      }, text)
    }

    $render: ComponentProps['$render'] = ({
      name: componentName,
      url,
      target,
      props,
      module: componentModule,
      onMounted: onMountedFn,
    }) => {
      if (url) {
        // if define url, means replace component
        window.requirejs.undef(componentName)
        window.requirejs.config({
          paths: {
            [componentName]: `${url}#`,
          },
        })
      }

      const C = componentCreator({
        name: componentModule ? `${componentName}.${componentModule}` : componentName,
        storeDispatcher,
        componentDispatcher,
        Loader,
        Error: ErrorNode,
        config: { ...rest, components },
        onMounted: onMountedFn,
        isRender: true,
      })
      const Fc = (p: { [key: string]: any }) => (<C {...p} />)
      const Root = createRoot(target as Element)
      Root.render(<Fc {...props} />)

      return () => Root.unmount()
    }

    render() {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        emit: componentDispatch,
        $silent,
        ...propsRest
      } = this.props
      const {
        componentReady,
        errorMessage,
        errorType,
        componentExist,
      } = this.state
      const store: Record<string, any> = {}
      const componentProps: Record<string, any> = {}
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (errorType) {
        return !$silent
          ? (
            <ErrorNode
              $type={ERROR_TYPE[errorType]}
              $message={errorMessage}
              $reload={errorType === ERROR_TYPE.INVALID_COMPONENT ? undefined : this.onReload}
            />
          )
          : null
      }

      if (!componentReady) {
        return !$silent && componentExist === false ? (<Loader />) : null
      }

      storeKeys.forEach((key) => {
        store[key] = this.props[key]
      })

      Object.keys(propsRest).forEach((key) => {
        if (store[key] !== propsRest[key]) {
          componentProps[key] = propsRest[key]
        }
      })

      return (
        <ComponentNode
          {...componentProps}
          $config={rest}
          $dispatch={this.$dispatch}
          $store={store}
          $render={isRender ? undefined : this.$render}
          $postMessage={this.$postMessage}
          $t={this.$t}
        />
      )
    }
  }

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  return connect(key0, ...keyn)(R)
}
