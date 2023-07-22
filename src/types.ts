import { ComponentType } from 'react'
import { ErrorProps, Actions, ComponentProps, MessageInvoker, Invoker, I18n, LoaderProps, ENV } from '@variousjs/various'
import { Dispatch } from 'nycticorax'
import { MESSAGE_KEY, COMPONENT_PATHS_KEY, MOUNTED_COMPONENTS_KEY, ENV_KEY, CONFIG_KEY } from './config'

export interface Store {
  [MESSAGE_KEY]: {
    timestamp?: number,
    event?: string,
    component?: string,
    value?: any,
  },
  [MOUNTED_COMPONENTS_KEY]: string[],
  [ENV_KEY]: ENV,
  [CONFIG_KEY]: Record<string | symbol, any>,
  [COMPONENT_PATHS_KEY]: Record<string, string>,
  [key: string | symbol]: any,
}

export type DispatchType = Dispatch<Store>

export interface Config {
  dependencies?: Record<string, string>,
  components: Record<string, string>,
  entry?: string,
  root?: string,
  env?: ENV,
  timeout?: number,
}

export interface Entry<S = {}> {
  store: S,
  Error: ComponentType<ErrorProps<S>>,
  Loader: ComponentType<LoaderProps<S>>,
  actions: Actions<S>,
  Container: ComponentType,
}

export type ComponentActions = Record<string, Invoker>

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export type RequiredComponent = ComponentType<ComponentProps>
  & Actions<Store>
  & ComponentActions
  & { $onMessage: MessageInvoker, $i18n: I18n }
  & { [key: string]: RequiredComponent }

export interface ErrorState {
  errorType?: ErrorProps['$type'],
  errorMessage: string,
}

export interface ErrorArgs {
  name: string,
  message: string,
  type: ErrorProps['$type'] | 'dispatch' | 'i18n' | 'component',
}

export interface Various {
  default: (config: Config & Entry) => void,
}

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}
