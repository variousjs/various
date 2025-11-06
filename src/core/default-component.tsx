import React, { ComponentType } from 'react'
import { ErrorNode, LoaderNode } from '@variousjs/various'
import { getClassNameWithModule } from './helper'
import { Store } from '../types'

export const Loader: LoaderNode<Store> = (props) => {
  const className = getClassNameWithModule(props.$self, 'various-component-fallback')
  return (
    <div className={className}>Loading</div>
  )
}

export const Error: ErrorNode<Store> = ({ $error, $reload, $self }) => {
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

export const Container: ComponentType = () => (
  <div>App Container is not defined</div>
)
