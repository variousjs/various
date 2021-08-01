import { FC } from 'react'
import { ErrorProps, Dependency } from '../types'

export default (React: Dependency.React) => {
  const Loader = () => (
    <h3>Loading</h3>
  )

  const Error: FC<ErrorProps> = ({ type, message, reload }) => (
    <>
      <h3>{type}</h3>
      <p>{message}</p>
      {
        reload
          ? (
            <button
              type="button"
              onClick={reload}
            >
              reload
            </button>
          )
          : null
      }
    </>
  )

  const Container = () => (
    <h3>Nothing</h3>
  )

  return { Loader, Error, Container }
}
