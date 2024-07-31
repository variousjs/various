import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import { resetModuleConfig, getNameWithModule } from './helper'
import componentCreator from './component'
import connector from './connector'

const renderComponent: typeof rc = ({
  name,
  module,
  url,
  target,
  props,
  onMounted,
}) => {
  const nameWidthModule = getNameWithModule(name, module)

  if (url) {
    resetModuleConfig(name, url)
  }

  const C = componentCreator({
    name,
    module,
    url,
    onMounted,
  })

  let root: Root
  if (connector.getRenderRoot(nameWidthModule)) {
    root = connector.getRenderRoot(nameWidthModule)
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot(nameWidthModule, root)
  }

  const { $silent, ...rest } = props || {}
  const nextProps = { $componentProps: rest, $silent }

  root.render(<C {...nextProps} />)

  return () => setTimeout(() => {
    root.unmount()
    connector.deleteRenderRoot(nameWidthModule)
  })
}

export default renderComponent
