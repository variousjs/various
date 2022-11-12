import React, { Component } from 'react'
import { Button } from 'antd'
import {
  ComponentProps, Store, MessageInvoker,
} from '@variousjs/various'

type S = { message: string }

const { createStore, connect, emit } = new Store<S>()

createStore({ message: '' })

class C extends Component<ComponentProps & S> {
  static $onMessage: MessageInvoker = (message) => {
    emit({ message: `${message.component}|${message.event}` })
  }

  onMsg = () => {
    this.props.$postMessage('C', 'cm')
  }

  render() {
    const { message } = this.props

    return (
      <>
        <p id="c-m">Message: {message}</p>
        <Button id="c-message" onClick={this.onMsg}>$postMessage</Button>
      </>
    )
  }
}

export default connect('message')(C)
