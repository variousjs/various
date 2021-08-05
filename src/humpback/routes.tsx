import { ReactNode } from 'react'
import { ERROR_TYPE } from '../config'
import { Entry, ErrorState, Dependency } from '../types'

type P = {
  children: ReactNode,
}

export default (
  React: Dependency.React,
  ErrorNode: Entry['Error'],
) => class extends React.Component<P, ErrorState> {
  state = {
    errorType: '',
    errorMessage: '',
  }

  shouldComponentUpdate(_props: P, { errorType }: ErrorState) {
    return !!errorType
  }

  componentDidCatch(e: Error) {
    this.setState({ errorType: 'ROUTER_ERROR', errorMessage: e.message })
  }

  render() {
    const { errorType, errorMessage } = this.state
    const { children } = this.props

    if (errorType) {
      return (
        <ErrorNode
          type={ERROR_TYPE[errorType]}
          message={errorMessage}
        />
      )
    }

    return children
  }
}
