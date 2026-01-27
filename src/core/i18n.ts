import {
  Intl,
  ModuleDef,
  I18n,
  I18nConfig,
} from '@variousjs/various'
import connector from './connector'
import { VariousError, onError, isPromiseLike } from './helper'
import { getStore, emit } from './store'

export function createI18nConfig(
  method?: I18n,
  module?: ModuleDef,
  callback?: () => void,
) {
  if (!method) {
    return
  }

  const i18nConfig = method()

  if (!isPromiseLike(i18nConfig)) {
    if (module) {
      connector.setI18nConfig(module, i18nConfig)
    } else {
      connector.setGlobalI18nConfig(i18nConfig)
    }
    return
  }

  if (module) {
    connector.setI18nConfig(module, {
      loading: true,
      lngStoreKey: '',
      resources: {},
    })
  } else {
    connector.setGlobalI18nConfig({
      loading: true,
      lngStoreKey: '',
      resources: {},
    })
  }

  i18nConfig
    .then((res) => {
      if (module) {
        connector.setI18nConfig(module, { ...res, loading: false })
        callback?.()
        return
      }

      const locale = getStore(res.lngStoreKey)

      emit({ [res.lngStoreKey]: undefined }, true)
      emit({ [res.lngStoreKey]: locale }, true)
      connector.setGlobalI18nConfig({ ...res, loading: false })
    })
    .catch((e: Error) => {
      onError(new VariousError({
        module: module || 'app',
        type: 'I18N',
        originalError: e,
      }))
    })
}

export function createI18n(
  module: ModuleDef,
  updater: () => void,
) {
  const ctx: Intl = (key, params, defaultString) => {
    const i18nConfig = connector.getI18nConfig(module) || connector.getGlobalI18nConfig()

    let defaultText = defaultString
    if (defaultText === undefined) {
      defaultText = typeof params === 'string' ? params : key
    }

    if (!i18nConfig) {
      onError(new VariousError({
        module,
        type: 'I18N',
        originalError: new Error('config not exist'),
      }))
      return defaultText
    }

    if (i18nConfig.loading) {
      return defaultText
    }

    const { lngStoreKey, resources } = i18nConfig
    const locale: string | undefined = getStore(lngStoreKey)

    if (lngStoreKey === undefined || locale === undefined) {
      onError(new VariousError({
        module,
        type: 'I18N',
        originalError: new Error('locale key not defined'),
      }))
      return defaultText
    }

    const resource = resources?.[locale]

    if (!resource) {
      onError(new VariousError({
        module,
        type: 'I18N',
        originalError: new Error(`locale resource \`${locale}\` not exist`),
      }))
      return defaultText
    }

    if (!resource[key]) {
      onError(new VariousError({
        module,
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
  }

  ctx.update = (config, type) => {
    const i18nConfig = type === 'app'
      ? connector.getGlobalI18nConfig()
      : connector.getI18nConfig(module)
    const next = { ...i18nConfig, ...config } as I18nConfig

    if (type === 'app') {
      connector.setGlobalI18nConfig(next)
    } else {
      connector.setI18nConfig(module, next)
    }

    updater()
  }

  return ctx
}
