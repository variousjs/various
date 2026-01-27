import React, { Component } from 'react'
import {
  ComponentProps,
  ComponentNode,
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

interface Messages {
  'B-greet': number,
}

export const A: ComponentNode<NS, {}, {}, Messages> = (props) => {
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

export class MessageB extends Component<ComponentProps<{}, {}, Messages>> {
  post = () => {
    this.props.$postMessage('B-greet', +new Date())
  }

  createPost = () => {
    const post = createPostMessage('custom')
    post('custom-greet', +new Date())
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
