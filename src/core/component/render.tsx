import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import componentCreator from './core'
import connector from '../connector'
import { isPropsKeyDuplicate } from './helper'
import { onError } from '../helper'

const renderComponent: typeof rc = ({
  name,
  url,
  target,
  props,
  module,
  onMounted,
}) => {
  const nameWidthSub = module ? `${name}.${module}` : name

  if (url) {
    // if define url, means replace component
    window.requirejs.undef(name)
    window.requirejs.config({
      paths: {
        [name]: `${url}#`,
      },
    })
  }

  const C = componentCreator(nameWidthSub, onMounted)

  let root: Root
  if (connector.getRenderRoot(nameWidthSub)) {
    root = connector.getRenderRoot(nameWidthSub)
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot(nameWidthSub, root)
  }

  if (isPropsKeyDuplicate(props)) {
    onError({ type: 'component', name, message: 'props key duplicate with store' })
  }

  root.render(<C {...props} />)

  return () => setTimeout(() => {
    root.unmount()
    connector.deleteRenderRoot(nameWidthSub)
  })
}

export default renderComponent
