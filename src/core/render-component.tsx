import React from 'react'
import { createRoot } from 'react-dom/client'
import { renderComponent as rc } from '@variousjs/various'
import createReactComponent from './react-component'
import createVueComponent from './vue-component'
import { onError, VariousError } from './helper'
import ErrorBoundary from './error-boundary'

const renderComponent: typeof rc = ({
  name,
  module,
  url,
  target,
  props,
  type = 'react',
  renderNode,
  onMounted,
}) => {
  const C = (type === 'vue3' ? createVueComponent : createReactComponent)({
    name,
    module,
    url,
    onMounted,
  })

  try {
    const root = createRoot(target as Element)
    const { $silent, $ref, ...rest } = props || {}
    const nextProps: any = { $componentProps: rest, $silent, $ref }
    const node = (
      <ErrorBoundary name={name} module={module} url={url}>
        <C {...nextProps} />
      </ErrorBoundary>
    )

    root.render(renderNode ? renderNode(node) : node)

    return () => new Promise<void>((resolve) => {
      setTimeout(() => {
        root.unmount()
        resolve()
      })
    })
  } catch (e) {
    onError(new VariousError({
      name,
      module,
      type: 'SCRIPT_ERROR',
      originalError: e as Error,
    }))
    return () => Promise.resolve()
  }
}

export default renderComponent
