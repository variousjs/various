import {
  ComponentType, FC, ReactNode, RefObject,
} from 'react'
import { PropType } from 'vue'

/**
* module name
* - e.g. A.B
* - e.g. B
* - e.g. app
* - e.g. A.default -> A
*/
export type ModuleDef = string

export type ObjectRecord<T = any> = Record<string, T>

/**
 * Ambient contract resolved by module augmentation, so that component code
 * stays minimal while each consumer program owns its own view of the world.
 *
 * Consumers augment it once per program (usually a `various.d.ts`):
 *
 *   declare module '@variousjs/various' {
 *     interface VariousContract {
 *       store: { b: number },
 *       messages: DefineMessages<{ greet: { payload: number } }>,
 *       actions: { app: DefineAppActions, ca: DefineActions<{ ... }> },
 *     }
 *   }
 *
 * Every member is optional: augmenting only some of them keeps the others
 * falling back to the loose default types. Multiple augmentations merge, but
 * re-declaring the same member with a different type is a compile error.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface VariousContract {}

type StoreOf<C> = C extends { store: infer S } ? S : ObjectRecord
type MessagesOf<C> = C extends { messages: infer M } ? M : never
type ActionsOf<C> = C extends { actions: infer A } ? A : never

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

export type PublicAction<A extends ActionDef = never> = (params: {
  payload: [A] extends [never] ? any : A['payload'],
  trigger: ModuleDef,
}) => [A] extends [never] ? any : A['result']

export type PublicActionDef = Record<string, ActionDef>

export type MessagesDef = Record<string, MessageDef>

export type DefineActions<T extends PublicActionDef> = T

export type DefineMessages<T extends MessagesDef> = T

interface Message<T extends MessagesDef = never> {
  event: [T] extends [never] ? string : keyof T,
  payload: [T] extends [never] ? any : T[keyof T]['payload'],
  trigger: ModuleDef,
}
export { Message }

export type StaticMethods<T extends PublicActionDef = never> =
  [T] extends [never]
    ? Record<string, (params: { payload: any, trigger: ModuleDef }) => any>
    : {
      [K in keyof T]: T[K] extends { payload: infer V, result: infer R }
      ? (params: { payload?: V, trigger: ModuleDef }) => R
      : never
    }

export type ComponentStatics<
  SelfTarget extends keyof ActionsOf<VariousContract> & string = never,
  Messages extends MessagesDef = MessagesOf<VariousContract>,
  Actions extends ComponentPublicActionMap = ActionsOf<VariousContract>
> = {
  $i18n?: I18n,
  $onMessage?: OnMessage<Messages>,
} & StaticMethods<Actions[SelfTarget]>

export type ComponentPublicActionMap = {
  [name: string]: PublicActionDef,
}

type $dispatch<M extends ComponentPublicActionMap = never> = [M] extends [never]
  ? {
    (params: {
      target: string,
      action: string,
      payload?: any,
    }): Promise<any>
  }
  : {
    <T extends keyof M, A extends keyof M[T]>(
      params: {
        target: T,
        action: A,
        payload?: NonNullable<M[T][A]>['payload'],
      }
    ): Promise<NonNullable<M[T][A]>['result']>
  }

export type DefineAppActions<T extends PublicActionDef = {}> = DefineActions<{
  setLocale: {
    payload: string,
    result: string,
  },
  getLocale: {
    payload: undefined,
    result: string,
  },
  updateI18nConfig: {
    payload: Partial<I18nConfig>,
    result: string,
  },
} & T>

type $postMessage<T extends MessagesDef = never> = [T] extends [never]
  ? (params: { event: string, payload?: any }) => void
  : <K extends keyof T>(params: { event: K, payload?: T[K]['payload'] }) => void

type $logger = {
  info: (message: any, type?: string) => void,
  warn: (message: any, type?: string) => void,
  error: (message: any, type?: string) => void,
}

export type Intl = ((
  key: string,
  paramsOrDefaultText?: Record<string, string | number> | string,
  defaultText?: string,
) => string) & {
  update: (config: Partial<I18nConfig>) => void,
}

interface ComponentBuiltinProps<
  Store extends object = StoreOf<VariousContract>,
  Messages extends MessagesDef = MessagesOf<VariousContract>,
  Actions extends ComponentPublicActionMap = ActionsOf<VariousContract>
> {
  $store: Readonly<Store>,
  $dispatch: $dispatch<Actions>,
  $postMessage: $postMessage<Messages>,
  $t: Intl,
  $logger: $logger,
  $self: { url: string, module: ModuleDef },
  $locale: string,
}

export interface I18nConfig {
  resources: Record<string, Record<string, string>>,
}

export type I18n = () => I18nConfig | Promise<I18nConfig>

export type GlobalI18n = {
  defaultLocale?: string, // en
  getResources?: () => I18nConfig | Promise<I18nConfig>
}

export type OnMessage<T extends MessagesDef = MessagesOf<VariousContract>> = (message: Message<T>) => void

export type VariousProps<
  Props extends object = ObjectRecord,
  Store extends object = StoreOf<VariousContract>,
  Messages extends MessagesDef = MessagesOf<VariousContract>,
  Actions extends ComponentPublicActionMap = ActionsOf<VariousContract>
> = ComponentBuiltinProps<Store, Messages, Actions> & Props

export type VariousFC<
  Props extends object = ObjectRecord,
  SelfTarget extends keyof ActionsOf<VariousContract> & string = never,
  Store extends object = StoreOf<VariousContract>,
  Messages extends MessagesDef = MessagesOf<VariousContract>,
  Actions extends ComponentPublicActionMap = ActionsOf<VariousContract>
> = FC<VariousProps<Props, Store, Messages, Actions>> & ComponentStatics<SelfTarget, Messages, Actions>

export interface ErrorFallbackProps<Store extends object = ObjectRecord> {
  $reload: () => void,
  $error: VariousError,
  $store: Readonly<Store>,
  $self: { url: string, module: ModuleDef },
  $locale: string,
}
export type ErrorFallbackNode<
  Store extends object = ObjectRecord
> = ComponentType<ErrorFallbackProps<Store>>

export interface FallbackProps<Store extends object = ObjectRecord> {
  $store: Readonly<Store>,
  $self: { url: string, module: ModuleDef },
  $locale: string,
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
  i18n?: GlobalI18n,
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

export type VariousComponentProps<
  Store extends object = StoreOf<VariousContract>,
  Messages extends MessagesDef = MessagesOf<VariousContract>,
  Actions extends ComponentPublicActionMap = ActionsOf<VariousContract>,
> = PropType<ComponentBuiltinProps<Store, Messages, Actions>>

// ---- function signature aliases (used by implementations to stay in sync) ----

export type GetModuleInfo = (module: ModuleDef) => {
  name: string,
  entry?: string,
}

export type PreloadModules = (modules: ModuleDef[]) => Promise<void>

export type RemoveLoadedModules = (modules: ModuleDef[]) => void

export type DefineDependencies = (deps: Record<string, string>) => void

export type IsModuleLoaded = (module: ModuleDef) => boolean

export type OnComponentMounted = (
  module: ModuleDef | ModuleDef[],
  callback: () => void,
) => (() => void) | void

export type CreateDispatch = <M extends ComponentPublicActionMap = ActionsOf<VariousContract>>(
  module: ModuleDef,
) => $dispatch<M>

export type CreatePostMessage = <Messages extends MessagesDef = MessagesOf<VariousContract>>(
  module: ModuleDef,
) => $postMessage<Messages>

export type CreateLogger = (module: ModuleDef) => $logger

export type GetStore = <Store extends object = StoreOf<VariousContract>>() => Store

export type CreateModule = <T = unknown>(params: {
  url?: string,
  module: ModuleDef,
}, logError?: boolean) => Promise<T>

export type CreateComponent = <
  Props extends object = ObjectRecord,
  Ref = unknown,
  Store extends object = ObjectRecord
>(
  config: {
    url?: string,
    type?: VariousComponentType,
    module: ModuleDef,
  },
  /**
  * set store keys if component created before store initialization
  */
  storeKeys?: (keyof Store)[],
) => ComponentType<ComponentDefaultProps<Ref> & Props>

