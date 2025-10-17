import { Nycticorax } from '@variousjs/various'

interface S {
  i18nPassSignal: boolean,
  i18nFailSignal: boolean,
}

export const {
  createStore,
  subscribe,
  emit,
} = new Nycticorax<S>()

createStore({ i18nFailSignal: false, i18nPassSignal: false })
