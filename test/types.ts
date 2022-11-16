import store from './store'

export type Store = typeof store

export type Config = {
  pages: {
    label: string,
    icon: string,
    component: string,
    path: string,
    components: string[],
  }[],
}
