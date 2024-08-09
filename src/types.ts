import { ComponentType } from 'react'
import {
  ComponentProps,
  Invoker,
  ENV,
  Config,
  OnMessage,
  I18n,
  App,
  Message,
  Dispatch,
  ComponentDefaultProps,
} from '@variousjs/various'
import {
  MESSAGE_KEY,
  DEPENDENCIES_KEY,
  MOUNTED_COMPONENTS_KEY,
  ENV_KEY,
  CONFIG_KEY,
} from './config'

export interface Store {
  [MESSAGE_KEY]: null | (Message & { timestamp: number }),
  [MOUNTED_COMPONENTS_KEY]: string[],
  [ENV_KEY]: ENV,
  [CONFIG_KEY]: Record<string | symbol, any>,
  [DEPENDENCIES_KEY]: Record<string, string>,
  [key: string]: any,
}

export type Actions<S extends object> = Record<string, Dispatch<S>>

export type ComponentActions = Record<string, Invoker>

export interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

export type RequiredComponent = ComponentType<ComponentProps>
  & Actions<Store>
  & ComponentActions
  & { $onMessage: OnMessage, $i18n: I18n }
  & { [key: string]: RequiredComponent }

export interface CreateComponentState {
  isError: boolean,
  componentReady: boolean,
  componentExist: boolean,
}

export interface CreateComponentProps<P extends object> extends Store {
  $componentProps: P & ComponentDefaultProps,
}

export interface Various {
  default: (config: Config & App) => void,
}

export type AppWithDefault = { default: App }
