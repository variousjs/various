import React, { useEffect } from 'react'
import { LoaderNodeProps } from '@variousjs/various'
import { Store } from '../types'

export default function (props: LoaderNodeProps<Store>) {
  if (window.Cypress) {
    useEffect(() => {
      const dom = document.querySelector('#t')
      if (dom) {
        dom.innerHTML += [props.$name, props.$module].filter(Boolean).join()
      }
    }, [props.$name, props.$module])
  }

  return (
    <div>...</div>
  )
}
