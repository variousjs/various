import React, { Component } from 'react'
import { VariousError as ve } from '@variousjs/various'
import {
  onError,
  VariousError,
  resetDependencyConfig,
  updateUnMountComponent,
  getSelfInfo,
} from './helper'
import connector from './connector'
import { ErrorBoundaryProps, Store } from '../types'
import { getUserStore, getStore } from './store'
import { LOCALE_KEY } from './config'

class ErrorBoundary extends Component<ErrorBoundaryProps> {
  static displayName = 'various-error-boundary'

  state = {
    hasError: false,
  }

  private error?: ve

  componentDidCatch(e: Error | VariousError) {
    const { module } = this.props
    const error = e instanceof VariousError
      ? e
      : new VariousError({
        module,
        type: module === 'app' ? 'APP_ERROR' : 'SCRIPT_ERROR',
        originalError: e,
      })

    this.setState({ hasError: true })
    this.error = error
    onError(error)
    resetDependencyConfig(module)
    updateUnMountComponent(module)
  }

  $self = getSelfInfo(this.props)

  reload = () => {
    this.error = undefined
    this.setState({ hasError: false })
  }

  render() {
    const ErrorFallbackNode = connector.getErrorFallbackComponent()
    const store = getUserStore()
    const locale = getStore(LOCALE_KEY)

    if (this.state.hasError) {
      return (
        <ErrorFallbackNode
          $self={this.$self}
          $reload={this.reload}
          $store={store as Store}
          $error={this.error!}
          $locale={locale}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
