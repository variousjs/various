import { MOUNTED_COMPONENTS } from './config'

const dispatcher = {
  GET_MOUNTED_COMPONENTS({ getStore }) {
    return getStore()[MOUNTED_COMPONENTS]
  },
}

export default dispatcher
