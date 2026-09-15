// Public API type entry for '@variousjs/various'.
// Enumerated explicitly (no export *) so the emitted declarations match the
// documented API surface exactly.

export { default as Nycticorax } from 'nycticorax'
export type { Dispatch } from 'nycticorax'

export {
  createComponent,
  createModule,
  renderComponent,
  createDispatch,
  createPostMessage,
  createLogger,
  getConfig,
  getStore,
  getModuleInfo,
  preloadModules,
  isModuleLoaded,
  removeLoadedModules,
  getMountedComponents,
  onComponentMounted,
  defineDependencies,
  version,
} from '../core'

export type {
  ModuleDef,
  ObjectRecord,
  VariousComponentType,
  ErrorType,
  ComponentDefaultProps,
  VariousError,
  PublicAction,
  DefineActions,
  DefineMessages,
  StaticMethods,
  ComponentStatics,
  DefineAppActions,
  Intl,
  I18nConfig,
  I18n,
  GlobalI18n,
  OnMessage,
  VariousProps,
  VariousFC,
  ErrorFallbackProps,
  ErrorFallbackNode,
  FallbackProps,
  FallbackNode,
  MessageEvent,
  DispatchEvent,
  LoadEvent,
  ErrorEvent,
  LogEvent,
  App,
  Config,
  VariousComponentProps,
} from './types'
