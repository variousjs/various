export const preload = (names: string[]) => new Promise<void>((resolve, reject) => {
  window.requirejs(names, resolve, reject)
})

export const isComponentLoaded = (name: string) => {
  const [m] = name.split('.')
  return window.requirejs.specified(m) && !!window.requirejs.s.contexts._.defined[m]
}
