import React from 'react'
import { Spin } from 'antd'

export default function (props) {
  console.log(props)
  return (
    <Spin className="component-loading" />
  )
}
