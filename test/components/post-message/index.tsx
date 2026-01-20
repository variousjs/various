import React, { Component } from 'react'
import {
  ComponentProps,
  ComponentNode,
  Nycticorax,
  createPostMessage,
} from '@variousjs/various'

interface NS {
  event?: string,
  value?: any,
  trigger?: string,
}

const { createStore, emit, connect } = new Nycticorax<NS>()
createStore({})

interface Messages {
  'B-greet': number,
}

export const A: ComponentNode<NS, {}, {}, Messages> = (props) => {
  const { event, value, trigger } = props

  return (
    <>
      <h3>onMessage</h3>
      <div className="value">
        <p>Trigger: {trigger}</p>
        <p>Event: {event}</p>
        <p>Value: {value}</p>
      </div>
    </>
  )
}

A.$onMessage = ({ event, value, trigger }) => {
  emit({
    event,
    value,
    trigger: [trigger.name, trigger.module].filter(Boolean).join('.'),
  })
}

export const MessageA = connect('event', 'trigger', 'value')(A)

export class MessageB extends Component<ComponentProps<{}, {}, Messages>> {
  post = () => {
    this.props.$postMessage('B-greet', +new Date())
  }

  createPost = () => {
    const post = createPostMessage({ name: 'custom' })
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
