import { Intl, ModuleDefined } from '@variousjs/various'
import connector from '../connector'
import { VariousError, onError } from '../helper'
import { getStore } from '../store'

export default function (moduleDefined: ModuleDefined) {
  return function (key, params) {
    const i18nConfig = connector.getI18nConfig(moduleDefined)

    if (!i18nConfig) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('config not exist'),
      }))
      return key
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
      return key
    }

    if (!resource[key]) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error(`locale key \`${key}\` not exist`),
      }))
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
  } as Intl
}
