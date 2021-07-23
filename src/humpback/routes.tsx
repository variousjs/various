import { ComponentType, ReactNode } from 'react'
import { ERRORS } from '../config'

type P = {
  children: ReactNode,
}
type T = {
  errorCode: string,
  errorMessage: string,
}

export default (
  React: typeof window.React,
  Error: ComponentType<{ type: string, message: string }>,
) => class extends React.Component<P, T> {
  state = {
    errorCode: '',
    errorMessage: '',
  }

  shouldComponentUpdate(_props: P, { errorCode }: T) {
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
        <Error type={ERRORS[errorCode as unknown as keyof typeof ERRORS]} message={errorMessage} />
      )
    }

    return children
  }
}
