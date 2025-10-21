import React from 'react'
import { ComponentProps } from '@variousjs/various'

export default (props: ComponentProps & { setSuccess: () => void }) => {
  const { $t, setSuccess } = props

  return (
    <div style={{ padding: 20 }}>
      <h3>Global Async</h3>
      <div className="value">
        <p>title: {$t('title')}</p>
        <button onClick={() => setSuccess()}>get Resource</button>
      </div>
    </div>
  )
}
