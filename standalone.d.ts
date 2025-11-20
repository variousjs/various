declare module '@variousjs/various/standalone' {
  import { ComponentType, RefObject } from 'react'
  import {
    VariousComponentType,
    ObjectRecord,
    ModuleDefined,
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

  export function createComponent<P extends object = ObjectRecord>(
    config: ModuleDefined & {
      url: string,
      type?: VariousComponentType,
      dependencies?: Partial<Record<
        string,
        DependencyType
      >>,
      storeKeys?: string[],
    },
  ): ComponentType<P & {
    /**
     * for React Component only
     */
    $ref?: RefObject<unknown>,
  }>

   export function createAppConfig<S extends object = ObjectRecord>(
    config: {
      dependencies: Partial<Record<
        string,
        DependencyType
      >>,
      store?: S,
      actions?: Record<string, Dispatch<S>>,
      fallback?: FallbackNode<S>,
      errorFallback?: ErrorFallbackNode<S>,
    },
  ): void
}
