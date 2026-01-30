declare module '@variousjs/various' {
  import {
    ComponentType, FC, ReactNode, RefObject,
  } from 'react'
  import { PropType } from 'vue'

  export { default as Nycticorax, Dispatch } from 'nycticorax'

  /**
  * module name
  * - e.g. A.B
  * - e.g. B
  * - e.g. app
  * - e.g. A.default -> A
  */
  export type ModuleDef = string

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

  export interface ComponentDefaultProps<Ref = unknown> {
    $silent?: boolean,
    /**
     * for React Component only
     */
    $ref?: RefObject<Ref>,
    [k: string]: any,
  }

  export interface VariousError extends Error {
    type: ErrorType,
    originalError: Error,
    module: ModuleDef,
  }

  interface ActionDef {
    payload: any,
    result: any,
  }

  interface MessageDef {
    payload: any,
  }

  export type PublicAction<A extends ActionDef = never> = (
    payload: [A] extends [never] ? any : A['payload'],
    trigger: ModuleDef,
  ) => [A] extends [never] ? any : A['result']

  type PublicActionDef = Record<string, ActionDef>

  type MessagesDef = Record<string, MessageDef>

  export type DefineActions<T extends PublicActionDef> = T

  export type DefineMessages<T extends MessagesDef> = T

  interface Message<T extends MessagesDef = never> {
    event: [T] extends [never] ? string : keyof T,
    payload: [T] extends [never] ? any : T[keyof T]['payload'],
    trigger: ModuleDef,
  }

  export type StaticMethods<T extends PublicActionDef = never> =
    [T] extends [never]
      ? Record<string, (payload: any, trigger: ModuleDef) => any>
      : {
        [K in keyof T]: T[K] extends { payload: infer V, result: infer R }
        ? (payload: V, trigger: ModuleDef) => R
        : never
      }

  export type StaticProps<S extends PublicActionDef = never, T extends MessagesDef = never> = {
    $i18n?: I18n,
    $onMessage?: OnMessage<T>,
  } & StaticMethods<S>

  export type ComponentPublicActionMap = {
    [name: string]: PublicActionDef,
  }

  type $dispatch = <
    A extends ComponentPublicActionMap = never,
    Target extends keyof A = keyof A,
    Action extends keyof A[Target] = keyof A[Target],
  >(
    payload: [A] extends [never]
      ? {
        target: Target,
        action: string,
        payload?: any,
      }
      : {
      target: Target,
      action: Action,
      payload?: A[Target][Action]['payload'],
      }) => Promise<
        [A] extends [never]
          ? any
          : A[Target][Action]['result']
      >

  type $postMessage<T extends MessagesDef = never> = [T] extends [never]
    ? (event: string, payload?: any) => void
    : <K extends keyof T>(event: K, payload?: T[K]['payload']) => void

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

  interface ComponentBuiltinProps<
    Store extends object = ObjectRecord,
    Messages extends MessagesDef = never
  > {
    $store: Readonly<Store>,
    $dispatch: $dispatch,
    $postMessage: $postMessage<Messages>,
    $t: Intl,
    $logger: $logger,
    $self: { url: string, module: ModuleDef },
  }

  export interface I18nConfig {
    /** app store key */
    lngStoreKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export type I18n = () => I18nConfig | Promise<I18nConfig>

  export type OnMessage<T extends MessagesDef = never> = (message: Message<T>) => void

  export type ComponentProps<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Messages extends MessagesDef = never,
  > = ComponentBuiltinProps<Store, Messages> & Props

  export type ComponentNode<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Actions extends PublicActionDef = never,
    Messages extends MessagesDef = never,
  > = FC<ComponentProps<Props, Store, Messages>> & StaticProps<Actions, Messages>

  export interface ErrorFallbackProps<Store extends object = ObjectRecord> {
    $reload: () => void,
    $error: VariousError,
    $store: Readonly<Store>,
    $self: { url: string, module: ModuleDef },
  }
  export type ErrorFallbackNode<
    Store extends object = ObjectRecord
  > = ComponentType<ErrorFallbackProps<Store>>

  export interface FallbackProps<Store extends object = ObjectRecord> {
    $store: Readonly<Store>,
    $self: { url: string, module: ModuleDef },
  }
  export type FallbackNode<
    Store extends object = ObjectRecord
  > = ComponentType<FallbackProps<Store>>

  type Dispatch<T extends object = ObjectRecord> = (
    nycticorax: {
      getStore: <K extends keyof T | undefined = undefined>(k?: K | undefined) =>
        K extends keyof T ? T[K] : T,
      emit: (next: Partial<T>) => void,
    },
    payload: any,
    trigger: ModuleDef,
  ) => Promise<any>

  interface MessageEventArgs {
    trigger: ModuleDef,
    event: string,
    payload?: any,
  }
  type MessageEventRes = boolean | Omit<MessageEventArgs, 'trigger'>
  interface DispatchEventArgs {
    target: ModuleDef,
    trigger: ModuleDef,
    action: string,
    payload?: any,
  }
  type DispatchEventRes = boolean | Omit<DispatchEventArgs, 'trigger'>
  interface LoadEventArgs {
    module: ModuleDef,
    loadStart: number,
    loadEnd: number,
    beenLoaded: boolean,
  }

  type LogLevel = 'info' | 'warn' | 'error'
  interface LogArgs {
    module: ModuleDef,
    level: LogLevel,
    type?: string,
    message: any,
  }

  export type MessageEvent = (e: MessageEventArgs) => Promise<MessageEventRes> | MessageEventRes
  export type DispatchEvent = (e: DispatchEventArgs) => Promise<DispatchEventRes> | DispatchEventRes
  export type LoadEvent = (e: LoadEventArgs) => void
  export type ErrorEvent = (e: VariousError) => void
  export type LogEvent = (e: LogArgs) => boolean

  export interface App<Store extends object = ObjectRecord> {
    store?: Store,
    ErrorFallback?: ErrorFallbackNode<Store>,
    Fallback?: FallbackNode<Store>,
    actions?: Record<string, Dispatch<Store>>,
    Root: ComponentType,
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
    } & Record<string, string>,
    root?: string,
    timeout?: number,
    earlyParallelDependencies?: string[],
  }

  export function createComponent<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Ref = unknown
  >(
    config: {
      url?: string,
      type?: VariousComponentType,
      module: ModuleDef,
    },
    storeKeys?: (keyof Store)[],
  ): ComponentType<ComponentDefaultProps<Ref> & Props>

  export function createModule<T = unknown> (params: {
    url?: string,
    module: ModuleDef,
  }, logError?: boolean): Promise<T>

  export function renderComponent<
    Props extends object = ObjectRecord
  >(params: {
    module: ModuleDef,
    url?: string,
    type?: VariousComponentType,
    props?: Props & ComponentDefaultProps,
    target: Element | null,
    renderNode?: (children: ReactNode) => ReactNode,
    onMounted?: () => void,
  }): Promise<() => Promise<void>>

  export type VariousComponentProps<
    Store extends object = ObjectRecord,
    Messages extends MessagesDef = never,
  > = PropType<ComponentBuiltinProps<Store, Messages>>

  export const isModuleLoaded: (module: ModuleDef) => boolean
  export const removeLoadedModules: (modules: ModuleDef[]) => void
  export const getMountedComponents: () => ModuleDef[]
  export const preloadModules: (modules: ModuleDef[]) => Promise<void>
  export const onComponentMounted: (
    module: ModuleDef | ModuleDef[],
    callback: () => void
  ) => (() => void) | void
  export const defineDependencies: (deps: Record<string, string>) => void

  export const version: string
  export function getConfig<C extends object = ObjectRecord>(): C
  export function getStore<Store extends object = ObjectRecord>(): Store

  export const createDispatch: (module: ModuleDef) => $dispatch
  export const createPostMessage: <Messages extends MessagesDef = never>(
    module: ModuleDef
  ) => $postMessage<Messages>
  export const createLogger: (module: ModuleDef) => $logger
  export const getModuleInfo: (module: ModuleDef) => {
    name: string,
    entry?: string,
  }
}
