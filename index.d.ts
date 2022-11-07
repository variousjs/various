declare module '@variousjs/various' {
  import { ComponentType } from 'react'

  type $dispatch = (type: string, method: string, value?: any) => Promise<any>
  type $postMessage = (name: string, value?: any) => void
  type $t = (key: string, params?: Record<string, string | number>) => string | undefined

  type CreateComponent = (name: string) => ComponentType<{
    $silent?: boolean,
    [key: string]: any,
  }>
  type RenderComponent = (params: {
    name: string,
    url?: string,
    module?: string,
    props?: Record<string, any>,
    target: Element | null,
    onMounted?: () => void,
  }) => () => void

  export type ENV = 'development' | 'production'

  export { default as Store, Dispatch } from 'nycticorax'

  export interface ComponentProps<S = {}> {
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $postMessage: $postMessage,
    $t: $t,
  }

  export interface ErrorProps<S = {}> {
    $reload?: () => void,
    $type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'CONTAINER_ERROR',
    $message?: string,
    $store: Readonly<S>,
  }

  export interface LoaderProps<S = {}> {
    $store: Readonly<S>,
  }

  type Dispatch<T> = (
    nycticorax: { getStore: () => T, emit: (next: Partial<T>) => void },
    value: any,
    trigger: string,
  ) => Promise<any>

  export type Actions<S = {}> = Record<string, Dispatch<S>>

  export type MessageInvoker = (
    message: { event?: string, component?: string, value?: any },
  ) => any

  export type Invoker = (value: any, trigger: string) => any

  export type Ii8n = () => {
    localeKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export const isComponentLoaded: (name: string) => boolean
  export const getMountedComponents: () => string[]
  export const preloadComponents: (names: string[]) => Promise<void>
  export const onComponentMounted: (name: string, callback: () => void) => () => void
  export const renderComponent: RenderComponent
  export const createComponent: CreateComponent
  export const getEnv: () => ENV
  export const getConfig: () => Record<string, any>
}
