import React from 'react'
import { ErrorNode } from '@variousjs/various'
import { Store } from './types'

const errorComponent: ErrorNode<Store> = (props) => {
  const {
    $reload,
    $error,
    $name,
    $module,
    $store,
  } = props

  return (
    <>
      <h3>{$name}{$module ? '.' : ''}{$module}</h3>
      <div className="value">
        <p>{`[${$error.type}]:${$error.message}`}</p>
        <button onClick={$reload}>
          {$store.locale === 'zh' ? '刷新' : 'reload'}
        </button>
      </div>
    </>
  )
}

export default errorComponent
