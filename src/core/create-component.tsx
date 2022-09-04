import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { Ii8n, MessageInvoker } from '@variousjs/various'
import onError from './error'
import { isComponentLoaded, getMountedComponents } from './component-helper'
import { connect, getStore, emit, subscribe, dispatch } from './store'
import { MOUNTED_COMPONENTS, ERROR_TYPE, MESSAGE_KEY } from '../config'
import {
  RequireError, ErrorState, ComponentProps, RequiredComponent, Creator,
  ComponentDispatcher, Store,
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
  const { components, mode, ...rest } = config
  const symbolModule = Symbol('module')
  const [name, module = symbolModule] = nameWidthModule.split('.')

  class R extends Component<
    Store & { $silent?: boolean },
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

    private onError = onError

    componentDidMount() {
      this.setState({ componentExist: isComponentLoaded(name) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      this.onError({
        name: nameWidthModule,
        type: 'SCRIPT_ERROR',
        message: e.message,
        mode,
      })

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
        this.onError({
          name: nameWidthModule,
          type: 'INVALID_COMPONENT',
          message: 'cannot load component named `store`',
          mode,
        })
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
          this.onError({
            name: nameWidthModule,
            type: 'INVALID_COMPONENT',
            message: 'no content',
            mode,
          })
          return
        }

        const componentNode = module === symbolModule ? (C.default || C) : C[module]

        if (!componentNode) {
          this.onError({
            name: nameWidthModule,
            type: 'INVALID_COMPONENT',
            message: 'module not defined',
            mode,
          })
          return
        }

        if (typeof componentNode !== 'function') {
          this.onError({
            name: nameWidthModule,
            type: 'INVALID_COMPONENT',
            message: 'module cannot be executed',
            mode,
          })
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
              this.unSubscribe = subscribe({
                [MESSAGE_KEY](v) {
                  const { name: trigger, value, type: triggerType } = v as Store[typeof MESSAGE_KEY]
                  if (triggerType !== nameWidthModule) {
                    (componentNode[method] as MessageInvoker)({
                      name: trigger!,
                      value,
                      type: triggerType!,
                    })
                  }
                },
              })
              return
            }
            if (method === '$i18n') {
              const i18nConfig = (componentNode[method] as Ii8n)()
              this.i18nConfig = i18nConfig
              return
            }

            actions[method] = componentNode[method]
          })

        // eslint-disable-next-line no-param-reassign
        componentDispatcher[nameWidthModule] = actions

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

        this.onError({
          name: nameWidthModule,
          type: requireModule === name ? 'LOADING_ERROR' : 'DEPENDENCIES_LOADING_ERROR',
          message: e.message,
          mode,
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

    $postMessage = (trigger: string, value: any) => emit({
      [MESSAGE_KEY]: {
        timestamp: +new Date(),
        type: nameWidthModule,
        name: trigger,
        value,
      },
    })

    $dispatch: ComponentProps['$dispatch'] = (dispatchName, func, value) => {
      if (dispatchName === 'store') {
        if (!storeDispatcher[func]) {
          const errorMessage = `\`store\` action \`${func}\` is not present`
          onError({
            name: nameWidthModule,
            type: 'dispatch',
            message: errorMessage,
            mode,
          })
          throw new Error(errorMessage)
        }
        return dispatch(storeDispatcher[func], { value, trigger: nameWidthModule })
      }

      const actions = componentDispatcher[dispatchName]

      if (!actions) {
        const errorMessage = `component \`${dispatchName}\` is not ready`
        onError({
          name: nameWidthModule,
          type: 'dispatch',
          message: errorMessage,
          mode,
        })
        throw new Error(errorMessage)
      }

      if (!actions[func]) {
        const errorMessage = `\`${dispatchName}\` action \`${func}\` is not present`
        onError({
          name: nameWidthModule,
          type: 'dispatch',
          message: errorMessage,
          mode,
        })
        throw new Error(errorMessage)
      }

      return Promise.resolve(actions[func]({ value, trigger: nameWidthModule }))
    }

    $t: ComponentProps['$t'] = (key, params) => {
      if (!this.i18nConfig) {
        onError({
          name: nameWidthModule,
          type: 'i18n',
          message: 'config not exist',
          mode,
        })
        return key
      }
      const { localeKey, resources } = this.i18nConfig
      const locale = this.props[localeKey] as string
      const resource = resources[locale]

      if (!resource) {
        onError({
          name: nameWidthModule,
          type: 'i18n',
          message: `locale \`${locale}\` not exist`,
          mode,
        })
        return key
      }

      if (!resource[key]) {
        onError({
          name: nameWidthModule,
          type: 'i18n',
          message: `key \`${key}\` not exist`,
          mode,
        })
        return key
      }

      const text = resource[key]
      if (!params || Object.prototype.toString.call(params) !== '[object Object]') {
        return text
      }

      const args = Object.keys(params)
      if (!args.length) {
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
        config: { ...rest, components, mode },
        onMounted: onMountedFn,
        isRender: true,
      })
      const Fc = (p: { [key: string]: any }) => (<C {...p} />)
      const Root = createRoot(target as Element)
      Root.render(<Fc {...props} />)

      return () => setTimeout(() => Root.unmount())
    }

    render() {
      const { $silent, ...propsRest } = this.props
      const { componentReady, errorMessage, errorType, componentExist } = this.state
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
          $config={{ ...rest, mode }}
          $dispatch={this.$dispatch}
          $store={store}
          $render={isRender ? undefined : this.$render}
          $postMessage={this.$postMessage}
          $t={this.$t}
        />
      )
    }
  }

  return connect(...storeKeys)(R)
}
