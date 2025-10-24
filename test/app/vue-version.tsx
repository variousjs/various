import React from 'react'
import { App, createComponent } from '@variousjs/various'

const D = createComponent({ type: 'vue3', name: 'createvue', url: '/dist/create-component/c.js' })

export default {
  Container: () => (
    <D />
  ),
} as App
