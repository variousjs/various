import React from 'react'
import componentCreator from './core'
import connector from '../connector'
import { isPropsKeyDuplicate } from './helper'
import { onError } from '../helper'

export default function (name: string) {
  const existComponent = connector.getComponent(name)
  if (existComponent) {
    return existComponent
  }

  const C = componentCreator(name)
  const component = (props: any) => {
    if (isPropsKeyDuplicate(props)) {
      onError({ type: 'component', name, message: 'props key duplicate with store' })
    }
    return (<C {...props} />)
  }
  connector.setComponent(name, component)
  return component
}
