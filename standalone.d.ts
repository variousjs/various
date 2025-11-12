declare module '@variousjs/various/standalone' {
  import { ComponentType, RefObject } from 'react'
  import {
    VariousComponentType,
    ObjectRecord,
    ModuleDefined,
    FallbackNode,
    ErrorFallbackNode,
  } from '@variousjs/various'

  export type DependencyType = string | object | Function

  export function createComponent<P extends object = ObjectRecord>(
    config: ModuleDefined & {
      url: string,
      type?: VariousComponentType,
      dependencies?: Partial<Record<
        'react' | 'vue' | 'requirejs' | (string & {}),
        DependencyType
      >>,
      storeKeys?: string[],
    },
  ): ComponentType<P & {
    /**
     * for React Component only
     */
    $ref?: RefObject<unknown>,
  }> & {
    dispatch: (next: Record<string, any>) => void,
  }

   export function createConfig(
    config: {
      baseDependencies: Partial<Record<
        'react' | 'vue' | 'requirejs' | (string & {}),
        DependencyType
      >>,
      store?: Record<string, any>,
      fallback?: FallbackNode<ObjectRecord>,
      errorFallback?: ErrorFallbackNode<ObjectRecord>,
    },
  ): void
}
