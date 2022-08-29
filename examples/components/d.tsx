import React, { FC } from 'react'
import { Button } from 'antd'
import {
  ComponentProps, Store, MessageInvoker,
} from '@variousjs/various'

type S = { message: string }

const { createStore, connect, emit } = new Store<S>()

createStore({ message: '' })

const D: FC<ComponentProps & S> & { $onMessage: MessageInvoker } = (props) => (
  <>
    <p id="d-m">Message: {props.message}</p>
    <Button
      id="d-message"
      onClick={() => {
        props.$postMessage('xyz')
      }}
    >
      $postMessage
    </Button>
  </>
)

D.$onMessage = (message) => {
  emit({ message: `${message.type}|${message.value || '-'}` })
}

export const dd = connect('message')(D)
