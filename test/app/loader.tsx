import React, { useEffect } from 'react'
import { LoaderNodeProps } from '@variousjs/various'
import { Store } from '../types'

export default function (props: LoaderNodeProps<Store>) {
  if (window.Cypress) {
    useEffect(() => {
      const dom = document.querySelector('#t')
      if (dom) {
        dom.innerHTML += [props.$self.name, props.$self.module].filter(Boolean).join()
      }
    }, [props.$self])
  }

  return (
    <div>...</div>
  )
}
