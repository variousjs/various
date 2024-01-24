import React, { Component, ComponentType } from 'react'
import { I18n, OnMessage } from '@variousjs/various'
import { onError } from '../helper'
import { isComponentLoaded, getMountedComponents } from './helper'
import {
  connect,
  getStore,
  emit,
  getUserStore,
} from '../store'
import { MOUNTED_COMPONENTS_KEY, ERROR_TYPE, DEPENDENCIES_KEY } from '../../config'
import connector from '../connector'
import { getPostMessage, getOnMessage } from './message'
import getDispatch from './dispatch'
import getI18n from './i18n'
import {
  RequireError,
  ErrorState,
  RequiredComponent,
  ComponentActions,
  Store,
} from '../../types'

export default function (nameWidthModule: string, onMounted?: () => void) {
  const storeKeys = Object.keys(getStore())
  const dependencies = getStore(DEPENDENCIES_KEY)
  const LoaderNode = connector.getLoaderComponent()
  const ErrorNode = connector.getErrorComponent()
  const symbolModule = Symbol('module')
  const [name, module = symbolModule] = nameWidthModule.split('.')

  class R extends Component<
    Store & { $silent?: boolean, $componentProps: any },
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

    private unSubscribe = () => null as unknown

    componentDidMount() {
      this.setState({ componentExist: isComponentLoaded(name) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      onError({
        name: nameWidthModule,
        type: ERROR_TYPE.SCRIPT_ERROR,
        message: e.message,
      })
      this.setState({ errorMessage: e.message, errorType: ERROR_TYPE.SCRIPT_ERROR })

      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: `${dependencies[name]}#`,
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
      emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)

      connector.deleteComponentActions(nameWidthModule)
    }

    mountComponent = () => {
      if (name === 'store') {
        const errorMessage = 'cannot load component named `store`'
        onError({
          name: nameWidthModule,
          type: ERROR_TYPE.INVALID_COMPONENT,
          message: errorMessage,
        })
        this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
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
          onError({
            name: nameWidthModule,
            type: ERROR_TYPE.INVALID_COMPONENT,
            message: errorMessage,
          })
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const componentNode = module === symbolModule ? (C.default || C) : C[module]

        if (!componentNode) {
          const errorMessage = 'module not defined'
          onError({
            name: nameWidthModule,
            type: ERROR_TYPE.INVALID_COMPONENT,
            message: errorMessage,
          })
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        if (typeof componentNode !== 'function') {
          const errorMessage = 'module cannot be executed'
          onError({
            name: nameWidthModule,
            type: ERROR_TYPE.INVALID_COMPONENT,
            message: errorMessage,
          })
          this.setState({ errorMessage, errorType: ERROR_TYPE.INVALID_COMPONENT })
          return
        }

        const mountedComponents = getMountedComponents()
        const actions: ComponentActions = {}

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
              this.unSubscribe = getOnMessage(
                nameWidthModule,
                componentNode[method] as OnMessage,
              )
              return
            }
            if (method === '$i18n') {
              const i18nConfig = (componentNode[method] as I18n)()
              connector.setI18nConfig(nameWidthModule, i18nConfig)
              return
            }

            actions[method] = componentNode[method]
          })

        connector.setComponentActions(nameWidthModule, actions)

        this.ComponentNode = componentNode
        this.setState({ componentReady: true })

        if (onMounted) {
          onMounted()
        }

        emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
      }, (e: RequireError) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${dependencies[name]}#`,
          },
        })

        if (this.isUnMounted) {
          return
        }

        const [requireModule] = e.requireModules

        const errorType = requireModule === name
          ? ERROR_TYPE.LOADING_ERROR
          : ERROR_TYPE.DEPENDENCIES_LOADING_ERROR
        onError({
          name: nameWidthModule,
          type: errorType,
          message: e.message,
        })
        this.setState({ errorMessage: e.message, errorType })
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

    $dispatch = getDispatch(nameWidthModule)

    $t = getI18n(nameWidthModule)

    render() {
      const { $silent, $componentProps } = this.props
      const {
        componentReady, errorMessage, errorType, componentExist,
      } = this.state
      const store = getUserStore()
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (errorType) {
        return !$silent
          ? (
            <ErrorNode
              $type={ERROR_TYPE[errorType]}
              $message={errorMessage}
              $reload={errorType === ERROR_TYPE.INVALID_COMPONENT ? undefined : this.onReload}
              $store={store as Store}
            />
          )
          : null
      }

      if (!componentReady) {
        return !$silent && componentExist === false
          ? (<LoaderNode $store={store as Store} />)
          : null
      }

      return (
        <ComponentNode
          {...$componentProps}
          $dispatch={this.$dispatch}
          $store={store}
          $postMessage={this.$postMessage}
          $t={this.$t}
        />
      )
    }
  }

  (R as ComponentType<any>).displayName = nameWidthModule

  return connect(...storeKeys)(R)
}
