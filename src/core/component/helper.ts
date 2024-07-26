import {
  onComponentMounted as ocm,
  isModuleLoaded as im,
  preloadComponents as pc,
} from '@variousjs/various'
import { getStore, subscribe } from '../store'
import { MOUNTED_COMPONENTS_KEY } from '../../config'

export const preloadComponents: typeof pc = (names) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const isModuleLoaded: typeof im = (name) => {
  const [m] = name.split('.')
  return window.requirejs.specified(m) && !!window.requirejs.s.contexts._.defined[m]
}

export const getMountedComponents = () => getStore(MOUNTED_COMPONENTS_KEY)

export const onComponentMounted: typeof ocm = (name, callback) => {
  const nextName = typeof name === 'string' ? [name] : name

  if (nextName.every((n) => getMountedComponents().includes(n))) {
    callback()
    return () => null
  }

  const unSubscribe = subscribe({
    [MOUNTED_COMPONENTS_KEY](value) {
      const names = value as string[]
      if (nextName.every((n) => names.includes(n))) {
        unSubscribe()
        callback()
      }
    },
  })

  return unSubscribe
}

export const resetModuleConfig = (name: string, url: string) => {
  window.requirejs.undef(name)
  window.requirejs.config({
    paths: {
      [name]: `${url}#${name}`,
    },
  })
}
