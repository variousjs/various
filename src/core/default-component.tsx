import React, { ComponentType } from 'react'
import { ErrorNode, LoaderNode } from '@variousjs/various'

export const Loader: LoaderNode = () => (
  <div>Loading</div>
)

export const Error: ErrorNode = ({ $type, $message, $reload }) => (
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

export const Container: ComponentType = () => (
  <div>Container not defined</div>
)
