import React, { ReactNode, ComponentType } from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Error as ErrorNode } from './built-in'
import { ERROR_TYPE } from '../config'
import { ErrorState } from '../types'

type P = {
  children?: ReactNode,
} & RouteComponentProps

class R extends React.Component<P, ErrorState> {
  state = {
    errorType: undefined,
    errorMessage: '',
  }

  // shouldComponentUpdate(_props: P, { errorType }: ErrorState) {
  //   const { pathname: newPath } = _props.location
  //   const { pathname: oldPath } = this.props.location
  //   if (newPath !== oldPath && errorType) {
  //     window.location.reload()
  //     return false
  //   }
  //   return !!errorType
  // }

  componentDidCatch(e: Error) {
    this.setState({ errorType: ERROR_TYPE.ROUTER_ERROR, errorMessage: e.message })
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

export default withRouter(R) as ComponentType
