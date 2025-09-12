import { createLogger as cl, ModuleDefined } from '@variousjs/various'
import { getNameWithModule } from './helper'

type LogLevel = 'info' | 'warn' | 'error'

interface LogArgs extends ModuleDefined {
  level: LogLevel,
  type?: string,
  message: any,
}

const logger = (args: LogArgs) => {
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
