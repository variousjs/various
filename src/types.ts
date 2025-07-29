import { ComponentType } from 'react'
import {
  ComponentProps,
  PublicAction,
  ENV,
  Config,
  OnMessage,
  I18n,
  App,
  Dispatch,
  ModuleDefined,
} from '@variousjs/various'
import {
  MESSAGE_KEY,
  DEPENDENCIES_KEY,
  MOUNTED_COMPONENTS_KEY,
  ENV_KEY,
  CONFIG_KEY,
} from './config'

export interface Store {
  [MESSAGE_KEY]: null | (Parameters<OnMessage>[0] & { timestamp: number }),
  [MOUNTED_COMPONENTS_KEY]: ModuleDefined[],
  [ENV_KEY]: ENV,
  [CONFIG_KEY]: Record<string | symbol, any>,
  [DEPENDENCIES_KEY]: Record<string, string>,
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
  componentExist: boolean,
}

export interface CreateComponentProps<P extends object> extends Store {
  $componentProps: P,
}

export interface Various {
  default: (config: Config & App) => void,
}

export type AppWithDefault = { default: App }
