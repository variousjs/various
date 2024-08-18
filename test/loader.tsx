import React from 'react'
import { Spin } from 'antd'
import { LoaderNodeProps } from '@variousjs/various'
import { Store } from './types'

export default function (props: LoaderNodeProps<Store>) {
  return (
    <Spin className={props.$store.loader} />
  )
}
