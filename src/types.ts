import Nycticorax from 'nycticorax'
import {
  HashRouter, BrowserRouter, Switch, withRouter, RouteComponentProps,
} from 'react-router-dom'
import { FC, ComponentType, ReactNode } from 'react'

type E = {
  type: string,
  message?: string,
  reload?: () => void,
}

export type Config = {
  dependencies?: { [key: string]: string },
  components: { [key: string]: string },
  entry?: string,
  routerMode?: 'browser' | 'hash',
  root?: string,
}

export type Ny = typeof Nycticorax

export type Rrd = {
  HashRouter: typeof HashRouter,
  BrowserRouter: typeof BrowserRouter,
  Switch: typeof Switch,
  withRouter: typeof withRouter,
}

export type Entry = {
  store: { [key: string]: unknown },
  actions: { [name: string]: (...args: any) => any },
  Loader: ComponentType,
  Error: FC<E>,
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

export type State = {
  errorCode: string,
  errorMessage: string,
}

export type OnError = typeof window.requirejs.onError

export type Store = { [key: string]: unknown }

const nycticorax = new Nycticorax<Store>()

export type ny = typeof nycticorax

export type dp = typeof nycticorax.dispatch
