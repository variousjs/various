import React, { useEffect } from 'react'
import { FallbackProps } from '@variousjs/various'
import { Store } from '../types'

export default function (props: FallbackProps<Store>) {
  useEffect(() => {
    if (window.Cypress) {
      const dom = document.querySelector('#t')
      if (dom) {
        dom.innerHTML += [props.$self.name, props.$self.module].filter(Boolean).join()
      }
    }
  }, [props.$self])

  return (
    <div>...</div>
  )
}
