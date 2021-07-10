export default (React, Error) => class extends React.Component {
  state = {
    error: undefined,
  }

  shouldComponentUpdate(props, { error }) {
    return !!error
  }

  componentDidCatch(e) {
    this.setState({ error: e.message || 'Routes Error' })
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if (error) {
      return (<Error error={error} />)
    }

    return children
  }
}
