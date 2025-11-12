import React, { Component } from 'react'
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
  isModuleLoaded,
  getSelfInfo,
} from './helper'
import { connect, getStore, getUserStore } from './store'
import connector from './connector'
import { createPostMessage } from './message'
import createDispatch from './dispatch'
import createLogger from './logger'
import { createI18n } from './i18n'
import createModule from './create-module'
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
    static displayName = 'various-react-component'

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

    $t = createI18n({ name, module }, () => this.forceUpdate())

    $logger = createLogger({ name, module })

    $self = getSelfInfo({ name, module, url })

    render() {
      const Fallback = connector.getFallbackComponent()
      const { $silent, $componentProps, $ref } = this.props
      const { componentReady, isError } = this.state
      const store = getUserStore()
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (isError) {
        throw this.error
      }

      if (!componentReady) {
        if ($silent || isModuleLoaded(name)) {
          return null
        }

        return (
          <Fallback
            $self={this.$self}
            $store={store as Store}
          />
        )
      }

      return (
        <ComponentNode
          {...$componentProps}
          $self={this.$self}
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

  return Connected
}

export default reactComponent
