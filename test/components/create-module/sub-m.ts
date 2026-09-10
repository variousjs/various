// Target module for the dynamic defined dependency test.
// 'sub-m' is NOT registered in public/index.html, so it is absent from
// the initial import map and can only resolve via the import map
// appended at runtime by defineDependencies (multiple import maps).
const sub = 'sub module value'

export default sub
