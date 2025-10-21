import { Nycticorax } from '@variousjs/various'

interface S {
  i18nPassSignal: boolean,
}

export const {
  createStore,
  subscribe,
  emit,
} = new Nycticorax<S>()

createStore({ i18nPassSignal: false })
