import React from 'react'
import { ComponentNode, createLogger } from '@variousjs/various'
import en from '../i18n/en.json'
import zh from '../i18n/zh.json'

export const A = ((props) => {
  const { $t, $postMessage } = props
  return (
    <div>
      <h3>React Component</h3>
      <div className="value">
        <p>greet: {$t('greet', { name: 'C', name2: 'D' })}</p>
        <button onClick={() => $postMessage('aaa')}>postMessage</button>
      </div>
    </div>
  )
}) as ComponentNode

A.$i18n = () => ({
  lngStoreKey: 'locale',
  resources: { zh, en },
})

A.log = (t: string) => {
  const logger = createLogger({ name: 'aa' })
  logger.info(t)
}
