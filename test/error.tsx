import React from 'react'
import { ErrorNode } from '@variousjs/various'
import { Store } from './types'

const errorComponent: ErrorNode<Store> = (props) => {
  const {
    $reload, $error, $name, $module, $store,
  } = props
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
        <h4>{$name}{$module ? '.' : ''}{$module}</h4>
        {`[${$error.type}]:${$error.message || '组件错误'}`}
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
          {$store.locale === 'zh' ? '刷新' : 'reload'}
        </button>
        )
      }
    </>
  )
}

export default errorComponent
