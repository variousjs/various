import connector from '../connector'
import onError from '../error'
import { getStore } from '../store'

export default function (componentName: string) {
  return function (key: string, params?: Record<string, string | number>) {
    const i18nConfig = connector.getI18nConfig(componentName)

    if (!i18nConfig) {
      onError({
        name: componentName,
        type: 'i18n',
        message: 'config not exist',
      })
      return key
    }

    const { localeKey, resources } = i18nConfig
    const locale = getStore()[localeKey] as string
    const resource = resources[locale]

    if (!resource) {
      onError({
        name: componentName,
        type: 'i18n',
        message: `locale \`${locale}\` not exist`,
      })
      return key
    }

    if (!resource[key]) {
      onError({
        name: componentName,
        type: 'i18n',
        message: `key \`${key}\` not exist`,
      })
      return key
    }

    const text = resource[key]

    if (!params || Object.prototype.toString.call(params) !== '[object Object]') {
      return text
    }

    const args = Object.keys(params)

    if (!args.length) {
      return text
    }

    return args.reduce((next, arg) => {
      const regex = new RegExp(`{\\s*${arg}\\s*}`, 'g')
      return next.replace(regex, params[arg].toString())
    }, text)
  }
}
