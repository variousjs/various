import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Nycticorax, OnMessage } from '@variousjs/various'

type S = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Nycticorax<S>()

createStore({ component: '', event: '', value: undefined })

class F extends Component<ComponentProps & S> {
  static $onMessage: OnMessage = (message) => {
    emit(message)
  }

  onMsg = () => {
    this.props.$postMessage('c-event', { to: 'c' })
  }

  onBlock = () => {
    this.props.$postMessage('block', undefined)
  }

  render() {
    const { component, event } = this.props

    return (
      <Descriptions column={2} size="small" title="F" layout="vertical" bordered>
        <Descriptions.Item label="Component">
          <span data-f="component">{component || '-'}</span>
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

export default connect('component', 'event', 'value')(F)