export type RenderComponent = <Props extends object = ObjectRecord>(params: {
  module: ModuleDef,
  url?: string,
  type?: VariousComponentType,
  props?: Props & ComponentDefaultProps,
  target: Element | null,
  renderNode?: (children: ReactNode) => ReactNode,
  onMounted?: () => void,
}) => Promise<() => Promise<void>>

// ---- standalone public types ----

export type DependencyType = string | object | Function

export type StandaloneComponentConfig<Store extends object = ObjectRecord> = {
  module: ModuleDef,
  url?: string,
  type?: VariousComponentType,
  dependencies?: Partial<Record<
    string,
    DependencyType
  >>,
  /**
  * set store keys if component created before store initialization
  */
  storeKeys?: (keyof Store)[],
}

export type StandaloneCreateComponent = <
  Props extends object = ObjectRecord,
  Ref = unknown,
  Store extends object = ObjectRecord
>(
  config: StandaloneComponentConfig<Store>,
) => ComponentType<Props & {
  /**
   * for React Component only
   */
  $ref?: RefObject<Ref>,
}>

export type AppConfig<Store extends object = ObjectRecord> = Pick<
  App<Store>,
  'actions' | 'store' | 'Fallback' | 'ErrorFallback' | 'i18n'
> & {
  dependencies: Partial<Record<
    string,
    DependencyType
  >>
}

export type CreateAppConfig = <Store extends object = ObjectRecord>(
  config: AppConfig<Store>
) => void
