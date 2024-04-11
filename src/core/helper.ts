import { getStore } from './store'
import connector from './connector'
import { ERROR_TYPE, ENV_KEY, CONFIG_KEY } from '../config'
import { ErrorType } from '../types'

export const getEnv = () => getStore(ENV_KEY)

const getConsolePrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(name: string, text: string) {
  if (getEnv() === 'development') {
    window.console.error(...getConsolePrefix(name), text)
  }
}

export function consoleWarn(name: string, text: string) {
  if (getEnv() === 'development') {
    window.console.warn(...getConsolePrefix(name), text)
  }
}

export function getConfig<C extends object = {}>() {
  return getStore(CONFIG_KEY) as C
}

export const onError = (args: ErrorType) => {
  const { type, message, name } = args
  const prefix = type === 'dispatch' || type === 'i18n'
    ? type
    : ERROR_TYPE[type]

  const middlewares = connector.getMiddlewares()

  middlewares?.error?.({
    name,
    errorType: prefix,
    errorMessage: message,
  })

  consoleError(name, `[${prefix}] ${message}`)
}
