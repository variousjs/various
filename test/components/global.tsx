import React from 'react'
import { Descriptions } from 'antd'
import { ComponentProps, getEnv, getConfig } from '@variousjs/various'
import { Store, Config } from '../types'

export default (props: ComponentProps<Store>) => {
  const config = getConfig() as Config

  return (
    <div className="component">
      <Descriptions column={2} size="small" layout="vertical" bordered>
        <Descriptions.Item label="Store">
          <span data-name="global-name">{props.$store.name}</span>
        </Descriptions.Item>

        <Descriptions.Item label="ENV">
          <span data-name="global-name">{getEnv()}</span>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Config">
          <div data-name="global-name">
            {config.pages.map((t) => t.component).join(', ')}
          </div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
