import { ReactNode, ComponentType } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { ERROR_TYPE } from '../config'
import { Entry, ErrorState, Dependency } from '../types'

type P = {
  children?: ReactNode,
} & RouteComponentProps

export default (
  React: Dependency.React,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  ErrorNode: Entry['Error'],
) => {
  const { withRouter } = ReactRouterDOM
  class R extends React.Component<P, ErrorState> {
    state = {
      errorType: undefined,
      errorMessage: '',
    }

    shouldComponentUpdate(_props: P, { errorType }: ErrorState) {
      const { pathname: newPath } = _props.location
      const { pathname: oldPath } = this.props.location
      if (newPath !== oldPath && errorType) {
        window.location.reload()
        return false
      }
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

  return withRouter(R) as ComponentType
}
