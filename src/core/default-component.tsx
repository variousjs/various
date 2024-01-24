import React from 'react'
import { ErrorNode, LoaderNode } from '@variousjs/various'
import { Store } from '../types'

export const Loader: LoaderNode<Store> = () => (
  <div>Loading</div>
)

export const Error: ErrorNode<Store> = ({ $type, $message, $reload }) => (
  <>
    <div>{`[${$type}] ${$message}`}</div>
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
