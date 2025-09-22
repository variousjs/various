import { Intl, ModuleDefined, I18n } from '@variousjs/various'
import connector from './connector'
import { VariousError, onError, isPromiseLike } from './helper'
import { getStore, emit } from './store'

export function createI18nConfig(
  method?: I18n,
  moduleDefined?: ModuleDefined,
  callback?: () => void,
) {
  if (!method) {
    return
  }

  const i18nConfig = method()

  if (!isPromiseLike(i18nConfig)) {
    if (moduleDefined) {
      connector.setI18nConfig(moduleDefined, i18nConfig)
    } else {
      connector.setGlobalI18nConfig(i18nConfig)
    }
    return
  }

  i18nConfig
    .then((res) => {
      if (moduleDefined) {
        connector.setI18nConfig(moduleDefined, res)
        callback?.()
        return
      }

      const locale = getStore(res.localeKey)
      connector.setGlobalI18nConfig(res)

      emit({ [res.localeKey]: undefined }, true)
      emit({ [res.localeKey]: locale })
    })
    .catch((e: Error) => {
      onError(new VariousError({
        name: moduleDefined?.name || 'app',
        module: moduleDefined?.module,
        type: 'I18N',
        originalError: e,
      }))
    })
}

export function createI18n(moduleDefined: ModuleDefined) {
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
    const locale: string | undefined = getStore(localeKey)

    if (locale === undefined) {
      onError(new VariousError({
        ...moduleDefined,
        type: 'I18N',
        originalError: new Error('locale key not defined'),
      }))
      return defaultText
    }

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
