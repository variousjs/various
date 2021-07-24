import Nycticorax from 'nycticorax'
import { HashRouter, BrowserRouter, Switch } from 'react-router-dom'
import { FC, ComponentType, ReactNode } from 'react'

type E = {
  type: string,
  message?: string,
  reload?: () => void,
}

export type Config = {
  dependencies?: { [key: string]: string },
  components?: { [key: string]: string },
  entry?: string,
  routerMode?: 'browser' | 'hash',
  root?: string,
}

export type Ny = typeof Nycticorax

export type Hr = typeof HashRouter
export type Br = typeof BrowserRouter
export type Sw = typeof Switch

export type Entry = {
  store?: { [key: string]: unknown },
  actions?: { [name: string]: (...args: unknown[]) => any },
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

export type State = {
  errorCode: string,
  errorMessage: string,
}

export type OnError = typeof window.requirejs.onError
