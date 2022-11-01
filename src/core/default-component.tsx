import React, { ComponentType } from 'react'
import { ErrorProps, LoaderProps, ContainerProps } from '../types'

export const Loader: ComponentType<LoaderProps> = () => (
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

export const Container: ComponentType<ContainerProps> = () => (
  <div>Container not defined</div>
)
