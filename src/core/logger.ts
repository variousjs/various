import { createLogger as cl, LogEvent } from '@variousjs/various'
import connector from './connector'
import { VariousError } from './helper'

type LogArgs = Parameters<LogEvent>[0]
type LogLevel = LogArgs['level']

const logger = (args: LogArgs) => {
  const middlewares = connector.getMiddlewares()
  const canLog = middlewares?.onLog?.(args)

  if (canLog === false) {
    return
  }

  const colorMap: Record<LogLevel, string> = {
    info: 'blue',
    warn: 'orange',
    error: 'red',
  }
  const color = colorMap[args.level]

  const params = [
    `%c ${args.module} `,
    `background:${color};border:1px solid ${color};padding:1px;border-radius:2px 0 0 2px;color: #fff;`,
  ]

  if (args.type) {
    params[0] = `${params[0]}%c ${args.type} %c`
    params.push(
      `border:1px solid ${color};padding:1px;border-radius:0 2px 2px 0;color:${color};`,
      'background:transparent',
    )
  }

  if (args.level !== 'info') {
    params[0] = ` ${params[0]}`
  }

  window.console[args.level](...params, args.message)
}

const createLogger: typeof cl = (module) => ({
  info(message, type) {
    logger({
      module, level: 'info', type, message,
    })
  },
  warn(message, type) {
    logger({
      module, level: 'warn', type, message,
    })
  },
  error(message, type) {
    const middlewares = connector.getMiddlewares()
    const error = message instanceof VariousError
      ? message
      : new VariousError({
        module,
        type: type || 'unknow',
        originalError: message instanceof Error ? message : new Error(message),
      })

    middlewares?.onError?.(error)

    logger({
      module, level: 'error', type, message,
    })
  },
})

export default createLogger
