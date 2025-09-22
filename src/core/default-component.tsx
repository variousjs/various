import React, { ComponentType } from 'react'
import { ErrorNode, LoaderNode } from '@variousjs/various'
import { Store } from './types'

export const Loader: LoaderNode<Store> = () => (
  <div>Loading</div>
)

export const Error: ErrorNode<Store> = ({ $error, $reload }) => (
  <>
    <div>{`[${$error.type}] ${$error.message}`}</div>
    {
      $reload
        ? (
          <button
            type="button"
            onClick={$reload}
          >
            Reload
          </button>
        )
        : null
    }
  </>
)

export const Container: ComponentType = () => (
  <div>App Container is not defined</div>
)
