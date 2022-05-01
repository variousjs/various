import { ComponentType } from 'react'
import { ErrorProps, Actions, ContainerProps, ComponentProps, OnMessage } from '@variousjs/various'
import { Connect, Dispatch } from 'nycticorax'
import { MESSAGE_KEY, MOUNTED_COMPONENTS } from './config'

export { ComponentProps, ContainerProps, ErrorProps, Actions } from '@variousjs/various'

export interface Store {
  [MESSAGE_KEY]: {
    timestamp?: number,
    type?: string,
    name?: string,
    value?: any,
  },
  [MOUNTED_COMPONENTS]: string[],
  [key: string]: any,
}

export type ConnectProps = Connect<Store>

export type DispatchType = Dispatch<Store>

export interface Config {
  dependencies?: Record<string, string>,
  components: Record<string, string>,
  entry?: string,
  root?: string,
}

export interface Entry<S = Store, C = {}> {
  store: S,
  Error: ComponentType<ErrorProps>,
  Loader: ComponentType,
  actions: Actions<S>,
  Container: ComponentType<ContainerProps<C>>,
}

export type ComponentDispatcher = Record<string, (value: any, trigger: string) => Promise<any>>

export interface Creator {
  name: string,
  storeDispatcher: Actions<Store>,
  componentDispatcher: Record<string, ComponentDispatcher>,
  config: Config,
  Loader: ComponentType,
  Error: ComponentType<ErrorProps>,
  onMounted?: () => void,
}

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export type RequiredComponent = ComponentType<ComponentProps>
  & Actions<Store>
  & { $onMessage: OnMessage }
  & { [key: string]: RequiredComponent }

export interface ErrorState {
  errorType?: ErrorProps['type'],
  errorMessage: string,
}

export interface Various {
  default: (config: Config & Entry) => void,
}

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}
