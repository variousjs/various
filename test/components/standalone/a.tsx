import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { VariousProps, createLogger, ComponentStatics } from '@variousjs/various'
import en from '../i18n/en.json'
import zh from '../i18n/zh.json'

const C = forwardRef<
  { set:(t: string) => void },
  VariousProps<{ propsA: string }>
    >((props, ref) => {
      const { $t, $postMessage } = props
      const [text, setText] = useState('')

      useImperativeHandle(ref, () => ({
        set: (t: string) => {
          setText(t)
        },
      }))

      return (
        <div>
          <h3>React Component</h3>
          <div className="value">
            <p>text: {text}</p>
            <p>props: {props.propsA}</p>
            <p>greet: {$t('greet', { name: 'C', name2: 'D' })}</p>
            <button onClick={() => $postMessage({ event: 'aaa' })}>postMessage</button>
          </div>
        </div>
      )
    })

const staticMethods: ComponentStatics<{ log: { payload: string, result: void } }> = {
  $i18n: () => ({
    lngStoreKey: 'locale',
    resources: { zh, en },
  }),
  log: (t) => {
    const logger = createLogger('aa')
    logger.info(t.payload)
  },
}

export const A = Object.assign(C, staticMethods)
