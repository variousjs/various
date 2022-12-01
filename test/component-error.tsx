import React, { FC } from 'react'
import { createComponent } from '@variousjs/various'

export const Container: FC = () => {
  const X = createComponent('f')
  return (<X />)
}
