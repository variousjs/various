import { App } from '@variousjs/various'

export default {
  onLog(e) {
    if (!window.middlewaresEnabled) {
      return true
    }
    if (e.level === 'info') {
      window.console.log('block by onLog middleware')
      return false
    }
    if (e.level === 'error') {
      return false
    }
    return true
  },

  onLoad(e) {
    if (!window.middlewaresEnabled) {
      return
    }
    if (e.module === 'B') {
      return
    }
    window.console.log(e.name, e.module, e.beenLoaded)
  },

  onMessage(e) {
    if (!window.middlewaresEnabled) {
      return true
    }
    if (e.event === 'block') {
      return false
    }
    return { ...e, event: 'postMessage event changed' }
  },

  onDispatch(e) {
    if (!window.middlewaresEnabled) {
      return true
    }
    if (e.action === 'block') {
      return false
    }
    return { ...e, action: 'changed' }
  },

  onError(e) {
    if (!window.middlewaresEnabled) {
      return
    }
    window.console.log(e.type, e.message)
  },
} as App['middlewares']
