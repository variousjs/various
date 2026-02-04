import '@variousjs/requirejs'
import React, {
  ComponentType,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createComponent as cc } from '@variousjs/various/standalone'
import { ObjectRecord } from '@variousjs/various'
import createComponentCore from '../core/create-component'
import ErrorBoundary from '../core/error-boundary'
import connector from '../core/connector'
import { defineModules } from './helper'
import { createStore, getUserStore, useStore } from '../core/store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  CONFIG_KEY,
  MESSAGE_KEY,
  STANDALONE_CONFIG_READY,
} from '../core/config'

export { createAppConfig } from './helper'
export { createDispatch, createLogger, createPostMessage } from '../core'

createStore({
  [MOUNTED_COMPONENTS_KEY]: [],
  [MESSAGE_KEY]: null,
  [CONFIG_KEY]: {},
  [DEPENDENCIES_KEY]: {},
  [STANDALONE_CONFIG_READY]: undefined,
})

window.define('react', [], () => React)

const Standalone: FC<
  Parameters<typeof cc<any, any, any>>['0'] & { $componentProps: ObjectRecord, $ref?: RefObject<unknown> }
> = (props) => {
  const {
    dependencies,
    url,
    module,
    type,
    $componentProps,
    $ref,
    storeKeys,
  } = props
  const store = useStore(STANDALONE_CONFIG_READY)
  const [componentReady, setComponentReady] = useState(false)
  const componentNode = useRef<ComponentType<any>>()

  useEffect(() => {
    defineModules(dependencies || {})
      .then(() => {
        componentNode.current = createComponentCore({
          module,
          url,
          type,
        }, storeKeys as any)
        setComponentReady(true)
      })
  }, [url, module, dependencies, type, storeKeys])

  if (!componentReady || store[STANDALONE_CONFIG_READY] === false) {
    const FallBack = connector.getFallbackComponent()
    return <FallBack $self={{ module, url }} $store={getUserStore()} />
  }

  const C = componentNode.current!

  return (
    <C {...$componentProps} ref={$ref} />
  )
}

Standalone.displayName = 'various-standalone'

export const createComponent: typeof cc = (args) => {
  const component: FC = (props: ObjectRecord) => (
    <ErrorBoundary url={args.url} module={args.module}>
      <Standalone $componentProps={props} {...args} />
    </ErrorBoundary>
  )

  component.displayName = 'various-standalone-creator'
  return component
}
