import React from 'react'
import { App, createComponent } from '@variousjs/various'
import Loader from './loader'
import store from './store'
import { Store } from '../types'

const C = createComponent({ name: 'create', module: 'A', url: '/dist/create-component/index.js' })
const D = createComponent({ type: 'vue3', name: 'createvue', url: '/dist/create-component/c.js' })

export default {
  Container: () => (
    <>
      <div id="t" />
      <C $silent />
      <C />
      <D />
      <D $silent />
    </>
  ),
  Loader,
  store,
} as App<Store>
