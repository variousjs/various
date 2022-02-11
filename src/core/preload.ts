export const preload = (names: string[]) => new Promise<void>((resolve) => {
  window.requirejs(names, resolve)
})

export const isComponentLoaded = (name: string) => window.requirejs.specified(name.split('.')[0])
