import React from 'react'
import { Spin } from 'antd'
import { LoaderProps } from '@variousjs/various'

export default function (props: LoaderProps) {
  console.log(props)
  return (
    <Spin className="component-loading" />
  )
}
