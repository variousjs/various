import React, { FC } from 'react'
import { ContainerProps } from '@variousjs/various'

export const Container: FC<ContainerProps> = ({ $component }) => {
  const X = $component('f')
  return (<X />)
}
