import { Component } from 'react'
import { ERROR_TYPE } from '../config'
import { ErrorState, ErrorArgs } from '../types'

const getConsolePrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

function consoleError(name: string, text: string) {
  window.console.error(...getConsolePrefix(name), text)
}

export default function (this: Component<{}, ErrorState> | void, args: ErrorArgs) {
  const { type, message, name, mode } = args
  const prefix = type === 'dispatch' || type === 'i18n'
    ? type
    : ERROR_TYPE[type]

  if (mode === 'development') {
    consoleError(name, `[${prefix}] ${message}`)
  }

  if (this) {
    this.setState({ errorType: type as ERROR_TYPE, errorMessage: message })
  }
}
