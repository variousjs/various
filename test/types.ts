import store from './store'

export type Store = typeof store

export type Page = {
  label: string,
  components: {
    name: string,
    storeKeys?: string[],
    runtimeCreate?: boolean,
  }[],
  path: string,
}
