declare module '@variousjs/various/standalone' {
  import { ComponentType, RefObject } from 'react'
  import {
    VariousComponentType,
    ObjectRecord,
    ModuleDef,
    App,
  } from '@variousjs/various'

  export {
    createDispatch,
    createLogger,
    createPostMessage,
  } from '@variousjs/various'

  export type DependencyType = string | object | Function

  export function createComponent<
    Props extends object = ObjectRecord,
    Ref = unknown,
    Store extends object = ObjectRecord
  >(
    config: {
      module: ModuleDef,
      url: string,
      type?: VariousComponentType,
      dependencies?: Partial<Record<
        string,
        DependencyType
      >>,
      /**
      * set store keys if component created before store initialization
      */
      storeKeys?: (keyof Store)[],
    },
  ): ComponentType<Props & {
    /**
     * for React Component only
     */
    $ref?: RefObject<Ref>,
  }>

  export type AppConfig<Store extends object = ObjectRecord> = Pick<
    App<Store>,
    'actions' | 'store' | 'Fallback' | 'ErrorFallback'
  > & {
    dependencies: Partial<Record<
      string,
      DependencyType
    >>
  }

  export function createAppConfig<Store extends object = ObjectRecord>(
    config: AppConfig<Store>
  ): void
}
