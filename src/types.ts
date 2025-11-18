import React, { ComponentType, ReactNode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  ComponentProps,
  PublicAction,
  Config,
  OnMessage,
  I18n,
  Dispatch,
  ModuleDefined,
  App,
  I18nConfig,
} from '@variousjs/various'
import type {
  MESSAGE_KEY,
  DEPENDENCIES_KEY,
  MOUNTED_COMPONENTS_KEY,
  CONFIG_KEY,
  STANDALONE_CONFIG_READY,
} from './core/config'

declare global {
  export const VERSION: string
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}

export interface Store {
  [MESSAGE_KEY]: null | (Parameters<OnMessage>[0] & { timestamp: number }),
  [MOUNTED_COMPONENTS_KEY]: ModuleDefined[],
  [CONFIG_KEY]: Record<string | symbol, any>,
  [DEPENDENCIES_KEY]: Record<string, string>,
  [STANDALONE_CONFIG_READY]?: boolean,
  [key: string]: any,
}

export type Actions<S extends object> = Record<string, Dispatch<S>>

export type PublicActions = Record<string, PublicAction>

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export type RequiredComponent = ComponentType<ComponentProps>
  & Actions<Store>
  & PublicActions
  & { $onMessage: OnMessage, $i18n: I18n }
  & { [key: string]: RequiredComponent }

export interface CreateComponentState {
  isError: boolean,
  componentReady: boolean,
}

export interface CreateComponentProps<P extends object> extends Store {
  $componentProps: P,
}

export type ErrorBoundaryProps = ModuleDefined & {
  url?: string,
  children: ReactNode,
}

export interface ConnectorI18nConfig extends I18nConfig {
  loading?: boolean,
}

export interface Various { getApp: (config: Config & App) => ComponentType }
export type AppWithDefault = { default: App }
export type ReactType = typeof React
export type ReactDOMType = typeof ReactDOM & { version: string }
