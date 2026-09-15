import React from 'react'
import type {
  CreateComponent,
  ComponentDefaultProps,
} from '../public/types'
import createReactComponent from './react-component'
import createVueComponent from './vue-component'
import ErrorBoundary from './error-boundary'
import { CreateComponentProps } from '../types'

const createComponent: CreateComponent = (config, storeKeys) => {
  const {
    module,
    url,
    type = 'react',
  } = config

  const C = (type === 'vue3' ? createVueComponent : createReactComponent)({
    module,
    url,
    watchKeys: storeKeys as string[],
  })

  const component = (props: ComponentDefaultProps) => {
    const { $silent, $ref, ...rest } = props || {}
    const nextProps = {
      $componentProps: rest, $silent, $ref,
    } as ComponentDefaultProps & CreateComponentProps<any>
    return (
      <ErrorBoundary module={module} url={url}>
        <C {...nextProps} />
      </ErrorBoundary>
    )
  }

  component.displayName = 'various-creator'
  return component
}

export default createComponent
