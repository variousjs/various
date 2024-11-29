import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Nycticorax, OnMessage } from '@variousjs/various'

type S = Parameters<OnMessage>[0]

const { createStore, connect, emit } = new Nycticorax<S>()

createStore({ trigger: { name: '', module: '' }, event: '', value: undefined })

class F extends Component<ComponentProps & S> {
  static $onMessage: OnMessage = (message) => {
    emit(message)
  }

  onMsg = () => {
    this.props.$postMessage('c-event', { to: 'c' })
  }

  onBlock = () => {
    this.props.$postMessage('block')
  }

  render() {
    const { trigger, event } = this.props

    return (
      <Descriptions column={2} size="small" title="F" layout="vertical" bordered>
        <Descriptions.Item label="Component">
          <span data-f="component">{Object.values(trigger).join('.') || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Event">
          <span data-f="event">{event || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button data-f="action" type="primary" size="small" onClick={this.onMsg}>Send</Button>
          <Button data-f="block" type="primary" size="small" onClick={this.onBlock}>Block</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('trigger', 'event', 'value')(F)
