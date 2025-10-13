import { VariousComponentType } from '@variousjs/various'
import store from './store'

export type Store = typeof store

export type Page = {
  label: string,
  components: {
    name: string,
    storeKeys?: string[],
    runtimeCreate?: boolean,
    type?: VariousComponentType,
  }[],
  path: string,
}
