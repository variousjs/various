import React from 'react'
import { Descriptions } from 'antd'
import { ComponentProps } from '@variousjs/various'
import { Store } from '../types'

export default (props: ComponentProps<Store>) => (
  <div className="component">
    <Descriptions size="small" title="Global" layout="vertical" bordered>
      <Descriptions.Item label="Name">
        <span data-name="global-name">{props.$store.name}</span>
      </Descriptions.Item>
    </Descriptions>
  </div>
)
