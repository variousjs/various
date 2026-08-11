import {
  DependencyType,
  createComponent,
  createAppConfig as con,
} from '@variousjs/various/standalone'
import { isModuleSpecified } from '../core/helper'
import {
  setModule,
  setModuleUrl,
  importModule,
  createModuleBlobUrl,
  getAllModuleUrls,
  getInjectedModuleNames,
} from '../core/system'
import { emit } from '../core/store'
import { STANDALONE_CONFIG_READY, LOCALE_KEY, DEFAULT_LOCALE } from '../core/config'
import connector from '../core/connector'

const defineAsync = (name: string, dep?: DependencyType) => {
  if (typeof dep === 'string') {
    // URL-based dependency: setModuleUrl was already called in defineModules,
    // so importModule(name) will resolve the URL from the registry
    return importModule(name).then((mod: any) => {
      setModule(name, mod.default || mod)
    })
  }
  // Module instance: already registered in defineModules, nothing to do
  return Promise.resolve()
}

// Track if import map has been created (browser only supports one)
let importMapCreated = false

// Create import map so ESM components can resolve bare specifiers.
// - String deps: map directly to their URL
// - Object deps: create blob URLs that re-export from the module registry
// Also includes all pre-registered module URLs and injected modules
function ensureImportMap(
  defines: { key: string, value?: DependencyType }[],
): void {
  if (importMapCreated) return

  const imports: Record<string, string> = {}

  // Include all pre-registered module URLs (from createComponent calls)
  Object.entries(getAllModuleUrls()).forEach(([name, url]) => {
    imports[name] = url
  })

  // Add blob URLs for object deps registered in this call
  defines.forEach(({ key, value }) => {
    if (typeof value !== 'string') {
      const blobUrl = createModuleBlobUrl(key)
      if (blobUrl) imports[key] = blobUrl
    }
  })

  // Add blob URLs for previously injected modules (e.g. react from index.tsx)
  getInjectedModuleNames().forEach((name) => {
    if (!imports[name]) {
      const blobUrl = createModuleBlobUrl(name)
      if (blobUrl) imports[name] = blobUrl
    }
  })

  if (Object.keys(imports).length === 0) return
  const script = document.createElement('script')
  script.type = 'importmap'
  script.textContent = JSON.stringify({ imports })
  document.head.appendChild(script)
  importMapCreated = true
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
    } else {
      // Object dependency: register immediately so blob URL can be created
      setModule(key, value)
    }

    defines.push({ key, value })
  })

  // Create import map before any import() calls
  ensureImportMap(defines)

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
