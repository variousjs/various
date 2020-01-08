import React from 'react'
import { Alert, Button } from 'antd'

export default function ({ error, reload }) {
  return (
    <>
      <Alert
        message="Error"
        description={error}
        type="error"
      />
      <Button onClick={reload}>刷新</Button>
    </>
  )
}
