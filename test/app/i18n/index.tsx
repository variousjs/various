import React from 'react'
import { I18n, App, createComponent } from '@variousjs/various'
import { subscribe, emit } from './store'
import jp from './jp.json'

const i18n: I18n = () => new Promise((resolve) => {
  const unsubscribe = subscribe({
    i18nPassSignal(v) {
      if (v) {
        resolve({
          localeKey: 'locale',
          resources: { jp },
        })
      }
      unsubscribe()
    },
  })
})

const C = createComponent({ name: 'i18n' }, ['locale'])

export default {
  store: { locale: 'jp' },
  Container: () => (<C setSuccess={() => emit({ i18nPassSignal: true })} />),
  i18n,
} as App
