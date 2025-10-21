import React from 'react'
import { I18n, App, createComponent } from '@variousjs/various'

const i18n: I18n = () => ({
  localeKey: 'locale',
  resources: {
    jp: { title: 'Jpabn' },
  },
})

const C = createComponent({ name: 'i18n', type: 'vue3' })

export default {
  store: { locale: 'jp' },
  Container: () => (<C />),
  i18n,
} as App
