import React from 'react'
import { Alert, Button } from 'antd'

export default function ({ reload, type, message }) {
  return (
    <>
      <Alert
        message="Error"
        description={`[${type}]:${message || '组件错误'}`}
        type="error"
      />
      {
        reload && <Button onClick={reload}>刷新</Button>
      }
    </>
  )
}
