import React from 'react'
import { Alert } from 'antd'

export default function ({ error }) {
  return (
    <Alert
      message="Error"
      description={error}
      type="error"
    />
  )
}
