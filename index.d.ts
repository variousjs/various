declare module '@variousjs/various' {
  import {
    ComponentType, FC, ReactNode, RefObject,
  } from 'react'
  import { PropType } from 'vue'

  export { default as Nycticorax, Dispatch } from 'nycticorax'

  export interface ModuleDefined { name: string, module?: string }

  export type ObjectRecord<T = any> = Record<string, T>

  export type VariousComponentType = 'react' | 'vue3'

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
    'I18N' | (string & {})

  export interface ComponentDefaultProps {
    $silent?: boolean,
    /**
     * for React Component only
     */
    $ref?: RefObject<unknown>,
    [k: string]: any,
  }

  export interface VariousError extends Error {
    type: ErrorType,
    originalError: Error,
    module?: ModuleDefined['module'],
    name: ModuleDefined['name'],
  }

  interface Message { event: string, value: any, trigger: ModuleDefined }

  type $dispatch = (args: ModuleDefined & {
    action: string,
    value?: any,
  }) => Promise<any>
  type $postMessage = (event: string, value?: any) => void

  interface $logger {
    info: (message: any, type?: string) => void,
    warn: (message: any, type?: string) => void,
    error: (message: any, type?: string) => void,
  }

  export type Intl = ((
    key: string,
    paramsOrDefaultText?: Record<string, string | number> | string,
    defaultText?: string,
  ) => string) & {
    update: (config: Partial<I18nConfig>, type?: 'app') => void,
  }

  interface ComponentBuiltinProps<S extends object = ObjectRecord> {
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $postMessage: $postMessage,
    $t: Intl,
    $logger: $logger,
  }

  export type PublicAction = (value: any, trigger: ModuleDefined) => any

  export interface I18nConfig {
    /** app store key */
    lngStoreKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export type I18n = () => I18nConfig | Promise<I18nConfig>

  export type OnMessage = (message: Message) => void

  export interface StaticProps {
    $i18n?: I18n,
    $onMessage?: OnMessage,
    [x: string]: PublicAction,
  }

  export type ComponentProps<
    S extends object = ObjectRecord,
    P extends object = ObjectRecord
  > = ComponentBuiltinProps<S> & P

  export type ComponentNode<
    S extends object = {},
    P extends object = {}
  > = FC<ComponentProps<S, P>> & StaticProps

  export interface ErrorNodeProps<S extends object = ObjectRecord> {
    $reload: () => void,
    $error: VariousError,
    $store: Readonly<S>,
    $name: ModuleDefined['name'],
    $module?: ModuleDefined['module'],
  }
  export type ErrorNode<S extends object = ObjectRecord> = ComponentType<ErrorNodeProps<S>>

  export interface LoaderNodeProps<S extends object = ObjectRecord> {
    $store: Readonly<S>,
    $name: ModuleDefined['name'],
    $module?: ModuleDefined['module'],
  }
  export type LoaderNode<S extends object = ObjectRecord> = ComponentType<LoaderNodeProps<S>>

  type Dispatch<T extends object = ObjectRecord> = (
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
    value?: any,
  }
  type MessageEventRes = boolean | Omit<MessageEventArgs, 'trigger'>
  interface DispatchEventArgs {
    target: ModuleDefined,
    trigger: ModuleDefined,
    action: string,
    value?: any,
  }
  type DispatchEventRes = boolean | Omit<DispatchEventArgs, 'trigger'>
  interface LoadEventArgs extends ModuleDefined {
    loadStart: number,
    loadEnd: number,
    beenLoaded: boolean,
  }

  type LogLevel = 'info' | 'warn' | 'error'
  interface LogArgs extends ModuleDefined {
    level: LogLevel,
    type?: string,
    message: any,
  }

  export type MessageEvent = (e: MessageEventArgs) => Promise<MessageEventRes> | MessageEventRes
  export type DispatchEvent = (e: DispatchEventArgs) => Promise<DispatchEventRes> | DispatchEventRes
  export type LoadEvent = (e: LoadEventArgs) => void
  export type ErrorEvent = (e: VariousError) => void
  export type LogEvent = (e: LogArgs) => boolean

  export interface App<S extends object = ObjectRecord> {
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
      onLog?: LogEvent,
    },
    i18n?: I18n,
  }

  export interface Config {
    dependencies: {
      app: string,
      '@variousjs/various'?: string,
      react?: string,
      'react-dom'?: string,
      vue?: string,
      [x: string]: string,
    },
    root?: string,
    timeout?: number,
    earlyParallelDependencies?: string[],
  }

  export function createComponent<
    S extends object = ObjectRecord,
    P extends object = ObjectRecord
  >(
    config: ModuleDefined & { url?: string, type?: VariousComponentType },
    storeKeys?: (keyof S)[],
  ): ComponentType<ComponentDefaultProps & P>

  export function createModule<T = unknown> (params: ModuleDefined & {
    url?: string,
  }, logError?: boolean): Promise<T>

  export function renderComponent<P extends object = ObjectRecord>(params: ModuleDefined & {
    url?: string,
    type?: VariousComponentType,
    props?: P & ComponentDefaultProps,
    target: Element | null,
    renderNode?: (children: ReactNode) => ReactNode,
    onMounted?: () => void,
  }): () => Promise<void>

  export type VueVarious<S extends object = ObjectRecord> = PropType<ComponentBuiltinProps<S>>

  export const isModuleLoaded: (name: string) => boolean
  export const getMountedComponents: () => ModuleDefined[]
  export const preloadModules: (name: string | string[]) => Promise<void>
  export const onComponentMounted: (
    name: ModuleDefined | ModuleDefined[], callback: () => void
  ) => (() => void) | void
  export const defineDependencies: (deps: Record<string, string>) => void

  export const version: string
  export function getConfig<C extends object = ObjectRecord>(): C
  export function getStore<S extends object = ObjectRecord>(): S

  export const createDispatch: (m: ModuleDefined) => $dispatch
  export const createPostMessage: (m: ModuleDefined) => $postMessage
  export const createLogger: (m: ModuleDefined) => $logger
}
