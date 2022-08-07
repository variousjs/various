import { getStore, subscribe } from './store'
import { MOUNTED_COMPONENTS } from '../config'

export const preloadComponents = (names: string[]) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const isComponentLoaded = (name: string) => {
  const [m] = name.split('.')
  return window.requirejs.specified(m) && !!window.requirejs.s.contexts._.defined[m]
}

export const getMountedComponents = () => getStore()[MOUNTED_COMPONENTS]

export const onComponentMounted = (name: string, callback: () => void) => {
  if (getMountedComponents().includes(name)) {
    callback()
    /* istanbul ignore next */
    return () => null
  }

  const unSubscribe = subscribe(() => {
    if (getMountedComponents().includes(name)) {
      unSubscribe()
      callback()
    }
  })

  return unSubscribe
}
