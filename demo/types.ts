import store from './store'

export type Store = typeof store

export type Config = {
  menu: {
    label: string,
    icon: string,
    path: string,
  }[],
  routes: {
    path: string[] | string,
    components: string[][],
  }[],
}
