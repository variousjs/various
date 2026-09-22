import type { App } from '@variousjs/various'

// middleware strategy v2 — simulated new release: deterministic and
// always-on (no middlewaresEnabled gate), every hook logs its invocation
// so the hot update is observable
export default {
  version: 'v2',

  onLog(e) {
    window.console.log(`onLog v2: ${e.level}`)
    return true
  },

  onLoad(e) {
    window.console.log(`onLoad v2: ${e.module}`)
  },

  onMessage(e) {
    window.console.log(`onMessage v2: ${e.event}`)
    if (e.event === 'block') {
      return false
    }
    return true
  },

  onDispatch(e) {
    window.console.log(`onDispatch v2: ${e.action}`)
    if (e.action === 'block') {
      return false
    }
    return true
  },

  onError(e) {
    window.console.log(`onError v2: ${e.type}`)
  },
} as App['middlewares'] & { version: string }
