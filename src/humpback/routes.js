import { ERRORS } from '../config'

export default (React, Error) => class extends React.Component {
  state = {
    errorCode: undefined,
    errorMessage: undefined,
  }

  shouldComponentUpdate(props, { errorCode }) {
    return !!errorCode
  }

  componentDidCatch(e) {
    this.setState({ errorCode: 3, errorMessage: e.message })
  }

  render() {
    const { errorCode, errorMessage } = this.state
    const { children } = this.props

    if (errorCode) {
      return (<Error type={ERRORS[errorCode]} message={errorMessage} />)
    }

    return children
  }
}
