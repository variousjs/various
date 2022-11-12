import React, { FC } from 'react'
import { MessageInvoker } from '@variousjs/various'

const G: FC & { $onMessage: MessageInvoker } = () => (
  <div style={{ fontSize: 50, margin: 0 }}>
    G
    <div className="component-loaded" />
  </div>
)

G.$onMessage = (message) => window.console.log(message)

export default G
