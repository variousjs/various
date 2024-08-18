import React, { FC } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Nycticorax, OnMessage } from '@variousjs/various'
import { sendAbc } from 'helper'

type S = Parameters<OnMessage>[0]

const { createStore, connect, emit } = new Nycticorax<S>()

createStore({ trigger: { name: '', module: '' }, event: '', value: undefined })

const G: FC<ComponentProps & S> & { $onMessage: OnMessage } = (props) => (
  <Descriptions column={2} size="small" title="G" layout="vertical" bordered>
    <Descriptions.Item label="Component">
      <span data-g="component">{Object.values(props.trigger).join('.') || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Event">
      <span data-g="event">{props.event || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item span={2} label="Value">
      <span data-g="value">{props.value?.to || '-'}</span>
    </Descriptions.Item>

    <Descriptions.Item label="Actions">
      <Button data-g="action" type="primary" size="small" onClick={() => props.$postMessage('xyz', undefined)}>
        Send
      </Button>
      <Button data-g="action-abc" type="primary" size="small" onClick={sendAbc}>
        SendABC
      </Button>
    </Descriptions.Item>
  </Descriptions>
)

G.$onMessage = (message) => {
  emit(message)
}

export default connect('trigger', 'event', 'value')(G)
