import React from 'react'
import { Descriptions } from 'antd'
import {
  ComponentNode,
  Nycticorax,
  OnMessage,
} from '@variousjs/various'

const { createStore, connect, emit } = new Nycticorax<Parameters<OnMessage>[0]>()

createStore({ trigger: { name: '', module: '' }, event: '', value: undefined })

const G = ((props) => (
  <Descriptions column={2} size="small" title="GG" layout="vertical" bordered>
    <Descriptions.Item label="Component">
      <span data-gg="component">{Object.values(props.trigger).join('.') || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Event">
      <span data-gg="event">{props.event || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item span={2} label="Value">
      <span data-gg="value">{props.value?.to || '-'}</span>
    </Descriptions.Item>
  </Descriptions>
)) as ComponentNode<{}, Parameters<OnMessage>[0]>

G.$onMessage = (message) => {
  emit(message)
}

export default connect('trigger', 'event', 'value')(G)
