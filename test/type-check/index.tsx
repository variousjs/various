import React, { Component } from 'react'
import {
  VariousFC, VariousProps, PublicAction, OnMessage, I18n,
  DefineActions, DefineMessages, createPostMessage, DefineAppActions,
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
  // app: DefineAppActions<{
  //     update: { payload: number, result: void },
  // }>,
  app: DefineAppActions,
  ca: DefineActions<{
    update: { payload: number, result: void },
    next?: { payload: string, result: number },
  }>,
  cb: DefineActions<{
    update: { payload: string, result: string },
  }>,
}

const typedPostMessage = createPostMessage<GlobalMessages>('typed')

export const A: VariousFC<
  SelfProps,
  GlobalStoreProps,
  GlobalActions['ca'],
  GlobalMessages,
  GlobalActions
> = (props) => {
  const {
    $store, a, $postMessage, $dispatch,
  } = props
  const { b } = $store

  type _a = Expect<Equal<typeof a, string>>
  type _b = Expect<Equal<typeof b, number>>

  $postMessage({ event: 'greet', payload: b })
  // @ts-expect-error payload for event 'greet' must be number
  $postMessage({ event: 'greet', payload: a })
  typedPostMessage({ event: 'next', payload: a })

  $dispatch({ target: 'ca', action: 'update', payload: 1 })
  // @ts-expect-error payload for action 'update' must be number
  $dispatch({ target: 'ca', action: 'update', payload: 'x' })

  $dispatch({ target: 'app', action: 'getLocale' }).then((res) => {
    type _r = Expect<Equal<typeof res, string>>
    window.console.log(res)
  })

  return null
}

A.$onMessage = ({ event, payload, trigger }) => {
  type _e = Expect<Equal<typeof event, 'greet' | 'next'>>
  type _p = Expect<Equal<typeof payload, number | string>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(event, payload, trigger)
}
A.$i18n = () => ({ resources: {} })

A.update = ({ payload, trigger }) => {
  type _p = Expect<Equal<typeof payload, number | undefined>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(payload, trigger)
}

export class B extends Component<VariousProps<
  SelfProps,
  GlobalStoreProps,
  GlobalMessages,
  GlobalActions
>> {
  static update: PublicAction<SelfActions['update']> = ({ payload, trigger }) => {
    type _p = Expect<Equal<typeof payload, number>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(payload, trigger)
  }

  static $onMessage: OnMessage<GlobalMessages> = ({ event, payload, trigger }) => {
    type _e = Expect<Equal<typeof event, 'greet' | 'next'>>
    type _p = Expect<Equal<typeof payload, number | string>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(event, payload, trigger)
  }

  static $i18n: I18n = () => ({ resources: {} })

  render() {
    const {
      $store, a, $postMessage, $dispatch,
    } = this.props
    const { b } = $store

    type _a = Expect<Equal<typeof a, string>>
    type _b = Expect<Equal<typeof b, number>>

    $postMessage({ event: 'greet', payload: b })
    $postMessage({ event: 'next', payload: a })

    $dispatch({ target: 'ca', action: 'next' }).then((res) => {
      type _r = Expect<Equal<typeof res, number>>
      window.console.log(res)
    })

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
  const {
    $store, a, $postMessage, $dispatch,
  } = props
  const { b } = $store

  type _a = Expect<Equal<typeof a, any>>
  type _b = Expect<Equal<typeof b, any>>
  type _pe = Expect<Equal<Parameters<typeof $postMessage>[0]['event'], string>>
  type _dt = Expect<Equal<Parameters<typeof $dispatch>[0]['target'], string>>
  type _da = Expect<Equal<Parameters<typeof $dispatch>[0]['action'], string>>

  $postMessage({ event: 'greet', payload: b })
  unTypedPostMessage({ event: 'next', payload: a })

  $dispatch({ target: 'dispatch', action: 'update', payload: 1 }).then((res) => {
    type _r = Expect<Equal<typeof res, any>>
    window.console.log(res)
  })

  return null
}) as VariousFC

C.$onMessage = ({ event, payload, trigger }) => {
  type _e = Expect<Equal<typeof event, string>>
  type _p = Expect<Equal<typeof payload, any>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(event, payload, trigger)
}
C.$i18n = () => ({ resources: {} })

C.update = ({ payload, trigger }) => {
  type _p = Expect<Equal<typeof payload, any>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(payload, trigger)
}

export const C1: VariousFC<{}, {}, {}> = () => <div>1</div>

export class D extends Component<VariousProps> {
  static update: PublicAction = ({ payload, trigger }) => {
    type _p = Expect<Equal<typeof payload, any>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(payload, trigger)
  }

  static $onMessage: OnMessage = ({ event, payload, trigger }) => {
    type _e = Expect<Equal<typeof event, string>>
    type _p = Expect<Equal<typeof payload, any>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(event, payload, trigger)
  }

  static $i18n: I18n = () => ({ resources: {} })

  render() {
    const { $store, a, $postMessage } = this.props
    const { b } = $store

    type _a = Expect<Equal<typeof a, any>>
    type _b = Expect<Equal<typeof b, any>>

    $postMessage({ event: 'greet', payload: b })
    $postMessage({ event: 'next', payload: a })

    return null
  }
}
