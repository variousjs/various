/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component } from 'react'
import {
  ComponentNode, ComponentProps, PublicAction, OnMessage, I18n,
  DefineActions, DefineMessages, createPostMessage,
} from '@variousjs/various'

interface SelfProps { a: string }
interface GlobalStoreProps { b: number }
type GlobalMessages = DefineMessages<{
  greet: { payload: number },
  next: { payload: string },
}>
type SelfActions = DefineActions<{
  update: { payload: number, result: void },
}>
type GlobalActions = {
  ca: DefineActions<{
    update: { payload: number, result: void },
    next: { payload: string, result: number },
  }>,
}

const typedPostMessage = createPostMessage<GlobalMessages>('typed')

export const A: ComponentNode<
  SelfProps,
  GlobalStoreProps,
  SelfActions,
  GlobalMessages,
  GlobalActions
> = (props) => {
  // a: string / b: number
  const {
    // @ts-ignore
    $store, a, $postMessage, $dispatch,
  } = props
  const { b } = $store

  $postMessage({ event: 'greet', payload: b }) // 'greet' / number
  typedPostMessage({ event: 'next', payload: 'next' }) // 'next' / string

  $dispatch({ target: 'ca', action: 'update', payload: 1 }) // 'ca' / 'update' / number

  return null
}

// event: 'greet' | 'next' / payload: number | string / trigger: string
// @ts-ignore
A.$onMessage = ({ event, payload, trigger }) => {}
A.$i18n = () => ({ lngStoreKey: 'locale', resources: {} })

// payload: number / trigger: string
// @ts-ignore
A.update = (payload, trigger) => {}

export class B extends Component<ComponentProps<
  SelfProps,
  GlobalStoreProps,
  GlobalMessages,
  GlobalActions
>> {
  // payload: number / trigger: string
  // @ts-ignore
  static update: PublicAction<SelfActions['update']> = (payload, trigger) => {}

  // event: 'greet' | 'next' / payload: number | string / trigger: string
  // @ts-ignore
  static $onMessage: OnMessage<GlobalMessages> = ({ event, payload, trigger }) => {}

  static $i18n: I18n = () => ({ lngStoreKey: 'locale', resources: {} })

  render() {
    // a: string / b: number
    const {
      // @ts-ignore
      $store, a, $postMessage, $dispatch,
    } = this.props
    const { b } = $store

    $postMessage({ event: 'greet', payload: b }) // 'greet' / number
    $postMessage({ event: 'next', payload: '' }) // 'next' / string

    // res: number
    // @ts-ignore
    $dispatch({ target: 'ca', action: 'next' }).then((res) => {})

    return null
  }
}

/*
  --------------------------------------
  default types
  --------------------------------------
*/

const unTypedPostMessage = createPostMessage('unTyped')

export const C = ((props) => {
  // a: any / b: any
  // @ts-ignore
  const { $store, a, $postMessage } = props
  const { b } = $store

  $postMessage({ event: 'greet', payload: b }) // string / any
  unTypedPostMessage({ event: 'next', payload: 0 }) // string / any

  return null
}) as ComponentNode

// event: string / payload: any / trigger: string
// @ts-ignore
C.$onMessage = ({ event, payload, trigger }) => {}
C.$i18n = () => ({ lngStoreKey: 'locale', resources: {} })

// payload: any / trigger: string
// @ts-ignore
C.update = (payload, trigger) => {}

// @ts-ignore
export const C1: ComponentNode<{}, {}, {}> = (props) => <div>1</div>

export class D extends Component<ComponentProps> {
  // payload: any / trigger: string
  // @ts-ignore
  static update: PublicAction = (payload, trigger) => {}

  // event: string / payload: any / trigger: string
  // @ts-ignore
  static $onMessage: OnMessage = ({ event, payload, trigger }) => {}

  static $i18n: I18n = () => ({ lngStoreKey: 'locale', resources: {} })

  render() {
    // a: any / b: any
    // @ts-ignore
    const { $store, a, $postMessage } = this.props
    const { b } = $store

    $postMessage({ event: 'greet', payload: b }) // string / any
    $postMessage({ event: 'next', payload: 0 }) // string / any

    return null
  }
}
