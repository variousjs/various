/* eslint-disable no-throw-literal */
import React, { Component, ComponentType } from 'react'
import { I18n, OnMessage, ComponentDefaultProps } from '@variousjs/various'
import {
  isReactComponent,
  onError,
  getNameWithModule,
  getMountedComponents,
  resetModuleConfig,
} from '../helper'
import {
  connect,
  getStore,
  emit,
  getUserStore,
} from '../store'
import { MOUNTED_COMPONENTS_KEY, ERROR_TYPE } from '../../config'
import connector from '../connector'
import { getPostMessage, getOnMessage } from './message'
import getDispatch from './dispatch'
import getI18n from './i18n'
import createModule from '../create-module'
import {
  ErrorState,
  RequiredComponent,
  ComponentActions,
  Store,
} from '../../types'

function createReactComponent<P extends object>(config: {
  name: string,
  module?: string,
  url?: string,
  watchKeys?: string[],
  onMounted?: () => void,
}) {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted,
  } = config
  const storeKeys = (watchKeys || Object.keys(getStore()))
  const nameWidthModule = getNameWithModule(name, module)

  class R extends Component<
    Store & { $silent?: boolean, $componentProps: P & ComponentDefaultProps },
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
      this.setState({ componentExist: !!connector.getComponent(nameWidthModule) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      onError({
        name,
        module,
        type: ERROR_TYPE.SCRIPT_ERROR,
        message: e.message,
      })

      this.setState({ errorMessage: e.message, errorType: ERROR_TYPE.SCRIPT_ERROR })
      resetModuleConfig(name)
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

    mountComponent = async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({
          name,
          module,
          url,
        })

        if (this.isUnMounted) {
          return
        }

        if (!isReactComponent(componentNode)) {
          throw {
            errorMessage: 'not a valid React component',
            errorType: ERROR_TYPE.INVALID_COMPONENT,
          }
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
      } catch (e) {
        const errorInfo = e as ErrorState

        if (this.isUnMounted) {
          return
        }

        onError({
          name,
          module,
          type: errorInfo.errorType!,
          message: errorInfo.errorMessage,
        })
        this.setState(errorInfo)
      }
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
      const ErrorNode = connector.getErrorComponent()
      const LoaderNode = connector.getLoaderComponent()
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
              $reload={[
                ERROR_TYPE.NOT_DEFINED,
              ].includes(errorType) ? undefined : this.onReload}
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

export default createReactComponent
