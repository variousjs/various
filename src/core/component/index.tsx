import React, { Component, ComponentType } from 'react'
import { I18n, OnMessage, VariousError as ve } from '@variousjs/various'
import {
  isReactComponent,
  onError,
  getMountedComponents,
  resetModuleConfig,
  VariousError,
  hasModule,
  getNameWithModule,
} from '../helper'
import {
  connect,
  getStore,
  emit,
  getUserStore,
} from '../store'
import { MOUNTED_COMPONENTS_KEY } from '../../config'
import connector from '../connector'
import { getPostMessage, getOnMessage } from './message'
import getDispatch from './dispatch'
import getI18n from './i18n'
import createModule from '../create-module'
import {
  CreateComponentState,
  CreateComponentProps,
  RequiredComponent,
  PublicActions,
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

  class R extends Component<
    CreateComponentProps<P>,
    CreateComponentState
  > {
    state = {
      componentExist: false,
      componentReady: false,
      isError: false,
    }

    private error?: ve

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

    private unSubscribe = () => null as unknown

    componentDidMount() {
      this.setState({ componentExist: !!connector.getComponent({ name, module }) })
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      const error = new VariousError({
        name,
        module,
        type: 'SCRIPT_ERROR',
        originalError: e,
      })

      onError(error)

      this.error = error
      this.setState({ isError: true })
      resetModuleConfig(name)
      this.unMountComponent()
    }

    componentWillUnmount() {
      this.error = undefined
      this.ComponentNode = null
      this.unMountComponent()
      this.isUnMounted = true
      this.unSubscribe()
    }

    unMountComponent = () => {
      let mountedComponents = getMountedComponents()
      mountedComponents = mountedComponents
        .filter((item) => item.name !== name || item.module !== module)
      emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
      connector.deleteComponentActions({ name, module })
    }

    mountComponent = async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({ name, module, url })

        if (this.isUnMounted) {
          return
        }

        if (!isReactComponent(componentNode)) {
          const error = new VariousError({
            name,
            module,
            originalError: new Error('Not a valid React component'),
            type: 'INVALID_COMPONENT',
          })

          onError(error)
          throw error
        }

        const mountedComponents = getMountedComponents()
        const actions: PublicActions = {}

        if (!hasModule(mountedComponents, { name, module })) {
          mountedComponents.push({ name, module })
        }

        Object
          .getOwnPropertyNames(componentNode)
          .forEach((method) => {
            if (typeof componentNode[method] !== 'function') {
              return
            }
            if (method === '$onMessage') {
              this.unSubscribe = getOnMessage(
                { name, module },
                componentNode[method] as OnMessage,
              )
              return
            }
            if (method === '$i18n') {
              const i18nConfig = (componentNode[method] as I18n)()
              connector.setI18nConfig({ name, module }, i18nConfig)
              return
            }

            actions[method] = componentNode[method]
          })

        connector.setComponentActions({ name, module }, actions)

        this.ComponentNode = componentNode
        this.setState({ componentReady: true })

        if (onMounted) {
          onMounted()
        }

        emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
      } catch (e) {
        const error = e as VariousError

        if (this.isUnMounted) {
          return
        }

        this.error = error
        this.setState({ isError: true })
      }
    }

    onReload = () => {
      this.setState({
        isError: false,
        componentReady: false,
      }, () => {
        this.mountComponent()
      })
    }

    $postMessage = getPostMessage({ name, module })

    $dispatch = getDispatch({ name, module })

    $t = getI18n({ name, module })

    render() {
      const ErrorNode = connector.getErrorComponent()
      const LoaderNode = connector.getLoaderComponent()
      const { $silent, $componentProps } = this.props
      const {
        componentReady, isError, componentExist,
      } = this.state
      const store = getUserStore()
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (isError) {
        return !$silent
          ? (
            <ErrorNode
              $name={name}
              $module={module}
              $reload={[
                'NOT_DEFINED',
              ].includes(this.error!.type) ? undefined : this.onReload}
              $store={store as Store}
              $error={this.error!}
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

  (R as ComponentType<any>).displayName = getNameWithModule({ name, module })

  return connect(...storeKeys)(R)
}

export default createReactComponent
