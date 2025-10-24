function loop(x: number) {
  if (x >= 1000000000000) return
  loop(x + 1)
}

const a = loop(0)

export default a
