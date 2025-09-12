import { ComponentProps } from '@variousjs/various'
import { Input } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export default () => (
  <div style={{ fontSize: 50, margin: 0 }}>J</div>
)

export const j = () => (<div>j</div>)

export const k = 'k'

export const l = () => 'l'

export const refNode = forwardRef<{ txt:() => void }, ComponentProps>((props, ref) => {
  const [t, setT] = useState<string>()

  useImperativeHandle(ref, () => ({
    txt() {
      setT((v) => (v ? undefined : 'ref'))
    },
  }))

  props.$logger.info('???', 'TTT')

  return (
    <div>
      <Input data-input="ref" value={t} />
    </div>
  )
})
