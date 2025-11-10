import { DependencyType, createComponent } from '@variousjs/various/standalone'
import { isModuleSpecified, VariousError } from '../core/helper'

let requirejsPromise: Promise<Event> | undefined

export function loadRequireJS(dep?: DependencyType) {
  if (requirejsPromise) {
    return requirejsPromise
  }

  const promise = new Promise<Event>((resolve, reject) => {
    if (!dep) {
      reject(new VariousError({
        name: 'standalone',
        type: 'NOT_DEFINED',
        originalError: new Error('requirejs not defined'),
      }))
      return
    }

    if (typeof dep === 'string') {
      const script = document.createElement('script')
      script.src = dep
      script.onload = (e) => resolve(e)
      script.onerror = (e) => reject(e)
      document.head.appendChild(script)
      return
    }

    // @ts-ignore
    window.requirejs = dep
    resolve(new Event('requirejs defined'))
  })

  if (!requirejsPromise) {
    requirejsPromise = promise
  }

  return requirejsPromise
}

export function defineModules(
  deps: Parameters<typeof createComponent>['0']['dependencies'],
) {
  Object.entries(deps || {}).forEach(([key, value]) => {
    if (isModuleSpecified(key)) {
      return
    }

    if (typeof value === 'string') {
      window.requirejs.config({ paths: { [key]: `${value}#${key}` } })
      return
    }

    window.define(key, [], () => value)
  })
}
