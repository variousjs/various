import React, { ComponentType } from 'react'
import { ErrorProps } from '../types'

export const Loader = () => (
  <div>Loading</div>
)

export const Error: ComponentType<ErrorProps> = ({ $type, $message, $reload }) => (
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

export const Container = () => (
  <div>Container not defined</div>
)
