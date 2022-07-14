import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Ii8nConfig } from '@variousjs/various'
import getDispatch from './dispatch'
import { preload, isComponentLoaded } from './preload'
import {
  connect,
  getStore,
  emit,
  subscribe,
} from './store'
import { getOnMessage, getPostMessage } from './message'
import { MOUNTED_COMPONENTS, RETRY_COUNT, ERROR_TYPE } from '../config'
import {
  RequireError,
  ErrorState,
  ComponentProps,
  RequiredComponent,
  Creator,
  ConnectProps,
  ComponentDispatcher,
} from '../types'

function componentCreator({
  config,
  name: nameWidthModule,
  storeDispatcher,
  componentDispatcher,
  Loader,
  Error,
  onMounted,
}: Creator) {
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)
  const { components, ...rest } = config
  const symbolModule = Symbol('module')
  const [name, module = symbolModule] = nameWidthModule.split('.')

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

    private retryCount: number = 0

    private i18nConfig?: ReturnType<Ii8nConfig>

    dispatch = currentDispatch.bind(this, name)

    postMessage = getPostMessage(nameWidthModule)

    componentDidMount() {
      this.setState({ componentExist: isComponentLoaded(name) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
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

    private unSubscribe = () => null as unknown

    unMountComponent = () => {
      let mountedComponents = this.$getMountedComponents()
      mountedComponents = mountedComponents.filter((item) => item !== nameWidthModule)
      emit({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[nameWidthModule]
    }

    mountComponent = () => {
      if (name === 'store') {
        this.setState({ errorType: ERROR_TYPE.INVALID_COMPONENT, errorMessage: 'Cannot load component named `store`' })
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

      window.requirejs([name], async (C: RequiredComponent) => {
        if (this.isUnMounted) {
          return
        }

        if (!C) {
          this.setState({ errorMessage: 'No content', errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const componentNode = module === symbolModule ? (C.default || C) : C[module]

        if (!componentNode) {
          this.setState({ errorMessage: 'Module not defined', errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        if (typeof componentNode !== 'function') {
          this.setState({ errorMessage: 'Component cannot be executed', errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
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
            if (method === '$getI18nConfig') {
              const i18nConfig = componentNode[method]()
              this.i18nConfig = i18nConfig
              return
            }

            actions[method] = componentNode[method]
          })

        componentDispatcher[nameWidthModule] = actions // eslint-disable-line no-param-reassign

        this.ComponentNode = componentNode

        this.setState({ componentReady: true }, () => {
          if (onMounted) {
            onMounted()
          } else {
            emit({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
          }
        })
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

        if (this.retryCount < RETRY_COUNT) {
          this.retryCount += 1
          setTimeout(this.mountComponent, 1000)
          return
        }

        const [requireModule] = e.requireModules

        this.setState({
          errorType: requireModule === name
            ? ERROR_TYPE.LOADING_ERROR : ERROR_TYPE.DEPENDENCIES_LOADING_ERROR,
          errorMessage: e.message,
        })
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

    $getMountedComponents = () => getStore()[MOUNTED_COMPONENTS] as string[]

    $t: ComponentProps['$t'] = (key, defaultText) => {
      if (!this.i18nConfig) {
        return defaultText
      }
      const { localeKey, resources } = this.i18nConfig
      const locale = this.props[localeKey] as string
      const resource = resources[locale]
      return resource[key] || defaultText
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
        Error,
        config: { ...rest, components },
        onMounted: onMountedFn,
      })
      const Fc = (p: { [key: string]: any }) => (<C {...p} />)

      render(<Fc {...props} />, target)
      return () => unmountComponentAtNode(target as Element)
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
            <Error
              type={ERROR_TYPE[errorType]}
              message={errorMessage}
              reload={errorType === ERROR_TYPE.INVALID_COMPONENT ? undefined : this.onReload}
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
          $dispatch={this.dispatch}
          $store={store}
          $render={onMounted ? undefined : this.$render}
          $preload={preload}
          $postMessage={this.postMessage}
          $getMountedComponents={this.$getMountedComponents}
          $t={this.$t}
        />
      )
    }
  }

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  return connect(key0, ...keyn)(R)
}

export default componentCreator
