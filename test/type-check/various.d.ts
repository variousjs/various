// Per-program contract: the local view this bundle relies on.
// This is the only file that knows about store/messages/actions shapes, so
// component code passes only its own props plus the statics target key.
//
// Multiple augmentations merge, but re-declaring the same member with a
// different type is a compile error, so keep ONE contract file per program.
import type {
  DefineActions,
  DefineAppActions,
  DefineMessages,
} from '@variousjs/various'

declare module '@variousjs/various' {
  interface VariousContract {
    store: { b: number },
    messages: DefineMessages<{
      greet: { payload: number },
      next: { payload: string },
    }>,
    actions: {
      // DefineAppActions<T> merges custom global actions with the builtin
      // ones (setLocale/getLocale/updateI18nConfig)
      app: DefineAppActions<{
        ping: { payload: string, result: number },
      }>,
      ca: DefineActions<{
        update: { payload: number, result: void },
        next?: { payload: string, result: number },
      }>,
      cb: DefineActions<{
        update: { payload: string, result: string },
      }>,
    },
  }
}
