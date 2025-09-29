import React, { Component, FC } from 'react'
import {
  ComponentDefaultProps,
  OnMessage,
  VariousError as ve,
  ModuleDefined,
} from '@variousjs/various'
import {
  isReactComponent,
  getMountedComponents,
  VariousError,
  hasModule,
  getNameWithModule,
  unMountComponent,
} from './helper'
import {
  connect,
  getStore,
  emit,
  getUserStore,
} from './store'
import { MOUNTED_COMPONENTS_KEY } from './config'
import connector from './connector'
import { createPostMessage, createOnMessage } from './message'
import getDispatch from './dispatch'
import createLogger from './logger'
import { createI18n, createI18nConfig } from './i18n'
import createModule from './create-module'
import ErrorBoundary from './error-boundary'
import {
  CreateComponentState,
  CreateComponentProps,
  RequiredComponent,
  PublicActions,
  Store,
} from './types'

function reactComponent<P extends object>(config: ModuleDefined & {
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
    static displayName = getNameWithModule({ name, module })

    state = {
      componentExist: false,
      componentReady: false,
      isError: false,
    }

    private error?: ve | Error

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

    private unSubscribeMessage = () => null as unknown

    componentDidMount() {
      this.setState({ componentExist: !!connector.getComponent({ name, module }) })
      this.mountComponent()
    }

    componentWillUnmount() {
      this.error = undefined
      this.ComponentNode = null
      this.isUnMounted = true
      this.unSubscribeMessage()

      unMountComponent({ name, module })
    }

    mountComponent = async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (this.isUnMounted) {
          return
        }

        if (!isReactComponent(componentNode)) {
          throw new VariousError({
            name,
            module,
            originalError: new Error('not a valid React component'),
            type: 'INVALID_COMPONENT',
          })
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
              this.unSubscribeMessage = createOnMessage(
                { name, module },
                componentNode[method] as OnMessage,
              )
              return
            }
            if (method === '$i18n') {
              createI18nConfig(componentNode[method], { name, module }, () => {
                this.forceUpdate()
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
        if (this.isUnMounted) {
          return
        }

        this.error = e as Error
        this.setState({ componentReady: true, isError: true })
      }
    }

    $postMessage = createPostMessage({ name, module })

    $dispatch = getDispatch({ name, module })

    $t = createI18n({ name, module })

    $logger = createLogger({ name, module })

    render() {
      const LoaderNode = connector.getLoaderComponent()
      const { $silent, $componentProps, $ref } = this.props
      const {
        componentReady,
        isError,
        componentExist,
      } = this.state
      const store = getUserStore()
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (isError) {
        throw this.error
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

  const Connected = connect(...storeKeys)(R)

  Connected.displayName = 'various-connector'

  const ReactCreator: FC<CreateComponentProps<P> & ComponentDefaultProps> = (props) => (
    <ErrorBoundary name={name} module={module}>
      <Connected {...props} />
    </ErrorBoundary>
  )

  ReactCreator.displayName = 'various-react-creator'

  return ReactCreator
}

export default reactComponent
