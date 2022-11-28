import React from 'react'
import { Spin } from 'antd'
import { LoaderProps } from '@variousjs/various'
import { Store } from './types'

export default function (props: LoaderProps<Store>) {
  return (
    <Spin className={props.$store.loader} />
  )
}
