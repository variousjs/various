import { getStore, subscribe } from '../store'
import { MOUNTED_COMPONENTS_KEY } from '../../config'

export const preloadComponents = (names: string[]) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const isComponentLoaded = (name: string) => {
  const [m] = name.split('.')
  return window.requirejs.specified(m) && !!window.requirejs.s.contexts._.defined[m]
}

export const getMountedComponents = () => getStore()[MOUNTED_COMPONENTS_KEY]

export const onComponentMounted = (name: string, callback: () => void) => {
  if (getMountedComponents().includes(name)) {
    callback()
    // /* istanbul ignore next */
    return () => null
  }

  const unSubscribe = subscribe({
    [MOUNTED_COMPONENTS_KEY](value) {
      const names = value as string[]
      if (names.includes(name)) {
        unSubscribe()
        callback()
      }
    },
  })

  return unSubscribe
}
