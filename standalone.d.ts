declare module '@variousjs/various/standalone' {
  import { ComponentType, RefObject } from 'react'
  import {
    VariousComponentType,
    ObjectRecord,
    ModuleDef,
    FallbackNode,
    ErrorFallbackNode,
    Dispatch,
  } from '@variousjs/various'

  export {
    createDispatch,
    createLogger,
    createPostMessage,
  } from '@variousjs/various'

  export type DependencyType = string | object | Function

  export function createComponent<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Ref = unknown,
  >(
    config: ModuleDef & {
      url: string,
      type?: VariousComponentType,
      dependencies?: Partial<Record<
        string,
        DependencyType
      >>,
      storeKeys?: (keyof Store)[],
    },
  ): ComponentType<Props & {
    /**
     * for React Component only
     */
    $ref?: RefObject<Ref>,
  }>

   export function createAppConfig<Store extends object = ObjectRecord>(
    config: {
      dependencies: Partial<Record<
        string,
        DependencyType
      >>,
      store?: Store,
      actions?: Record<string, Dispatch<Store>>,
      fallback?: FallbackNode<Store>,
      errorFallback?: ErrorFallbackNode<Store>,
    },
  ): void
}
