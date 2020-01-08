import { MOUNTED_COMPONENTS } from './config'

export default {
  getMountedComponents({ getStore }) {
    return getStore()[MOUNTED_COMPONENTS]
  },

  unMountComponent({ getStore, dispatch }, name) {
    let mountedComponents = getStore()[MOUNTED_COMPONENTS]
    mountedComponents = mountedComponents.filter((item) => item !== name)
    dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
  },
}
