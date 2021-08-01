import { ReactNode, ComponentType } from 'react'
import { ERROR_TYPE } from '../config'
import {
  ErrorProps, ErrorState, ErrorType, Dependency,
} from '../types'

type P = {
  children: ReactNode,
}

export default (
  React: Dependency.React,
  ErrorNode: ComponentType<ErrorProps>,
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
          type={ERROR_TYPE[errorType as ErrorType] as ErrorType}
          message={errorMessage}
        />
      )
    }

    return children
  }
}
