import React, { ComponentType } from 'react'
import { FallbackNode, ErrorFallbackNode } from '@variousjs/various'
import { getClassNameWithModule } from './helper'
import { Store } from '../types'

export const Fallback: FallbackNode<Store> = (props) => {
  const className = getClassNameWithModule(props.$self, 'various-component-fallback')
  return (
    <div className={className}>Loading</div>
  )
}

export const ErrorFallback: ErrorFallbackNode<Store> = ({ $error, $reload, $self }) => {
  const className = getClassNameWithModule($self, 'various-component-error_fallback')
  return (
    <div className={className}>
      <h3>{$error.type}</h3>
      <p>{$error.message}</p>
      <button type="button" onClick={$reload}>
        Reload
      </button>
    </div>
  )
}

export const Root: ComponentType = () => (
  <div>App Container is not defined</div>
)
