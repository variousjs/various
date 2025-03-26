import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import componentCreator from './component'
import connector from './connector'

const renderComponent: typeof rc = ({
  name,
  module,
  url,
  target,
  props,
  renderNode,
  onMounted,
}) => {
  let C = connector.getComponent({ name, module })
  if (!C) {
    C = componentCreator({
      name,
      module,
      url,
      onMounted() {
        connector.setComponent({ name, module }, C)
        onMounted?.()
      },
    })
  }

  let root: Root
  if (connector.getRenderRoot({ name, module })) {
    root = connector.getRenderRoot({ name, module })
  } else {
    root = createRoot(target as Element)
    connector.setRenderRoot({ name, module }, root)
  }

  const { $silent, ...rest } = props || {}
  const nextProps = { $componentProps: rest, $silent }
  const node = <C {...nextProps} />

  root.render(renderNode ? renderNode(node) : node)

  return () => new Promise<void>((resolve) => {
    setTimeout(() => {
      root.unmount()
      connector.deleteRenderRoot({ name, module })
      resolve()
    })
  })
}

export default renderComponent
