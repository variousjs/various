const getPrefix = (name?: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

export default function (defaultName?: string) {
  const { warn, error } = window.console

  return {
    warn(text: string, name?: string) {
      warn(...getPrefix(name || defaultName), text)
    },
    error(text: string, name?: string) {
      error(...getPrefix(name || defaultName), text)
    },
  }
}
