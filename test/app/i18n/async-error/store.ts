import { Nycticorax } from '@variousjs/various'

interface S {
  i18nFailSignal: boolean,
}

export const {
  createStore,
  subscribe,
  emit,
} = new Nycticorax<S>()

createStore({ i18nFailSignal: false })
