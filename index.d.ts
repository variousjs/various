declare module '@variousjs/various' {
  import { ComponentType, FC } from 'react'

  export { default as Nycticorax, Dispatch } from 'nycticorax'

  export type ErrorType =
    'LOADING_ERROR' |
    'SUBMODULE_LOADING_ERROR' |
    'NOT_DEFINED' |
    'INVALID_COMPONENT' |
    'SCRIPT_ERROR' |
    'APP_ERROR' |
    'INVALID_MODULE' |
    'SUBMODULE_NOT_DEFINED' |
    'SUBMODULE_SCRIPT_ERROR' |
    'DISPATCH' |
    'I18N'

  export interface ComponentDefaultProps {
    $silent?: boolean,
  }

  export interface VariousError extends Error {
    type: ErrorType,
    originalError: Error,
    module?: string,
    name: string,
  }

  type ObjectAny = Record<string, any>

  export interface ModuleDefined { name: string, module?: string }

  interface Message { event: string, value: any, trigger: ModuleDefined }

  type $dispatch = (args: ModuleDefined & {
    method: string,
    value: any,
  }) => Promise<any>
  type $postMessage = (event: string, value: any) => void

  export type Intl = (key: string, params?: Record<string, string | number>) => string

  export type ENV = 'development' | 'production'

  export type PublicAction = (value: any, trigger: ModuleDefined) => any

  export type I18n = () => {
    localeKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export type OnMessage = (message: Message) => void

  export interface StaticProps {
    $i18n?: I18n,
    $onMessage?: OnMessage,
    [x: string]: PublicAction,
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

  export interface ErrorNodeProps<S extends object = ObjectAny> {
    $reload?: () => void,
    $error: VariousError,
    $store: Readonly<S>,
  }
  export type ErrorNode<S extends object = ObjectAny> = ComponentType<ErrorNodeProps<S>>

  export interface LoaderNodeProps<S extends object = ObjectAny> { $store: Readonly<S>}
  export type LoaderNode<S extends object = ObjectAny> = ComponentType<LoaderNodeProps<S>>

  type Dispatch<T extends object = ObjectAny> = (
    nycticorax: {
      getStore: <K extends keyof T | undefined = undefined>(k?: K | undefined) =>
        K extends keyof T ? T[K] : T,
      emit: (next: Partial<T>) => void,
    },
    value: any,
    trigger: ModuleDefined,
  ) => Promise<any>

  interface MessageEventArgs {
    trigger: ModuleDefined,
    event: string,
    value: any,
  }
  type MessageEventRes = boolean | Omit<MessageEventArgs, 'trigger'>
  interface DispatchEventArgs {
    target: ModuleDefined,
    trigger: ModuleDefined,
    method: string,
    value: any,
  }
  type DispatchEventRes = boolean | Omit<DispatchEventArgs, 'trigger'>
  interface LoadEventArgs extends ModuleDefined {
    loadStart: number,
    loadEnd: number,
    beenLoaded: boolean,
  }

  export type MessageEvent = (e: MessageEventArgs) => Promise<MessageEventRes> | MessageEventRes
  export type DispatchEvent = (e: DispatchEventArgs) => Promise<DispatchEventRes> | DispatchEventRes
  export type LoadEvent = (e: LoadEventArgs) => void
  export type ErrorEvent = (e: VariousError) => void

  export interface App<S extends object = ObjectAny> {
    store?: readonly S,
    Error?: ErrorNode<S>,
    Loader?: LoaderNode<S>,
    actions?: Record<string, Dispatch<S>>,
    Container: ComponentType<any>,
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
    config: ModuleDefined & { url?: string },
    storeKeys?: (keyof S)[],
  ): ComponentType<ComponentDefaultProps & P>

  export function createModule<T = unknown> (params: ModuleDefined & {
    url?: string,
  }): Promise<T>

  export function renderComponent<P extends object = ObjectAny>(params: ModuleDefined & {
    url?: string,
    props?: P & ComponentDefaultProps,
    target: Element | null,
    onMounted?: () => void,
  }): () => void

  export const isModuleLoaded: (moduleDefined: ModuleDefined) => boolean
  export const getMountedComponents: () => ModuleDefined[]
  export const preloadPackages: (name: string | string[]) => Promise<void>
  export const onComponentMounted: (
    name: ModuleDefined | ModuleDefined[], callback: () => void
  ) => () => void

  export const getEnv: () => ENV
  export function getConfig<C extends object = ObjectAny>(): C
  export function getStore<S extends object = ObjectAny>(): S

  export const createDispatch: (m: ModuleDefined) => $dispatch
  export const createPostMessage: (m: ModuleDefined) => $postMessage
}
