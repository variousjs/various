import type { App } from '@variousjs/various'

// middleware strategy v1 — independently deployable module with the exact
// logic previously inlined in test/app/middlewares.ts (gated by
// window.middlewaresEnabled), so the existing middleware behavior is kept
export default {
  version: 'v1',

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
    window.console.log(e.module, e.beenLoaded)
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
} as App['middlewares'] & { version: string }
