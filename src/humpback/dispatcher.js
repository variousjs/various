import { MOUNTED_COMPONENTS, COMPONENT_PACKAGES } from './config'

const dispatcher = {
  GET_MOUNTED_COMPONENTS({ getStore }) {
    return getStore()[MOUNTED_COMPONENTS]
  },

  UN_MOUNT_COMPONENT({ getStore, dispatch }, { name }) {
    let mountedComponents = getStore()[MOUNTED_COMPONENTS]
    mountedComponents = mountedComponents.filter((item) => item !== name)
    dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
  },

  MOUNT_COMPONENT({ getStore, dispatch }, { name, url }) {
    const packages = getStore()[COMPONENT_PACKAGES]
    packages[name] = url.slice(0, -3)
    window.requirejs.config({ paths: { [name]: packages[name] } })
    dispatch({ [COMPONENT_PACKAGES]: packages }, true)
  },
}

export const names = Object.keys(dispatcher)

export default dispatcher
