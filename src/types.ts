import Nycticorax, { Connect } from 'nycticorax'
import { ComponentType } from 'react'
import {
  ErrorProps,
  Actions,
  ContainerProps,
  OnMessage,
} from '@variousjs/various'

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
  onMessage: OnMessage<S>,
}

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export namespace Connector {
  export type Message = {
    timestamp: number,
    type: string,
    name: string,
    value?: any,
  }
  export type Store = {
    [key: string]: unknown,
    // message / mountedComponent
    [key: symbol]: Message | string[],
  }
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
