import React, { FC } from 'react'
import { ErrorProps } from '@variousjs/various'
import { Store } from './types'

const errorComponent: FC<ErrorProps<Store>> = (props) => {
  const { $reload, $type, $message } = props
  return (
    <>
      <div
        style={{
          wordBreak: 'break-word',
          border: '1px solid #b29400',
          color: '#6b5900',
          padding: 10,
          borderRadius: 4,
        }}
      >
        {`[${$type}]:${$message || '组件错误'}`}
      </div>
      {
        $reload && (
        <button
          style={{
            border: '1px solid #eee',
            marginTop: 10,
            cursor: 'pointer',
            background: '#eee',
            padding: '3px 10px',
            borderRadius: 4,
          }}
          type="button"
          onClick={$reload}
        >
          刷新
        </button>
        )
      }
    </>
  )
}

export default errorComponent
