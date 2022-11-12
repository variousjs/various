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
  menu: {
    label: string,
    icon: string,
    path: string,
  }[],
  routes: {
    path: string[] | string,
    components: string[],
  }[],
}
