import React, { Component } from 'react'
import { Button } from 'antd'
import {
  ComponentProps, Store, Connect, OnMessage,
} from '@variousjs/various'

type S = { message: string }
type CT = Connect<S>

const { createStore, connect, emit } = new Store<S>()

createStore({ message: '' })

class C extends Component<ComponentProps & CT> {
  static $onMessage: OnMessage = (message) => {
    emit({ message: `${message.type}|${message.name}` })
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
