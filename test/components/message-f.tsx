import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Store, MessageInvoker } from '@variousjs/various'

type S = { component: string, event: string, value: any }

const { createStore, connect, emit } = new Store<S>()

createStore({ component: '', event: '', value: undefined })

class F extends Component<ComponentProps & S> {
  static $onMessage: MessageInvoker = (message) => {
    emit(message)
  }

  onMsg = () => {
    this.props.$postMessage('c-event', { to: 'c' })
  }

  render() {
    const { component, event, value } = this.props

    return (
      <Descriptions column={2} size="small" title="F" layout="vertical" bordered>
        <Descriptions.Item label="Component">
          <span data-name="i18n-title">{component || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Event">
          <span data-name="i18n-title">{event || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Value">
          <span data-name="i18n-title">{value || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button type="primary" size="small" onClick={this.onMsg}>Post Message</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('component', 'event', 'value')(F)
