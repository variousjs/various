import { createLogger as cl, LogEvent } from '@variousjs/various'
import connector from './connector'
import { getNameWithModule } from './helper'

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
    `%c ${getNameWithModule(args)} `,
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

const createLogger: typeof cl = (moduleDefined) => ({
  info(message, type) {
    logger({
      ...moduleDefined, level: 'info', type, message,
    })
  },
  warn(message, type) {
    logger({
      ...moduleDefined, level: 'warn', type, message,
    })
  },
  error(message, type) {
    logger({
      ...moduleDefined, level: 'error', type, message,
    })
  },
})

export default createLogger
