import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { ComponentProps, createLogger, StaticProps } from '@variousjs/various'
import en from '../i18n/en.json'
import zh from '../i18n/zh.json'

const C = forwardRef<
  { set:(t: string) => void },
  ComponentProps<{ propsA: string }>
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
            <button onClick={() => $postMessage('aaa')}>postMessage</button>
          </div>
        </div>
      )
    })

const staticMethods: StaticProps<{ log: { value: string, result: void } }> = {
  $i18n: () => ({
    lngStoreKey: 'locale',
    resources: { zh, en },
  }),
  log: (t) => {
    const logger = createLogger({ name: 'aa' })
    logger.info(t)
  },
}

export const A = Object.assign(C, staticMethods)
