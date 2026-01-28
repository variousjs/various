/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from 'react'
import {
  ComponentNode, ComponentProps, PublicAction, OnMessage, I18n,
} from '@variousjs/various'

interface SelfProps { a: string }
interface GlobalStoreProps { b: number }
type SelfActions = { update: { payload: number, result: void } }
interface GlobalMessages { greet: number, next: string }

export const A: ComponentNode<
  SelfProps,
  GlobalStoreProps,
  SelfActions,
  GlobalMessages
> = (props) => {
  // a: string / b: number
  // @ts-ignore
  const { $store, a, $postMessage } = props
  const { b } = $store

  $postMessage('greet', b) // 'greet' / number
  $postMessage('next', 0)

  return null
}

// event: 'greet' | 'next' / payload: number / trigger: string
// @ts-ignore
A.$onMessage = ({ event, payload, trigger }) => {}
A.$i18n = () => ({ lngStoreKey: 'locale', resources: {} })

// payload: number / trigger: string
// @ts-ignore
A.update = (payload, trigger) => {}

export class B extends Component<ComponentProps<
  SelfProps,
  GlobalStoreProps,
  GlobalMessages
>> {
  // payload: number / trigger: string
  // @ts-ignore
  static update: PublicAction<SelfActions['update']> = (payload, trigger) => {}

  // event: 'greet' | 'next' / payload: number / trigger: string
  // @ts-ignore
  static $onMessage: OnMessage<GlobalMessages> = ({ event, payload, trigger }) => {}

  static $i18n: I18n = () => ({ lngStoreKey: 'locale', resources: {} })

  render() {
    // a: string / b: number
    // @ts-ignore
    const { $store, a, $postMessage } = this.props
    const { b } = $store

    $postMessage('greet', b) // 'greet' / number
    $postMessage('next', 0)

    return null
  }
}

/*
  --------------------------------------
  default types
  --------------------------------------
*/

export const C = ((props) => {
  // a: any / b: any
  // @ts-ignore
  const { $store, a, $postMessage } = props
  const { b } = $store

  $postMessage('greet', b) // string / any
  $postMessage('next', 0)

  return null
}) as ComponentNode

// event: string / payload: any / trigger: string
// @ts-ignore ts(6198)
C.$onMessage = ({ event, payload, trigger }) => {}
C.$i18n = () => ({ lngStoreKey: 'locale', resources: {} })

// payload: any / trigger: string
// @ts-ignore ts(6198)
C.update = (payload, trigger) => {}

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

    $postMessage('greet', b) // string / any
    $postMessage('next', 0)

    return null
  }
}
