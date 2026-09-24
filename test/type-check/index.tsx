import React, { Component } from 'react'
import {
  VariousFC, VariousProps, PublicAction, OnMessage, I18n,
  createPostMessage, VariousContract,
} from '@variousjs/various'

interface SelfProps { a: string }

/*
  This program is augmented by ./various.d.ts: every builtin type defaults to
  the ambient contract, so components pass only their own props plus (for FC
  statics inference) the target key of their own action slice.
*/

// createPostMessage picks up the ambient messages contract
const typedPostMessage = createPostMessage('typed')

export const A: VariousFC<
  SelfProps,
  'ca'
> = (props) => {
  const {
    $store, a, $postMessage, $dispatch,
  } = props
  const { b } = $store

  type _a = Expect<Equal<typeof a, string>>
  type _b = Expect<Equal<typeof b, number>>

  // Negative probes: one representative per API constraint. The payload rules
  // belong to the $postMessage<M>/$dispatch<M> type constructors, shared by
  // every consumer path, so probes live only here (later usages need no probes).
  $postMessage({ event: 'greet', payload: b })
  // @ts-expect-error payload for event 'greet' must be number
  $postMessage({ event: 'greet', payload: a })
  typedPostMessage({ event: 'next', payload: a }) // legal call, no probe needed

  // same minimal-set rule for the $dispatch<M> payload constraint
  $dispatch({ target: 'ca', action: 'update', payload: 1 })
  // @ts-expect-error payload for action 'update' must be number
  $dispatch({ target: 'ca', action: 'update', payload: 'x' })

  $dispatch({ target: 'app', action: 'getLocale' }).then((res) => {
    type _r = Expect<Equal<typeof res, string>>
    window.console.log(res)
  })

  // custom app action merged via DefineAppActions<T>
  $dispatch({ target: 'app', action: 'ping', payload: 'x' }).then((res) => {
    type _r = Expect<Equal<typeof res, number>>
    window.console.log(res)
  })
  // @ts-expect-error payload for custom app action 'ping' must be string
  $dispatch({ target: 'app', action: 'ping', payload: 1 })

  return null
}

// statics are inferred from the contract slice picked by the 'ca' key
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

// @ts-expect-error self target must be a key of the contract actions
export const AX: VariousFC<SelfProps, 'cx'> = () => null

export class B extends Component<VariousProps<SelfProps>> {
  // class statics stay explicit: the slice is extracted from the ambient
  // contract (also proves the augmentation merges through the package entry)
  static update: PublicAction<VariousContract['actions']['ca']['update']> = ({ payload, trigger }) => {
    type _p = Expect<Equal<typeof payload, number>>
    type _t = Expect<Equal<typeof trigger, string>>
    window.console.log(payload, trigger)
  }

  static $onMessage: OnMessage = ({ event, payload, trigger }) => {
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

    // no probes here: same $postMessage/$dispatch types as A (VariousFC wraps
    // VariousProps, both wired via ComponentBuiltinProps); if the Messages
    // wiring regressed, $dispatch would turn untyped and the `res` assertion
    // below would fail
    $postMessage({ event: 'greet', payload: b })
    $postMessage({ event: 'next', payload: a })

    $dispatch({ target: 'ca', action: 'next' }).then((res) => {
      type _r = Expect<Equal<typeof res, number>>
      window.console.log(res)
    })

    return null
  }
}
