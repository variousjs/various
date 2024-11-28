import React, { ComponentType } from 'react'
import { createComponent as cc } from '@variousjs/various'
import createReactComponent from './component'
import connector from './connector'

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

  component = (props: any) => {
    const { $silent, ...rest } = props || {}
    const nextProps = { $componentProps: rest, $silent }
    return (<C {...nextProps} />)
  }

  component.displayName = 'various-creator'
  return component
}

export default createComponent
