import React, {
  ComponentType,
  FC,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { createComponent as cc, createConfig as con } from '@variousjs/various/standalone'
import { ObjectRecord } from '@variousjs/various'
import createComponentCore from '../core/create-component'
import ErrorBoundary from '../core/error-boundary'
import connector from '../core/connector'
import { onError, VariousError } from '../core/helper'
import { defineModules, loadRequireJS } from './helper'
import { createStore, emit, getUserStore } from '../core/store'
import {
  MOUNTED_COMPONENTS_KEY,
  DEPENDENCIES_KEY,
  CONFIG_KEY,
  MESSAGE_KEY,
} from '../core/config'

createStore({
  [MOUNTED_COMPONENTS_KEY]: [],
  [MESSAGE_KEY]: null,
  [CONFIG_KEY]: {},
  [DEPENDENCIES_KEY]: {},
})

const Standalone: FC<
  Parameters<typeof cc>['0'] & { $componentProps: ObjectRecord, $ref?: RefObject<unknown> }
> = (props) => {
  const {
    dependencies,
    url,
    name,
    module,
    type,
    $componentProps,
    $ref,
    storeKeys,
  } = props
  const [componentReady, setComponentReady] = useState(false)
  const componentNode = useRef<ComponentType<any>>()
  const errorRef = useRef<Error>()
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    loadRequireJS(dependencies?.requirejs)
      .then(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { requirejs, ...rest } = dependencies || {}
        return defineModules(rest)
      })
      .then(() => {
        componentNode.current = createComponentCore({
          name,
          module,
          url,
          type,
        }, storeKeys)
        setComponentReady(true)
      })
      .catch((e) => {
        errorRef.current = e
        setIsError(true)
      })
  }, [name, url, module, dependencies, type, storeKeys])

  if (isError) {
    throw errorRef.current
  }

  if (!componentReady) {
    const FallBack = connector.getFallbackComponent()
    return <FallBack $self={{ name, module, url }} $store={getUserStore()} />
  }

  const C = componentNode.current!

  return (
    <C {...$componentProps} ref={$ref} />
  )
}

Standalone.displayName = 'various-standalone'

export const createComponent: typeof cc = (args) => {
  const component: FC = (props: ObjectRecord) => (
    <ErrorBoundary name="standalone" url={args.url} module={args.module}>
      <Standalone $componentProps={props} {...args} />
    </ErrorBoundary>
  )
  const dispatch: ReturnType<typeof cc>['dispatch'] = (next) => {
    emit(next, true)
  }

  component.displayName = 'various-standalone-creator'
  return Object.assign(component, { dispatch })
}

export const createConfig: typeof con = (config) => {
  const {
    baseDependencies,
    errorFallback,
    fallback,
    store,
  } = config
  const { requirejs, ...rest } = baseDependencies

  if (errorFallback) {
    connector.setErrorFallbackComponent(errorFallback)
  }

  if (fallback) {
    connector.setFallbackComponent(fallback)
  }

  if (store) {
    emit(store)
  }

  loadRequireJS(requirejs)
    .then(() => {
      defineModules(rest)
    })
    .catch((e) => {
      onError(new VariousError({
        name: 'standalone',
        type: 'CONFIG_ERROR',
        originalError: e,
      }))
    })
}
