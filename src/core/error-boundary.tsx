import React, { Component } from 'react'
import { VariousError as ve } from '@variousjs/various'
import {
  onError,
  VariousError,
  resetDependencyConfig,
  updateUnMountComponent,
} from './helper'
import connector from './connector'
import { ErrorBoundaryProps, Store } from './types'
import { getUserStore } from './store'

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  static displayName = 'various-error-boundary'

  state = {
    hasError: false,
  }

  private error?: ve

  componentDidCatch(e: Error | VariousError) {
    const { name, module } = this.props
    const error = e instanceof VariousError
      ? e
      : new VariousError({
        name,
        module,
        type: 'SCRIPT_ERROR',
        originalError: e,
      })

    this.setState({ hasError: true })
    this.error = error
    onError(error)
    resetDependencyConfig(this.props.name)
    updateUnMountComponent({ name, module })
  }

  reload = () => {
    this.error = undefined
    this.setState({ hasError: false })
  }

  render() {
    const { name, module } = this.props
    const ErrorNode = connector.getErrorComponent()
    const store = getUserStore()

    if (this.state.hasError) {
      return (
        <ErrorNode
          $name={name}
          $module={module}
          $reload={this.reload}
          $store={store as Store}
          $error={this.error!}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
