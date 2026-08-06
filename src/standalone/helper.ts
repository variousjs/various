import {
  DependencyType,
  createComponent,
  createAppConfig as con,
} from '@variousjs/various/standalone'
import { isModuleSpecified } from '../core/helper'
import { setModule, setModuleUrl, importModule } from '../core/system'
import { emit } from '../core/store'
import { STANDALONE_CONFIG_READY, LOCALE_KEY, DEFAULT_LOCALE } from '../core/config'
import connector from '../core/connector'

const defineAsync = (name: string, dep?: DependencyType) => {
  if (typeof dep === 'string') {
    // URL-based dependency: load via native import and register in registry
    // so component modules can find it via importModule
    return importModule(dep).then((mod: any) => {
      setModule(name, mod.default || mod)
    })
  }
  // Module instance: register directly
  setModule(name, dep)
  return Promise.resolve()
}

export function defineModules(
  deps: NonNullable<Parameters<typeof createComponent>['0']['dependencies']>,
) {
  const defines: { key: string, value?: DependencyType }[] = []

  Object.entries(deps).forEach(([key, value]) => {
    if (isModuleSpecified(key) || value === undefined) {
      return
    }

    if (typeof value === 'string') {
      setModuleUrl(key, value)
    }

    defines.push({ key, value })
  })

  return Promise.all(defines.map((item) => defineAsync(item.key, item.value)))
}

export const createAppConfig: typeof con = (config) => {
  const {
    dependencies,
    ErrorFallback,
    Fallback,
    store,
    actions,
    i18n,
  } = config

  emit({
    [STANDALONE_CONFIG_READY]: false,
    [LOCALE_KEY]: i18n?.defaultLocale || DEFAULT_LOCALE,
  }, true)

  if (ErrorFallback) {
    connector.setErrorFallbackComponent(ErrorFallback)
  }

  if (Fallback) {
    connector.setFallbackComponent(Fallback)
  }
  if (actions) {
    connector.setStoreActions(actions)
  }

  if (store) {
    emit(store)
  }

  defineModules(dependencies).then(() => {
    emit({ [STANDALONE_CONFIG_READY]: true }, true)
  })
}
