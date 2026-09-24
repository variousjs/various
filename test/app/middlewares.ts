import { App } from '@variousjs/various'
import { getStrategy } from './middleware-strategy'

// Stable delegate shell: middleware logic lives in independently deployable
// strategy modules (see ./middleware-strategy). Updating middlewares only
// redeploys a strategy module, never this app bundle. Every hook reads the
// cached strategy synchronously and fails open while it is absent — hooks
// must not await, because loading a strategy module itself fires onLoad.
export default {
  onLog: (e) => getStrategy().onLog?.(e) ?? true,

  onLoad: (e) => getStrategy().onLoad?.(e),

  onError: (e) => getStrategy().onError?.(e),

  onMessage: (e) => getStrategy().onMessage?.(e) ?? true,

  onDispatch: (e) => getStrategy().onDispatch?.(e) ?? true,
} as App['middlewares']
