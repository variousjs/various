declare module '@variousjs/various' {
  import { ComponentType } from 'react'

  type $dispatch = (type: string, method: string, value?: any) => Promise<any>
  type $render = (params: {
    name: string,
    url?: string,
    module?: string,
    props?: Record<string, any>,
    target: Element | null,
    onMounted?: () => void,
  }) => () => void
  type $postMessage = (name: string, value?: any) => void
  type $t = (key: string, params?: Record<string, string | number>) => string | undefined
  type $component = (name: string) => ComponentType<{
    $silent?: boolean,
    [key: string]: any,
  }>

  export { default as Store, Dispatch } from 'nycticorax'

  export type $env = 'development' | 'production'

  export interface ComponentProps<S = {}, C = {}> {
    $config: Readonly<C>,
    $env: $env,
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $render?: $render,
    $postMessage: $postMessage,
    $t: $t,
    // $component: $component,
  }

  export interface ErrorProps<S = {}, C = {}> {
    $reload?: () => void,
    $type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'CONTAINER_ERROR',
    $message?: string,
    $env: $env,
    $config: Readonly<C>,
    $store: Readonly<S>,
  }

  export interface LoaderProps<S = {}, C = {}> {
    $env: $env,
    $config: Readonly<C>,
    $store: Readonly<S>,
  }

  export interface ContainerProps<C = {}> {
    $config: Readonly<C>,
    $component: $component,
    $env: $env,
  }

  type Dispatch<T> = (
    nycticorax: { getStore: () => T, emit: (next: Partial<T>) => void },
    params: { value?: any, trigger: string },
  ) => Promise<any>

  export type Actions<S = {}> = Record<string, Dispatch<S>>

  export type MessageInvoker = (
    message: { event?: string, component?: string, value?: any },
  ) => any

  export type Invoker = (params: { trigger: string, value?: any }) => any

  export type Ii8n = () => {
    localeKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export const isComponentLoaded: (name: string) => boolean
  export const getMountedComponents: () => string[]
  export const preloadComponents: (names: string[]) => Promise<void>
  export const onComponentMounted: (name: string, callback: () => void) => () => void
}
