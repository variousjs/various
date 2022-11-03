import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { ComponentProps } from '../../types'
import componentCreator from './core'
import connector from '../connector'

const renderComponent: ComponentProps['$render'] = ({
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
  const F = (p: any) => (<C {...p} />)

  let root: Root
  if (connector.getRenderRoot(nameWidthSub)) {
    root = connector.getRenderRoot(nameWidthSub)
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot(nameWidthSub, root)
  }

  root.render(<F {...props} />)

  return () => setTimeout(() => {
    root.unmount()
    connector.deleteRenderRoot(nameWidthSub)
  })
}

export default renderComponent
