import React, { Component, FC } from 'react'
import {
  ComponentDefaultProps,
  VariousError as ve,
  ModuleDefined,
} from '@variousjs/various'
import {
  checkReactComponent,
  getNameWithModule,
  updateUnMountComponent,
  updateMountedComponent,
  parseComponentActions,
} from './helper'
import { connect, getStore, getUserStore } from './store'
import connector from './connector'
import { createPostMessage } from './message'
import createDispatch from './dispatch'
import createLogger from './logger'
import { createI18n } from './i18n'
import createModule from './create-module'
import ErrorBoundary from './error-boundary'
import {
  CreateComponentState,
  CreateComponentProps,
  RequiredComponent,
  Store,
} from '../types'

function reactComponent<P extends object>(config: ModuleDefined & {
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
    CreateComponentProps<P> & ComponentDefaultProps,
    CreateComponentState
  > {
    static displayName = 'various-component'

    state = {
      componentReady: false,
      isError: false,
    }

    private error?: ve | Error

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

    private unSubscribeMessage = () => null as unknown

    componentDidMount() {
      this.mountComponent()
    }

    componentWillUnmount() {
      this.error = undefined
      this.ComponentNode = null
      this.isUnMounted = true
      this.unSubscribeMessage()
      updateUnMountComponent({ name, module })
    }

    mountComponent = async () => {
      try {
        const componentNode = await createModule<RequiredComponent>({ name, module, url }, false)

        if (this.isUnMounted) {
          return
        }

        await checkReactComponent(componentNode, { name, module })

        componentNode.displayName = getNameWithModule({ name, module })

        updateMountedComponent({ name, module })

        this.unSubscribeMessage = parseComponentActions({
          componentNode,
          name,
          module,
          i18nUpdate: () => this.forceUpdate(),
        })

        this.ComponentNode = componentNode
        this.setState({ componentReady: true })

        onMounted?.()
      } catch (e) {
        if (this.isUnMounted) {
          return
        }

        this.error = e as Error
        this.setState({ componentReady: true, isError: true })
      }
    }

    $postMessage = createPostMessage({ name, module })

    $dispatch = createDispatch({ name, module })

    $t = createI18n({ name, module })

    $logger = createLogger({ name, module })

    render() {
      const LoaderNode = connector.getLoaderComponent()
      const { $silent, $componentProps, $ref } = this.props
      const { componentReady, isError } = this.state
      const store = getUserStore()
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (isError) {
        throw this.error
      }

      if (!componentReady) {
        if ($silent) {
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
