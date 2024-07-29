declare module '@variousjs/various' {
  import { ComponentType, FC } from 'react'

  export { default as Nycticorax, Dispatch } from 'nycticorax'

  export interface ComponentDefaultProps {
    $silent?: boolean,
  }

  type ObjectAny = Record<string, any>

  type $dispatch = (name: string, method: string, value?: any) => Promise<any>
  type $postMessage = (event: string, value?: any) => void
  export type Intl = (key: string, params?: Record<string, string | number>) => string

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
    $t: Intl,
  } & P

  export type ComponentNode<
    S extends object = {},
    P extends object = {}
  > = FC<ComponentProps<S, P>> & StaticProps

  export type ErrorType = 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'APP_ERROR'
  export interface ErrorProps<S extends object = {}> {
    $reload?: () => void,
    $type: ErrorType,
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

  interface MessageEventArgs {
    trigger: string,
    event: string,
    value?: any,
  }
  type MessageEventRes = boolean | Omit<MessageEventArgs, 'trigger'>
  interface DispatchEventArgs {
    target: string,
    trigger: string,
    method: string,
    value?: any,
  }
  type DispatchEventRes = boolean | Omit<DispatchEventArgs, 'trigger'>
  interface LoadEventArgs {
    name: string,
    loadStart: number,
    loadEnd: number,
    duration: number,
    beenLoaded: boolean,
  }
  interface ErrorEventArgs {
    name: string,
    errorType: ErrorType | 'dispatch' | 'i18n',
    errorMessage: string,
  }
  export type MessageEvent = (e: MessageEventArgs) => Promise<MessageEventRes> | MessageEventRes
  export type DispatchEvent = (e: DispatchEventArgs) => Promise<DispatchEventRes> | DispatchEventRes
  export type LoadEvent = (e: LoadEventArgs) => void
  export type ErrorEvent = (e: ErrorEventArgs) => void

  export interface App<S extends object = {}> {
    store?: readonly S,
    Error?: ErrorNode<S>,
    Loader?: LoaderNode<S>,
    actions?: Actions<S>,
    Container: ComponentType,
    middlewares?: {
      onLoad?: LoadEvent,
      onError?: ErrorEvent,
      onMessage?: MessageEvent,
      onDispatch?: DispatchEvent,
    },
  }

  export interface Config {
    dependencies: {
      app: string,
      '@variousjs/various'?: string,
      [x: string]: string,
    },
    root?: string,
    env?: ENV,
    timeout?: number,
    earlyParallelComponents?: string[],
  }

  export function createComponent<
    S extends object = ObjectAny,
    P extends object = ObjectAny
  >(
    config: {
      name: string,
      module?: string,
      url?: string,
    },
    storeKeys?: (keyof S)[],
  ): ComponentType<ComponentDefaultProps & P>

  export function createModule<T = unknown> (params: {
    name: string,
    module?: string,
    url?: string,
  }): Promise<T>

  export function renderComponent<P extends object = ObjectAny>(params: {
    name: string,
    module?: string,
    url?: string,
    props?: P & ComponentDefaultProps,
    target: Element | null,
    onMounted?: () => void,
  }): () => void

  export const isModuleLoaded: (name: string) => boolean
  export const getMountedComponents: () => string[]
  export const preloadComponents: (names: string[]) => Promise<void>
  export const onComponentMounted: (name: string | string[], callback: () => void) => () => void

  export const getEnv: () => ENV
  export function getConfig<C extends object = {}>(): C
  export function getStore<S extends object = {}>(): S

  export const createDispatch: (name: string) => $dispatch
  export const createPostMessage: (name: string) => $postMessage
}
