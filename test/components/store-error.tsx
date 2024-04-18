import React from 'react'
import { App } from '@variousjs/various'

const app: App = {
  // @ts-ignore
  // eslint-disable-next-line no-undef
  store: { a: b.c },
  Container: () => (<div>A</div>),
}

export default app
