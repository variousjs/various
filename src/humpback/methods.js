import { MOUNTED_COMPONENTS, COMPONENT_PACKAGES } from './config'

export default {
  getMountedComponents({ getStore }) {
    return getStore()[MOUNTED_COMPONENTS]
  },

  unMountComponent({ getStore, dispatch }, name) {
    let mountedComponents = getStore()[MOUNTED_COMPONENTS]
    mountedComponents = mountedComponents.filter((item) => item !== name)
    dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
  },

  mountComponent({ getStore, dispatch }, name, path) {
    const packages = getStore()[COMPONENT_PACKAGES]
    packages[name] = path.slice(0, -3)
    window.requirejs.config({ paths: { [name]: packages[name] } })
    dispatch({ [COMPONENT_PACKAGES]: packages }, true)
  },
}
