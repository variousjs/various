import { Entry, Dependency } from '../types'

const builtIn = (React: Dependency.React) => {
  const Loader = () => (
    <div>Loading</div>
  )

  const Error: Entry['Error'] = ({ type, message, reload }) => (
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

  const Container = () => (
    <div>Container component not defined</div>
  )

  return { Loader, Error, Container }
}

export default builtIn
