import React, { FC } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Store, MessageInvoker } from '@variousjs/various'

type S = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Store<S>()

createStore({ component: '', event: '', value: undefined })

const G: FC<ComponentProps & S> & { $onMessage: MessageInvoker } = (props) => (
  <Descriptions column={2} size="small" title="G" layout="vertical" bordered>
    <Descriptions.Item label="Component">
      <span data-name="i18n-title">{props.component || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Event">
      <span data-name="i18n-title">{props.event || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item span={2} label="Value">
      <span data-name="i18n-title">{props.value?.to || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Actions">
      <Button type="primary" size="small" onClick={() => props.$postMessage('xyz')}>
        Post Message
      </Button>
    </Descriptions.Item>
  </Descriptions>
)

G.$onMessage = (message) => {
  emit(message)
}

export default connect('component', 'event', 'value')(G)
