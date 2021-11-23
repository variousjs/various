import React from 'react'
import { Entry } from '../types'

export const Loader = () => (
  <div>Loading</div>
)

export const Error: Entry['Error'] = ({ type, message, reload }) => (
  <>
    <div>{`[${type}]${message}`}</div>
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

export const Container = () => (
  <div>Container not defined</div>
)
