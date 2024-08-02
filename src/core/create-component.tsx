import React from 'react'
import { createComponent as cc } from '@variousjs/various'
import createReactComponent from './component'
import connector from './connector'
import { getNameWithModule } from './helper'

const createComponent: typeof cc<any, any> = (config, storeKeys) => {
  const { name, module, url } = config
  const nameWithModule = getNameWithModule(name, module)

  const existComponent = connector.getComponent(nameWithModule)
  if (existComponent) {
    return existComponent
  }

  const C = createReactComponent({
    name,
    module,
    url,
    watchKeys: storeKeys as string[],
  })

  const component = (props: any) => {
    const { $silent, ...rest } = props || {}
    const nextProps = { $componentProps: rest, $silent }
    return (<C {...nextProps} />)
  }

  component.displayName = 'various-creator'
  connector.setComponent(nameWithModule, component)
  return component
}

export default createComponent
