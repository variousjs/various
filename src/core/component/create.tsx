import React from 'react'
import { createComponent as cc } from '@variousjs/various'
import componentCreator from './core'
import connector from '../connector'

const createComponent: typeof cc = (name, storeKeys) => {
  const existComponent = connector.getComponent(name)
  if (existComponent) {
    return existComponent
  }

  const C = componentCreator(name, storeKeys as string[])
  const component = (props: Record<string, any>) => {
    const { $silent, ...rest } = props || {}
    const nextProps = { $componentProps: rest, $silent }
    return (<C {...nextProps} />)
  }
  component.displayName = 'various-creator'
  connector.setComponent(name, component)
  return component
}

export default createComponent
