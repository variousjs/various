import { DependencyType, createComponent } from '@variousjs/various/standalone'
import { defineDependencies, isModuleSpecified, VariousError } from '../core/helper'

let requirejsPromise: Promise<Event> | undefined

export function loadRequireJS(dep?: DependencyType) {
  const promise = new Promise<Event>((resolve, reject) => {
    // @ts-ignore
    if (window.requirejs) {
      resolve(new Event('requirejs exist'))
      return
    }

    if (!dep && !window.requirejs) {
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
    if (!isModuleSpecified(key)) {
      switch (true) {
        case typeof value === 'string':
          defineDependencies({ [key]: value as string })
          break

        case typeof value !== 'string':
          window.define(key, [], () => value)
          break

        default:
          break
      }
    }
  })
}
