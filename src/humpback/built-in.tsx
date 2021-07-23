import { ERRORS } from '../config'

type E = {
  type: keyof typeof ERRORS,
  message: string,
  reload: () => void,
}

export default (React: typeof window.React) => {
  const Loader = () => (
    <h3>Loading</h3>
  )

  const Error = ({ type, message, reload }: E) => (
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
