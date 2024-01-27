import React from 'react'
import { Descriptions } from 'antd'
import { ComponentNode, Nycticorax } from '@variousjs/various'

type S = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Nycticorax<S>()

createStore({ component: '', event: '', value: undefined })

const G = ((props) => (
  <Descriptions column={2} size="small" title="GG" layout="vertical" bordered>
    <Descriptions.Item label="Component">
      <span data-gg="component">{props.component || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Event">
      <span data-gg="event">{props.event || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item span={2} label="Value">
      <span data-gg="value">{props.value?.to || '-'}</span>
    </Descriptions.Item>
  </Descriptions>
)) as ComponentNode<{}, S>

G.$onMessage = (message) => {
  emit(message)
}

export default connect('component', 'event', 'value')(G)
