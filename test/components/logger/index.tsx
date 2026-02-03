import React from 'react'
import { VariousProps } from '@variousjs/various'

const L = (props: VariousProps) => {
  const { $logger } = props
  return (
    <>
      <h3>Logger</h3>
      <div className="value">
        <p>open console to view log</p>
        <button
          onClick={() => {
            $logger.info('this is info')
          }}
        >
          info
        </button>
        <button
          onClick={() => {
            $logger.warn('this is warn message', 'warn type')
          }}
        >
          warn
        </button>
        <button
          onClick={() => {
            $logger.error('an error message', 'error type')
          }}
        >
          error
        </button>
      </div>
    </>
  )
}

export default L
