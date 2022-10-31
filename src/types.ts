import { ComponentType } from 'react'
import { ErrorProps, Actions, ContainerProps, ComponentProps, MessageInvoker, Invoker, Ii8n, $env, LoaderProps } from '@variousjs/various'
import { Dispatch } from 'nycticorax'
import { MESSAGE_KEY, COMPONENT_PATHS_KEY, MOUNTED_COMPONENTS_KEY, ENV_KEY, CONFIG_KEY } from './config'

export { ComponentProps, ContainerProps, ErrorProps, Actions, LoaderProps } from '@variousjs/various'

export interface Store {
  [MESSAGE_KEY]: {
    timestamp?: number,
    type?: string,
    name?: string,
    value?: any,
  },
  [MOUNTED_COMPONENTS_KEY]: string[],
  [ENV_KEY]: $env,
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
  env?: $env,
}

export interface Entry<S = {}, C = {}> {
  store: S,
  Error: ComponentType<ErrorProps<S, C>>,
  Loader: ComponentType<LoaderProps<S, C>>,
  actions: Actions<S>,
  Container: ComponentType<ContainerProps<C>>,
}

export type ComponentDispatcher = Record<string, Invoker>

export interface Creator {
  name: string,
  onMounted?: () => void,
}

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export type RequiredComponent = ComponentType<ComponentProps>
  & Actions<Store>
  & ComponentDispatcher
  & { $onMessage: MessageInvoker, $i18n: Ii8n }
  & { [key: string]: RequiredComponent }

export interface ErrorState {
  errorType?: ErrorProps['$type'],
  errorMessage: string,
}

export interface ErrorArgs {
  name: string,
  message: string,
  type: ErrorProps['$type'] | 'dispatch' | 'i18n',
}

export interface Various {
  default: (config: Config & Entry) => void,
}

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}
