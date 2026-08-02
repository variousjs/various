/* global System */
// SystemJS wrapper providing module loading API.
// Replaces RequireJS runtime capabilities: dynamic path config,
// module undef/defined/specified, and object injection (System.set).

// name -> url registry (replaces requirejs.config paths)
const moduleUrls = new Map<string, string>()

export function setModuleUrl(name: string, url: string): void {
  moduleUrls.set(name, url)
}

export function getModuleUrl(name: string): string | undefined {
  return moduleUrls.get(name)
}

// Load module by name (looks up url from registry, then System.import)
export async function importModule<T = any>(name: string): Promise<T> {
  const url = moduleUrls.get(name)
  if (url) {
    return System.import(url) as Promise<T>
  }
  // Not in url registry — may be injected via System.set (e.g. react, vue)
  if (System.has(name)) {
    return System.get(name) as T
  }
  throw new Error(`module "${name}" not defined`)
}

// Check if module is loaded (in SystemJS registry)
export function isModuleDefined(name: string): boolean {
  if (System.has(name)) return true
  const url = moduleUrls.get(name)
  if (!url) return false
  try {
    return System.has(System.resolve(url))
  } catch {
    return false
  }
}

// Check if module is declared (url registered or already loaded)
export function isModuleSpecified(name: string): boolean {
  return moduleUrls.has(name) || isModuleDefined(name)
}

// Remove module from registry (replaces requirejs.undef)
export function deleteModule(name: string): void {
  if (System.has(name)) {
    System.delete(name)
    return
  }
  const url = moduleUrls.get(name)
  if (url) {
    try {
      System.delete(System.resolve(url))
    } catch {
      // module not loaded yet, nothing to delete
    }
  }
}

// Inject a module object directly (replaces window.define for standalone)
export function setModule(name: string, mod: any): void {
  if (mod && typeof mod === 'object' && !('default' in mod)) {
    System.set(name, { default: mod, ...mod })
  } else {
    System.set(name, mod)
  }
}
