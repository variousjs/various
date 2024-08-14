import React from 'react'
import { createComponent as cc } from '@variousjs/various'
import createReactComponent from './component'
import connector from './connector'

const createComponent: typeof cc<any, any> = (config, storeKeys) => {
  const { name, module, url } = config

  const existComponent = connector.getComponent({ name, module })
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
  connector.setComponent({ name, module }, component)
  return component
}

export default createComponent
