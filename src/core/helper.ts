import { getStore } from './store'
import { ERROR_TYPE, ENV_KEY, CONFIG_KEY } from '../config'
import { ErrorArgs } from '../types'

const getConsolePrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(name: string, text: string) {
  window.console.error(...getConsolePrefix(name), text)
}

export const getConfig = () => getStore()[CONFIG_KEY]

export const getEnv = () => getStore()[ENV_KEY]

export const onError = (args: ErrorArgs) => {
  const { type, message, name } = args
  const prefix = type === 'dispatch' || type === 'i18n' || type === 'component'
    ? type
    : ERROR_TYPE[type]

  if (getEnv() === 'development') {
    consoleError(name, `[${prefix}] ${message}`)
  }
}
