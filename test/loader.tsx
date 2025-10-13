import React from 'react'
import { LoaderNodeProps } from '@variousjs/various'
import { Store } from './types'

export default function (props: LoaderNodeProps<Store>) {
  if (window.Cypress) {
    window.console.log(props.$store.name)
  }

  return (
    <div>...</div>
  )
}
