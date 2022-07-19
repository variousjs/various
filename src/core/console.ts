const getPrefix = (name: string) => {
  const text = `%c${name}`
  const style = 'color:white;background:blue;padding:1px 2px'
  return [text, style]
}

export default function log(name: string) {
  const { warn, error } = window.console

  return {
    warn(text: string) {
      warn(...getPrefix(name), text)
    },
    error(text: string) {
      error(...getPrefix(name), text)
    },
  }
}
