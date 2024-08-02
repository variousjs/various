import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import { getNameWithModule } from './helper'
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
  const nameWithModule = getNameWithModule(name, module)

  let C = connector.getComponent(nameWithModule)
  if (!C) {
    C = componentCreator({
      name,
      module,
      url,
      onMounted,
    })
    connector.setComponent(nameWithModule, C)
  }

  let root: Root
  if (connector.getRenderRoot(nameWithModule)) {
    root = connector.getRenderRoot(nameWithModule)
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot(nameWithModule, root)
  }

  const { $silent, ...rest } = props || {}
  const nextProps = { $componentProps: rest, $silent }

  root.render(<C {...nextProps} />)

  return () => setTimeout(() => {
    root.unmount()
    connector.deleteRenderRoot(nameWithModule)
  })
}

export default renderComponent
