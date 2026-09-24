import React, {
  ComponentType,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import type {
  StandaloneCreateComponent,
  StandaloneComponentConfig,
  ObjectRecord,
} from '../public/types'
import createComponentCore from '../core/create-component'
import { createErrorBoundary } from '../core/error-boundary'
import connector from '../core/connector'
import { defineModules } from './helper'
import { setModule } from '../core/helper'
import { setModuleUrl } from '../core/system'
import { createStore, getUserStore, useStore } from '../core/store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  CONFIG_KEY,
  MESSAGE_KEY,
  STANDALONE_CONFIG_READY,
  LOCALE_KEY,
  DEFAULT_LOCALE,
} from '../core/config'

export { createAppConfig } from './helper'
export { createDispatch, createLogger, createPostMessage } from '../core'

createStore({
  [MOUNTED_COMPONENTS_KEY]: [],
  [MESSAGE_KEY]: null,
  [CONFIG_KEY]: {},
  [DEPENDENCIES_KEY]: {},
  [STANDALONE_CONFIG_READY]: undefined,
  [LOCALE_KEY]: DEFAULT_LOCALE,
})

// Register local React so remote components import the same instance
setModule('react', React)

const Standalone: FC<
  StandaloneComponentConfig & { $componentProps: ObjectRecord, $ref?: RefObject<unknown> }
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
    return (
      <FallBack
        $self={{ module, url: url || '' }}
        $store={getUserStore()}
        $locale={store[LOCALE_KEY]}
      />
    )
  }

  const C = componentNode.current!

  return (
    <C {...$componentProps} ref={$ref} />
  )
}

Standalone.displayName = 'various-standalone'

export const createComponent: StandaloneCreateComponent = (args) => {
  // Pre-register all dependencies so they're included in the import map
  // created by createAppConfig or the first useEffect (browser only supports
  // one import map, added before any import() call)
  if (args.dependencies) {
    Object.entries(args.dependencies).forEach(([key, value]) => {
      if (typeof value === 'string') {
        setModuleUrl(key, value)
      } else {
        setModule(key, value)
      }
    })
  }

  const ErrorBoundary = createErrorBoundary()

  const component: FC = (props: ObjectRecord) => (
    <ErrorBoundary url={args.url} module={args.module}>
      {/* args.storeKeys is (keyof Store)[]; the inner component treats it as string[] */}
      <Standalone $componentProps={props} {...(args as StandaloneComponentConfig)} />
    </ErrorBoundary>
  )

  component.displayName = 'various-standalone-creator'
  return component
}
