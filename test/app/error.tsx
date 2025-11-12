import React from 'react'
import { ErrorFallbackNode } from '@variousjs/various'
import { Store } from '../types'

const errorComponent: ErrorFallbackNode<Store> = (props) => {
  const {
    $reload,
    $error,
    $self,
    $store,
  } = props

  return (
    <>
      <h3>{[$self.name, $self.module].filter(Boolean).join('.')}</h3>
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
