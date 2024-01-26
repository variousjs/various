import { ComponentType } from 'react'
import {
  Actions,
  ComponentProps,
  Invoker,
  ENV,
  Config,
  OnMessage,
  I18n,
  ErrorProps,
  Entry,
  Message,
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

export interface ErrorState {
  errorType?: ErrorProps['$type'],
  errorMessage: string,
}

export interface ErrorType {
  name: string,
  message: string,
  type: ErrorProps['$type'] | 'dispatch' | 'i18n' | 'component',
}

export interface Various {
  default: (config: Config & Entry) => void,
}
