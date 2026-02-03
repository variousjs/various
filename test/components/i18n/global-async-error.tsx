import React from 'react'
import { VariousProps } from '@variousjs/various'

export default (props: VariousProps & { setFail: () => void }) => {
  const { $t, setFail } = props

  return (
    <div style={{ padding: 20 }}>
      <h3>Global Async Error</h3>
      <div className="value">
        <p>title: {$t('title')}</p>
        <button onClick={() => setFail()}>get Resource</button>
      </div>
    </div>
  )
}
