import React, { Component } from 'react'
import {
  VariousFC, VariousProps, PublicAction, OnMessage, I18n,
  createPostMessage,
} from '@variousjs/various'

interface SelfProps { a: string }

/*
  This program has NO VariousContract augmentation (see tsconfig.json), so the
  assertions below pin the loose fallback types (any / string). Untyped API
  accepts anything, so there is nothing to probe negatively. It also proves
  that explicit generic arguments keep working without a contract.
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

// explicit arguments still win over ambient defaults: `{ b: number }` narrows
// the store locally, `never` keeps statics loose (`Record<string, ...>`), so
// a bare function still needs the legacy `as` cast
export const C1 = ((props) => {
  type _a = Expect<Equal<typeof props.a, string>>
  return null
}) as VariousFC<SelfProps>

export const C2 = ((props) => {
  type _b = Expect<Equal<typeof props.$store.b, number>>
  return null
}) as VariousFC<SelfProps, never, { b: number }>

C2.update = ({ payload, trigger }) => {
  type _p = Expect<Equal<typeof payload, any>>
  type _t = Expect<Equal<typeof trigger, string>>
  window.console.log(payload, trigger)
}

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
