import React from 'react'
import componentCreator from './core'
import connector from '../connector'

export default function<T extends object = {}> (name: string, storeKeys?: (keyof T)[]) {
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
