import React, { ComponentType } from 'react'
import { createComponent as cc, ComponentDefaultProps } from '@variousjs/various'
import createReactComponent from './react-component'
import connector from './connector'
import { CreateComponentProps } from './types'

const createComponent: typeof cc<any, any> = (config, storeKeys) => {
  const { name, module, url } = config

  const existComponent = connector.getComponent({ name, module })
  if (existComponent) {
    return existComponent
  }

  let component: ComponentType<any>

  const C = createReactComponent({
    name,
    module,
    url,
    watchKeys: storeKeys as string[],
    onMounted() {
      connector.setComponent({ name, module }, component)
    },
  })

  component = (props: ComponentDefaultProps) => {
    const { $silent, $ref, ...rest } = props || {}
    const nextProps = {
      $componentProps: rest, $silent, $ref,
    } as ComponentDefaultProps & CreateComponentProps<any>
    return (<C {...nextProps} />)
  }

  component.displayName = 'various-component-creator'
  return component
}

export default createComponent
