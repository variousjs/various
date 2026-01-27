import React from 'react'
import { App, createComponent } from '@variousjs/various'

const D = createComponent({ type: 'vue3', module: 'createvue', url: '/dist/create-component/c.js' })

export default {
  Root: () => (
    <D />
  ),
} as App
