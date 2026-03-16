import React from 'react'
import { I18n, App, createComponent } from '@variousjs/various'

const i18n: I18n = () => ({
  resources: {
    jp: { title: 'Jpabn' },
  },
})

const C = createComponent({ module: 'i18n', type: 'vue3' })

export default {
  Root: () => (<C />),
  i18n: {
    defaultLocale: 'jp',
    getResources: i18n,
  },
} as App
