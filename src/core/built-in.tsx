import React, { ComponentType, useLayoutEffect } from 'react'
import getConsole from './console'
import { ErrorProps } from '../types'

export const Loader = () => (
  <div>Loading</div>
)

export const Error: ComponentType<ErrorProps> = ({ type, message, reload }) => (
  <>
    <div>{`[${type}] ${message}`}</div>
    {
      reload
        ? (
          <button
            type="button"
            onClick={reload}
          >
            Reload
          </button>
        )
        : null
    }
  </>
)

export const Container = () => {
  const warnMessage = 'Container not defined'

  useLayoutEffect(() => {
    const console = getConsole('container')
    console.warn(warnMessage)
  }, [])

  return (
    <div>{warnMessage}</div>
  )
}
