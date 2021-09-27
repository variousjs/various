export default (names: string[]) => new Promise<void>((resolve) => {
  window.requirejs(names, () => resolve())
})
