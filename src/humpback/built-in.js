export default (React) => {
  const Loading = () => (
    <h3>Loading</h3>
  )

  const Error = ({ type, message, reload }) => (
    <>
      <h3>{type}</h3>
      <p>{message}</p>
      {
        reload
          ? (
            <button onClick={reload}>reload</button>
          )
          : null
      }
    </>
  )

  const Container = () => (
    <h3>Nothing</h3>
  )

  return { Loading, Error, Container }
}
