import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import componentCreator from './core'
import connector from '../connector'

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

  const C = componentCreator(nameWidthSub, undefined, onMounted)

  let root: Root
  if (connector.getRenderRoot(nameWidthSub)) {
    root = connector.getRenderRoot(nameWidthSub)
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot(nameWidthSub, root)
  }

  const { $silent, ...rest } = props || {}
  const nextProps = { $componentProps: rest, $silent }

  root.render(<C {...nextProps} />)

  return () => setTimeout(() => {
    root.unmount()
    connector.deleteRenderRoot(nameWidthSub)
  })
}

export default renderComponent
