import React from 'react'
import componentCreator from './core'

export const createComponent = (name: string) => {
  const C = componentCreator(name)
  return (props: any) => (<C {...props} />)
}
