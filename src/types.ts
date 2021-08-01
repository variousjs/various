/* eslint-disable import/no-unresolved */
import Nycticorax, { Connect } from 'nycticorax'
import {
  HashRouter, BrowserRouter, Switch, withRouter, RouteComponentProps,
} from 'react-router-dom'
import React, { FC, ComponentType, ReactNode } from 'react'
import ReactDOM from 'react-dom'
import { ErrorProps } from 'humpback'
import { ERROR_TYPE } from './config'

export { ErrorProps, ComponentProps } from 'humpback'

export namespace Dependency {
  export type React = typeof React
  export type ReactDOM = typeof ReactDOM
  export interface ReactRouterDOM {
    HashRouter: typeof HashRouter,
    BrowserRouter: typeof BrowserRouter,
    Switch: typeof Switch,
    withRouter: typeof withRouter,
  }
  export type Nycticorax = typeof Nycticorax
  export type RequireJsError = typeof window.requirejs.onError
  export interface RequireError extends Error {
    requireType: string,
    requireModules: string[],
    originalError: Error,
  }
}

export namespace Connector {
  export type Store = { [key: string]: unknown }
  const ctx = new Nycticorax<Store>()
  export type nycticorax = typeof ctx
  export type dispatch = typeof ctx.dispatch
  export type connect = ComponentType<Connect<Store>> & { [key: string]: any }
}

export interface ErrorState {
  errorType: string,
  errorMessage: string,
}
export type ErrorType = keyof typeof ERROR_TYPE

export interface HumpbackConfig {
  dependencies?: { [key: string]: string },
  components: { [key: string]: string },
  entry?: string,
  routerMode?: 'browser' | 'hash',
  root?: string,
}

/*

*/

export type Entry = {
  store: { [key: string]: unknown },
  actions: { [name: string]: (...args: any) => any },
  Loader: ComponentType,
  Error: FC<ErrorProps>,
  Container: ComponentType<{
    Router: ReactNode,
    $component: (name: string) => ComponentType,
    $mounted: string[],
    $config: { [key: string]: any },
    $dispatch: (...args: any) => any,
    $store: Entry['store'],
  }>,
}

export type Component = {
  $config: { [key: string]: any },
  $dispatch: (...args: any) => any,
  $store: Entry['store'],
  $mounted: string[],
  $router: RouteComponentProps,
}
