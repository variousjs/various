import React from 'react'
import { I18n, App, createComponent } from '@variousjs/various'
import { subscribe, emit } from './store'

const i18n: I18n = () => new Promise((_, reject) => {
  const unsubscribe = subscribe({
    i18nFailSignal(v) {
      if (v) {
        reject(new Error('get i18n Error'))
      }
      unsubscribe()
    },
  })
})

const C = createComponent({ name: 'i18n' })

export default {
  store: { locale: 'jp' },
  Container: () => (<C setFail={() => emit({ i18nFailSignal: true })} />),
  i18n,
  middlewares: {
    onLog(e) {
      window.console.log(e.name, e.type)
      return false
    },
  },
} as App
