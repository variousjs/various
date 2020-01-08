import { getStore } from './store'
import { MOUNTED_COMPONENTS } from './config'

export default {
  getMountedComponents() {
    return getStore()[MOUNTED_COMPONENTS]
  },
}
