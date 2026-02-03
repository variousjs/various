import React, { Component } from 'react'
import {
  VariousProps,
  VariousFC,
  Nycticorax,
  createPostMessage,
} from '@variousjs/various'

interface NS {
  event?: string,
  payload?: any,
  trigger?: string,
}

const { createStore, emit, connect } = new Nycticorax<NS>()
createStore({})

type Messages = {
  'B-greet': { payload: number },
}

export const A: VariousFC<NS, {}, {}, Messages> = (props) => {
  const { event, payload, trigger } = props

  return (
    <>
      <h3>onMessage</h3>
      <div className="value">
        <p>Trigger: {trigger}</p>
        <p>Event: {event}</p>
        <p>Payload: {payload}</p>
      </div>
    </>
  )
}

A.$onMessage = ({ event, payload, trigger }) => {
  emit({
    event,
    payload,
    trigger,
  })
}

export const MessageA = connect('event', 'trigger', 'payload')(A)

export class MessageB extends Component<VariousProps<{}, {}, Messages>> {
  post = () => {
    this.props.$postMessage({ event: 'B-greet', payload: +new Date() })
  }

  createPost = () => {
    const post = createPostMessage('custom')
    post({ event: 'custom-greet', payload: +new Date() })
  }

  render() {
    return (
      <>
        <h3>postMessage</h3>
        <div className="value">
          <button onClick={() => this.post()}>React Post</button>
          <button onClick={() => this.createPost()}>from createPostMessage</button>
        </div>
      </>
    )
  }
}
