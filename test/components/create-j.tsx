import { Input } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'

export default () => (
  <div style={{ fontSize: 50, margin: 0 }}>J</div>
)

export const j = () => (<div>j</div>)

export const k = 'k'

export const l = () => 'l'

export const refNode = forwardRef<{ txt:() => void }, unknown>((_, ref) => {
  const [t, setT] = useState<string>()
  useImperativeHandle(ref, () => ({
    txt() {
      setT((v) => (v ? undefined : 'ref'))
    },
  }))

  return (
    <div>
      <Input value={t} />
    </div>
  )
})
