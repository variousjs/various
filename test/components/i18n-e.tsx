import React, { FC } from 'react'
import { Descriptions } from 'antd'
import { ComponentProps } from '@variousjs/various'

const T: FC<ComponentProps> = (props) => {
  const { $t } = props

  return (
    <Descriptions column={2} size="small" title="E" layout="vertical" bordered>
      <Descriptions.Item label="Title">
        <span data-e="title">
          {/* @ts-ignore */}
          {$t('title', [])}
        </span>
      </Descriptions.Item>
    </Descriptions>
  )
}

export default T
