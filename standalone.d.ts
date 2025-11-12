declare module '@variousjs/various/standalone' {
  import { ComponentType, RefObject } from 'react'
  import {
    VariousComponentType,
    ObjectRecord,
    ModuleDefined,
    ErrorNode,
    LoaderNode,
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
    },
  ): ComponentType<P & {
    /**
     * for React Component only
     */
    $ref?: RefObject<unknown>,
  }> & {
    updateLng: (key: string, value: string) => void,
  }

   export function createConfig(
    config: {
      baseDependencies: Partial<Record<
        'react' | 'vue' | 'requirejs',
        DependencyType
      >>,
      lng?: { key: string, defaultValue: string },
      fallback?: LoaderNode<any>,
      errorFallback?: ErrorNode<any>,
    },
  ): void
}
