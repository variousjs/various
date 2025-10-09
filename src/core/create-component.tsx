import React from 'react'
import { createComponent as cc, ComponentDefaultProps } from '@variousjs/various'
import createReactComponent from './react-component'
import createVueComponent from './vue-component'
import { CreateComponentProps } from './types'

const createComponent: typeof cc<any, any> = (config, storeKeys) => {
  const {
    name,
    module,
    url,
    type = 'react',
  } = config

  const C = (type === 'vue3' ? createVueComponent : createReactComponent)({
    name,
    module,
    url,
    watchKeys: storeKeys as string[],
  })

  const component = (props: ComponentDefaultProps) => {
    const { $silent, $ref, ...rest } = props || {}
    const nextProps = {
      $componentProps: rest, $silent, $ref,
    } as ComponentDefaultProps & CreateComponentProps<any>
    return (<C {...nextProps} />)
  }

  component.displayName = 'various-creator'
  return component
}

export default createComponent
