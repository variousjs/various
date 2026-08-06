// Native ESM module loader replacing SystemJS.
// Provides module loading API: dynamic path config,
// module undef/defined/specified, and object injection.
//
// Registry is stored on window.__various so the IIFE loader and ESM core
// share the same module state (replaces the global SystemJS registry).

type Registry = {
  modules: Map<string, any>
  urls: Map<string, string>
  loaded: Map<string, any>
}

// eslint-disable-next-line no-underscore-dangle
declare global {
  interface Window {
    // eslint-disable-next-line no-underscore-dangle
    __various?: Registry
  }
}

export function getRegistry(): Registry {
  // eslint-disable-next-line no-underscore-dangle
  if (!window.__various) {
    // eslint-disable-next-line no-underscore-dangle
    window.__various = {
      modules: new Map(),
      urls: new Map(),
      loaded: new Map(),
    }
  }
  // eslint-disable-next-line no-underscore-dangle
  return window.__various
}

const { modules: moduleRegistry, urls: moduleUrls, loaded: loadedModules } = getRegistry()

// Resolve relative URLs against document base URL.
// ESM import() in a module at /dist/index.js would resolve relative URLs
// against /dist/, not the document root. This ensures correct resolution.
function resolveUrl(url: string): string {
  if (url.startsWith('http') || url.startsWith('/') || url.startsWith('blob:')) return url
  return new URL(url, document.baseURI).href
}

export function setModuleUrl(name: string, url: string): void {
  moduleUrls.set(name, url)
}

export function getModuleUrl(name: string): string | undefined {
  return moduleUrls.get(name)
}

// Load module by name (looks up url from registry, then native import)
export async function importModule<T = any>(name: string): Promise<T> {
  const url = moduleUrls.get(name)
  if (url) {
    const absoluteUrl = resolveUrl(url)
    if (loadedModules.has(absoluteUrl)) {
      return loadedModules.get(absoluteUrl) as T
    }
    const mod = await import(/* @vite-ignore */ absoluteUrl) as T
    loadedModules.set(absoluteUrl, mod)
    return mod
  }
  // Not in url registry - may be injected via setModule (e.g. react, vue)
  if (moduleRegistry.has(name)) {
    return moduleRegistry.get(name) as T
  }
  throw new Error(`module "${name}" not defined`)
}

// Check if module is loaded
export function isModuleDefined(name: string): boolean {
  if (moduleRegistry.has(name)) return true
  const url = moduleUrls.get(name)
  if (url && loadedModules.has(resolveUrl(url))) return true
  return false
}

// Check if module is declared (url registered or already loaded)
export function isModuleSpecified(name: string): boolean {
  return moduleUrls.has(name) || isModuleDefined(name)
}

// Remove module from registry (for re-loading with cache-busting URL)
export function deleteModule(name: string): void {
  moduleRegistry.delete(name)
  const url = moduleUrls.get(name)
  if (url) {
    loadedModules.delete(resolveUrl(url))
  }
}

// Inject a module object directly (replaces System.set for standalone)
export function setModule(name: string, mod: any): void {
  if (mod && typeof mod === 'object' && !('default' in mod)) {
    moduleRegistry.set(name, { default: mod, ...mod })
  } else {
    moduleRegistry.set(name, mod)
  }
}
