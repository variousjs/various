import React, { FC } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps } from '@variousjs/various'

const L: FC<ComponentProps> = (props) => {
  const { $logger, $dispatch } = props

  return (
    <Descriptions column={2} size="small" title="Log" layout="vertical" bordered>
      <Descriptions.Item label="Log">
        <Button
          data-log="info"
          type="primary"
          size="small"
          onClick={() => {
            $logger.info('info')
          }}
        >
          info
        </Button>
        <Button
          data-log="warn"
          type="primary"
          size="small"
          onClick={() => {
            $logger.warn('warn')
          }}
        >
          warn
        </Button>
        <Button
          data-log="error"
          type="primary"
          size="small"
          onClick={() => {
            $logger.error('error', 'E-T')
          }}
        >
          error
        </Button>
        <Button
          data-log="error2"
          type="primary"
          size="small"
          onClick={() => {
            $logger.error(new Error('error not type'))
            $dispatch({ name: 'bbb', action: 'ccc' })
          }}
        >
          error2
        </Button>
      </Descriptions.Item>
    </Descriptions>
  )
}

export default L
