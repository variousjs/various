import React from 'react'
import componentCreator from './core'
import connector from '../connector'

export default function (name: string) {
  const existComponent = connector.getComponent(name)
  if (existComponent) {
    return existComponent
  }

  const C = componentCreator(name)
  const component = (props: any) => (<C {...props} />)
  connector.setComponent(name, component)
  return component
}
