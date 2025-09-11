import { Intl, ModuleDefined } from '@variousjs/various'
import connector from '../connector'
import { VariousError, onError } from '../helper'
import { getStore } from '../store'

export default function (moduleDefined: ModuleDefined) {
  return function (key, params, defaultString) {
    const i18nConfig = connector.getI18nConfig(moduleDefined) || connector.getGlobalI18nConfig()

    let defaultText = defaultString
    if (defaultText === undefined) {
      defaultText = typeof params === 'string' ? params : key
    }

    if (!i18nConfig) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('config not exist'),
      }))
      return defaultText
    }

    const { localeKey, resources } = i18nConfig
    const locale = getStore(localeKey) as string
    const resource = resources[locale]

    if (!resource) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale resource \`${locale}\` not exist`),
      }))
      return defaultText
    }

    if (!resource[key]) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale key \`${key}\` not exist`),
      }))
      return defaultText
    }

    const text = resource[key]

    if (!params || typeof params === 'string' || Object.prototype.toString.call(params) !== '[object Object]') {
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
  } as Intl
}
