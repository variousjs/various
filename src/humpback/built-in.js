export default (React) => {
  const Loading = () => (
    <h3>Loading</h3>
  )

  const Error = ({ error, reload }) => (
    <>
      <h3>{error}</h3>
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
