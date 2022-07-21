import React, { FC } from 'react'
import { Alert, Button } from 'antd'
import { ErrorProps } from '@variousjs/various'

const errorComponent: FC<ErrorProps> = ({ $reload, $type, $message }) => (
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

export default errorComponent
