import { ReactNode } from 'react'
import { ERRORS } from '../config'
import { Entry, State } from '../types'

type P = {
  children: ReactNode,
}

export default (
  React: typeof window.React,
  Error: Entry['Error'],
) => class extends React.Component<P, State> {
  state = {
    errorCode: '',
    errorMessage: '',
  }

  shouldComponentUpdate(_props: P, { errorCode }: State) {
    return !!errorCode
  }

  componentDidCatch(e: Error) {
    this.setState({ errorCode: 'ROUTER_ERROR', errorMessage: e.message })
  }

  render() {
    const { errorCode, errorMessage } = this.state
    const { children } = this.props

    if (errorCode) {
      return (
        <Error type={ERRORS[errorCode as keyof typeof ERRORS]} message={errorMessage} />
      )
    }

    return children
  }
}
