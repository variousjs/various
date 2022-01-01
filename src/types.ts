import Nycticorax, { Connect } from 'nycticorax'
import { ComponentType } from 'react'
import { ErrorProps, Actions, ContainerProps } from '@variousjs/various'
import { MOUNTED_COMPONENTS } from './config'

export { ComponentProps, ContainerProps, ErrorProps } from '@variousjs/various'

export interface Config {
  dependencies?: { [key: string]: string },
  components: { [key: string]: string },
  entry?: string,
  routerMode?: 'browser' | 'hash',
  root?: string,
}

export interface Entry<S = { [key: string]: unknown }, C = {}> {
  store: S,
  Error: ComponentType<ErrorProps>,
  Loader: ComponentType,
  actions: Actions<S>,
  Container: ComponentType<ContainerProps<S, C>>,
}

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export namespace Connector {
  export type Store = { [key: string]: unknown, [MOUNTED_COMPONENTS]: string[] }
  const ctx = new Nycticorax<Store>()
  export type dispatch = typeof ctx.dispatch
  export type connect = ComponentType<Connect<Store>> & { [key: string]: any }
}

export interface ErrorState {
  errorType?: ErrorProps['type'],
  errorMessage: string,
}

export interface Various {
  default: (config: Config & Entry) => void,
}

declare global {
  interface Require {
    s: any,
  }
}

declare global {
  interface Window { VARIOUS_CONFIG: Config }
}
