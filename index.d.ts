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
    module?: ModuleDefined['module'],
    name: ModuleDefined['name'],
  }

  interface Message<T extends ObjectRecord = never> {
    event: [T] extends [never] ? string : keyof T,
    value: [T] extends [never] ? any : T[keyof T],
    trigger: ModuleDefined,
  }

  export interface ActionDesc {
    value: any,
    result: any,
  }

  export type PublicAction<A extends ActionDesc = never> = (
    value: [A] extends [never] ? unknown : A['value'],
    trigger: ModuleDefined,
  ) => [A] extends [never] ? unknown : A['result']

  export type PublicActionDesc = Record<string, ActionDesc>

  export type StaticMethods<T extends PublicActionDesc = never> =
    [T] extends [never]
      ? Record<string, (value: unknown, trigger: ModuleDefined) => unknown>
      : {
        [K in keyof T]: T[K] extends { value: infer V; result: infer R }
        ? (v: V, trigger: ModuleDefined) => R
        : never
      }

  export type StaticProps<S extends PublicActionDesc = never, T extends ObjectRecord = never> = {
    $i18n?: I18n,
    $onMessage?: OnMessage<T>,
  } & StaticMethods<S>

  export type ComponentPublicActionMap = Record<string, PublicActionDesc>

  type $dispatch<M extends ComponentPublicActionMap = never> = [M] extends [never]
    ? {
      (payload: {
        name: string,
        action: string,
        value?: any,
      }): Promise<any>
    }
    : {
      <Name extends keyof M, Action extends keyof M[Name]>(
        payload: {
          /**
           * name.module
           * - e.g. module.B
           * - e.g. app
           * - e.g. module.default => module
           */
          name: Name,
          action: Action,
          value?: M[Name][Action]['value'],
        }
      ): Promise<M[Name][Action]['result']>
    }

  type $postMessage = (event: string, value?: unknown) => void

  interface $logger {
    info: (message: unknown, type?: string) => void,
    warn: (message: unknown, type?: string) => void,
    error: (message: unknown, type?: string) => void,
  }

  export type Intl = ((
    key: string,
    paramsOrDefaultText?: Record<string, string | number> | string,
    defaultText?: string,
  ) => string) & {
    update: (config: Partial<I18nConfig>, type?: 'app') => void,
  }

  interface ComponentBuiltinProps<Store extends object = ObjectRecord> {
    $store: Readonly<Store>,
    $dispatch: $dispatch,
    $postMessage: $postMessage,
    $t: Intl,
    $logger: $logger,
    $self: ModuleDefined & { url: string },
  }

  export interface I18nConfig {
    /** app store key */
    lngStoreKey: string,
    resources: Record<string, Record<string, string>>,
  }

  export type I18n = () => I18nConfig | Promise<I18nConfig>

  export type OnMessage<T extends ObjectRecord = never> = (message: Message<T>) => void

  export type ComponentProps<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
  > = ComponentBuiltinProps<Store> & Props

  export type ComponentNode<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Actions extends PublicActionDesc = never,
    Messages extends ObjectRecord = never,
  > = FC<ComponentProps<Props, Store>> & StaticProps<Actions, Messages>

  export interface ErrorFallbackProps<Store extends object = ObjectRecord> {
    $reload: () => void,
    $error: VariousError,
    $store: Readonly<Store>,
    $self: ModuleDefined & { url?: string },
  }
  export type ErrorFallbackNode<
    Store extends object = ObjectRecord
  > = ComponentType<ErrorFallbackProps<Store>>

  export interface FallbackProps<Store extends object = ObjectRecord> {
    $store: Readonly<Store>,
    $self: ModuleDefined & { url?: string },
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
    value: unknown,
    trigger: ModuleDefined,
  ) => Promise<unknown>

  interface MessageEventArgs {
    trigger: ModuleDefined,
    event: string,
    value?: unknown,
  }
  type MessageEventRes = boolean | Omit<MessageEventArgs, 'trigger'>
  interface DispatchEventArgs {
    target: ModuleDefined,
    trigger: ModuleDefined,
    action: string,
    value?: unknown,
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
    message: unknown,
  }

  export type MessageEvent = (e: MessageEventArgs) => Promise<MessageEventRes> | MessageEventRes
  export type DispatchEvent = (e: DispatchEventArgs) => Promise<DispatchEventRes> | DispatchEventRes
  export type LoadEvent = (e: LoadEventArgs) => void
  export type ErrorEvent = (e: VariousError) => void
  export type LogEvent = (e: LogArgs) => boolean

  export interface App<Store extends object = ObjectRecord> {
    store?: readonly Store,
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
      [x: string]: string,
    },
    root?: string,
    timeout?: number,
    earlyParallelDependencies?: string[],
  }

  export function createComponent<
    Props extends object = ObjectRecord,
    Store extends object = ObjectRecord,
    Ref = unknown,
  >(
    config: ModuleDefined & {
      url?: string,
      type?: VariousComponentType,
    },
    storeKeys?: (keyof Store)[],
  ): ComponentType<ComponentDefaultProps<Ref> & Props>

  export function createModule<T = unknown> (params: ModuleDefined & {
    url?: string,
  }, logError?: boolean): Promise<T>

  export function renderComponent<
    Props extends object = ObjectRecord
  >(params: ModuleDefined & {
    url?: string,
    type?: VariousComponentType,
    props?: Props & ComponentDefaultProps,
    target: Element | null,
    renderNode?: (children: ReactNode) => ReactNode,
    onMounted?: () => void,
  }): Promise<() => Promise<void>>

  export type VariousComponentProps<
    Store extends object = ObjectRecord
  > = PropType<ComponentBuiltinProps<Store>>

  export const isModuleLoaded: (name: string) => boolean
  export const removeLoadedModules: (names: string[]) => void
  export const getMountedComponents: () => ModuleDefined[]
  export const preloadModules: (name: string[]) => Promise<void>
  export const onComponentMounted: (
    name: ModuleDefined | ModuleDefined[], callback: () => void
  ) => (() => void) | void
  export const defineDependencies: (deps: Record<string, string>) => void

  export const version: string
  export function getConfig<C extends object = ObjectRecord>(): C
  export function getStore<Store extends object = ObjectRecord>(): Store

  export const createDispatch: <Actions extends ComponentPublicActionMap = never>(
    m: ModuleDefined,
  ) => $dispatch<Actions>
  export const createPostMessage: (m: ModuleDefined) => $postMessage
  export const createLogger: (m: ModuleDefined) => $logger
}
