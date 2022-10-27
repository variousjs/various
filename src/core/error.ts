import { getStore } from './store'
import { ERROR_TYPE, ENV_KEY } from '../config'
import { ErrorArgs } from '../types'

const getConsolePrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(name: string, text: string) {
  window.console.error(...getConsolePrefix(name), text)
}

export default function (args: ErrorArgs) {
  const { type, message, name } = args
  const prefix = type === 'dispatch' || type === 'i18n'
    ? type
    : ERROR_TYPE[type]

  if (getStore()[ENV_KEY] === 'development') {
    consoleError(name, `[${prefix}] ${message}`)
  }
}
