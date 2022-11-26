import React, { FC } from 'react'
import { Descriptions } from 'antd'
import { ComponentProps, Store, MessageInvoker } from '@variousjs/various'

type S = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Store<S>()

createStore({ component: '', event: '', value: undefined })

const G: FC<ComponentProps & S> & { $onMessage: MessageInvoker } = (props) => (
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
)

G.$onMessage = (message) => {
  emit(message)
}

export default connect('component', 'event', 'value')(G)
