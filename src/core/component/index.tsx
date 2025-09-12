import React, { Component, ComponentType } from 'react'
import {
  ComponentDefaultProps, I18n, OnMessage, VariousError as ve,
} from '@variousjs/various'
import {
  isReactComponent,
  onError,
  getMountedComponents,
  resetDependencyConfig,
  VariousError,
  hasModule,
  getNameWithModule,
  isPromiseLike,
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
import createLogger from '../logger'
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
  onMounted: () => void,
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
    CreateComponentProps<P> & ComponentDefaultProps,
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

    private unSubscribeMessage = () => null as unknown

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
      resetDependencyConfig(name)
      this.unMountComponent()
    }

    componentWillUnmount() {
      this.error = undefined
      this.ComponentNode = null
      this.unMountComponent()
      this.isUnMounted = true
      this.unSubscribeMessage()
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
              this.unSubscribeMessage = getOnMessage(
                { name, module },
                componentNode[method] as OnMessage,
              )
              return
            }
            if (method === '$i18n') {
              const i18nConfig = (componentNode[method] as I18n)()

              if (!isPromiseLike(i18nConfig)) {
                connector.setI18nConfig({ name, module }, i18nConfig)
                return
              }

              i18nConfig
                .then((res) => {
                  connector.setI18nConfig({ name, module }, res)
                  this.forceUpdate()
                })
                .catch((e: Error) => {
                  onError(new VariousError({
                    name,
                    module,
                    type: 'I18N',
                    originalError: e,
                  }))
                })

              return
            }

            actions[method] = componentNode[method]
          })

        connector.setComponentActions({ name, module }, actions)

        this.ComponentNode = componentNode
        this.setState({ componentReady: true })

        onMounted()
        emit({ [MOUNTED_COMPONENTS_KEY]: mountedComponents }, true)
      } catch (e) {
        if (e instanceof VariousError) {
          this.error = e
        } else {
          const error = new VariousError({
            name,
            module,
            type: 'SCRIPT_ERROR',
            originalError: e as Error,
          })
          onError(error)
          this.error = error
        }

        if (this.isUnMounted) {
          return
        }

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

    $logger = createLogger({ name, module })

    render() {
      const ErrorNode = connector.getErrorComponent()
      const LoaderNode = connector.getLoaderComponent()
      const { $silent, $componentProps, $ref } = this.props
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
        if ($silent || componentExist) {
          return null
        }

        return (
          <LoaderNode
            $name={name}
            $module={module}
            $store={store as Store}
          />
        )
      }

      return (
        <ComponentNode
          {...$componentProps}
          $dispatch={this.$dispatch}
          $store={store}
          $postMessage={this.$postMessage}
          $t={this.$t}
          $logger={this.$logger}
          ref={$ref}
        />
      )
    }
  }

  (R as ComponentType<any>).displayName = getNameWithModule({ name, module })

  return connect(...storeKeys)(R)
}

export default createReactComponent
