import React from 'react'
import { Descriptions, DatePicker } from 'antd'
import moment from 'moment'
import { ComponentProps, getEnv, getConfig } from '@variousjs/various'
import { getName } from 'helper'
import { Store, Config } from '../types'

export default (props: ComponentProps<Store> & { locale: string }) => {
  const config = getConfig<Config>()

  return (
    <div style={{ width: 610 }} className="component">
      <Descriptions column={3} size="small" layout="vertical" bordered>
        <Descriptions.Item label="Store">
          <span data-store="name">{props.$store.name}</span>
        </Descriptions.Item>

        <Descriptions.Item label="ENV">
          <span data-env="env">{getEnv()}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Name">
          <span data-helper="name">{getName()}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Moment I18n">
          <DatePicker
            id="date-picker"
            defaultValue={moment('2022-02-15')}
            format="MMMM Do YYYY"
          />
        </Descriptions.Item>

        <Descriptions.Item span={1} label="Props">
          <div data-config="props">
            {props.locale}
          </div>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Config">
          <div data-config="pages">
            {config.pages.map((t) => t.component).join(', ')}
          </div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
