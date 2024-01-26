declare module '@variousjs/various' {
  import { ComponentType, FC } from 'react'

  export { default as Nycticorax, Dispatch } from 'nycticorax'

  type $dispatch = (name: string, method: string, value?: any) => Promise<any>
  type $postMessage = (event: string, value?: any) => void
  type $t = (key: string, params?: Record<string, string | number>) => string

  type RenderComponent = (params: {
    name: string,
    url?: string,
    module?: string,
    props?: Record<string, any>,
    target: Element | null,
    onMounted?: () => void,
  }) => () => void

  export type ENV = 'development' | 'production'

  export type Invoker = (value: any, trigger: string) => any

  export type I18n = () => {
    localeKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export interface Message { event: string, component: string, value?: any }

  export type OnMessage = (message: Message) => void

  export interface StaticProps {
    $i18n?: I18n,
    $onMessage?: OnMessage,
    [x: string]: Invoker,
  }

  export type ComponentProps<
    S extends object = {},
    P extends object = {}
  > = {
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $postMessage: $postMessage,
    $t: $t,
  } & P

  export type ComponentNode<
    S extends object = {},
    P extends object = {}
  > = FC<ComponentProps<S, P>> & StaticProps

  export interface ErrorProps<S extends object = {}> {
    $reload?: () => void,
    $type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'CONTAINER_ERROR',
    $message?: string,
    $store: Readonly<S>,
  }
  export type ErrorNode<S extends object = {}> = ComponentType<ErrorProps<S>>

  export interface LoaderProps<S extends object = {}> { $store: Readonly<S>}
  export type LoaderNode<S extends object = {}> = ComponentType<LoaderProps<S>>

  type Dispatch<T extends object> = (
    nycticorax: {
      getStore: <K extends keyof T | undefined = undefined>(k?: K | undefined) =>
        K extends keyof T ? T[K] : T,
      emit: (next: Partial<T>) => void,
    },
    value: any,
    trigger: string,
  ) => Promise<any>

  export type Actions<S extends object = {}> = Record<string, Dispatch<S>>

  export interface Entry<S extends object = {}> {
    store?: readonly S,
    Error?: ErrorNode<S>,
    Loader?: LoaderNode<S>,
    actions?: Actions<S>,
    Container: ComponentType,
  }

  export interface Config {
    dependencies: Record<string, string>,
    entry: string,
    root?: string,
    env?: ENV,
    timeout?: number,
  }

  export function createComponent<S extends object = {}> (
    name: string, storeKeys?: (keyof S)[]
  ): ComponentType<{
    $silent?: boolean,
    [key: string]: any,
  }>
  export const renderComponent: RenderComponent

  export const isComponentLoaded: (name: string) => boolean
  export const getMountedComponents: () => string[]
  export const preloadComponents: (names: string[]) => Promise<void>
  export const onComponentMounted: (name: string | string[], callback: () => void) => () => void

  export const getEnv: () => ENV
  export function getConfig<C extends object = {}>(): C
  export function getStore<S extends object = {}>(): S

  export const createDispatch: (name: string) => $dispatch
  export const createPostMessage: (name: string) => $postMessage
}
