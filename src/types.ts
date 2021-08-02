/* eslint-disable import/no-unresolved */
import Nycticorax, { Connect } from 'nycticorax'
import {
  HashRouter, BrowserRouter, Switch, withRouter,
} from 'react-router-dom'
import React, { ComponentType } from 'react'
import ReactDOM from 'react-dom'
import { Entry as HumpbackEntry } from 'humpback'
import { ERROR_TYPE, MOUNTED_COMPONENTS } from './config'

export { ErrorProps, ComponentProps } from 'humpback'

type Writeable<T> = { -readonly [P in keyof T]: T[P] }
type RequiredEntry = Required<HumpbackEntry<{ [key: string]: unknown }>>

export type Entry = Omit<RequiredEntry, 'store'> & {
  store: Writeable<RequiredEntry['store']>,
}

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
  export type Store = { [key: string]: unknown, [MOUNTED_COMPONENTS]: string[] }
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

declare global {
  interface Require {
    s: any,
  }
}
