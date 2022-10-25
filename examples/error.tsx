import React, { FC } from 'react'
import { Alert, Button } from 'antd'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = (props) => {
  console.log(props)
  const { $reload, $type, $message } = props
  return (
    <>
      <Alert
        message="Error"
        description={`[${$type}]:${$message || '组件错误'}`}
        type="error"
      />
      {
        $reload && <Button onClick={$reload}>刷新</Button>
      }
    </>
  )
}

export default errorComponent
