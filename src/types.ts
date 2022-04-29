import { ComponentType } from 'react'
import {
  ErrorProps,
  Actions,
  ContainerProps,
  ComponentProps,
} from '@variousjs/various'
import { MESSAGE_KEY, MOUNTED_COMPONENTS } from './config'

export { ComponentProps, ContainerProps, ErrorProps } from '@variousjs/various'

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

export interface Config {
  dependencies?: Record<string, string>,
  components: Record<string, string>,
  entry?: string,
  root?: string,
}

export interface Entry<S = Record<string, any>, C = {}> {
  store: S,
  Error: ComponentType<ErrorProps>,
  Loader: ComponentType,
  actions: Actions<S>,
  Container: ComponentType<ContainerProps<C>>,
}

export interface Creator {
  name: string,
  storeDispatcher: Actions,
  componentDispatcher: Record<string, Actions>,
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

export type RequiredComponent = ComponentType<ComponentProps> & Actions & {
  [key: string]: RequiredComponent,
}

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
