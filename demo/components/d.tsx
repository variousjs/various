import React, { FC } from 'react'
import {
  ComponentProps, Connect, Store, OnMessage,
} from '@variousjs/various'

type S = { message: string }
type CT = Connect<S>

const { createStore, connect, dispatch } = new Store<S>()

createStore({ message: '' })

const D: FC<ComponentProps & CT> & { $onMessage: OnMessage } = (props) => (
  <p>Message: {props.message}</p>
)

D.$onMessage = (message) => {
  dispatch({ message: `${message.type}|${message.value || '-'}` })
}

export default connect('message')(D)
