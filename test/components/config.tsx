import React, { useRef } from 'react'
import { Descriptions, DatePicker, Button } from 'antd'
import moment from 'moment'
import {
  ComponentProps, getConfig, createComponent, version,
} from '@variousjs/various'
import { getName } from 'helper'
import { Store, Config } from '../types'

const Ref = createComponent({ name: 'create-j', module: 'refNode' })

export default (props: ComponentProps<Store> & { locale: string }) => {
  const config = getConfig<Config>()
  const inRef = useRef<{ txt(): void }>(null)

  return (
    <div style={{ width: 610 }} className="component">
      <Descriptions column={3} size="small" layout="vertical" bordered>
        <Descriptions.Item label="Store">
          <span data-store="name">{props.$store.name}</span>
        </Descriptions.Item>

        <Descriptions.Item label="VERSION">
          <span data-version="version">{version}</span>
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
          <div style={{ height: 4 }} />
          <Ref $ref={inRef} />
        </Descriptions.Item>

        <Descriptions.Item span={1} label="Props">
          <div data-config="props">
            {props.locale}
          </div>
          <Button
            data-refbutton="ref"
            style={{ marginTop: 4 }}
            size="small"
            onClick={() => inRef.current?.txt()}
          >
            Click Ref
          </Button>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Config">
          <div data-config="pages">
            {config.pages.map((t) => t.component).filter(Boolean).join(', ')}
          </div>
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}
