import React, { Component, ComponentType } from 'react'
import type { VariousError as ve } from '../public/types'
import {
  onError,
  VariousError,
  resetDependencyConfig,
  updateUnMountComponent,
  getSelfInfo,
} from './helper'
import connector from './connector'
import { ErrorBoundaryProps, Store } from '../types'
import { connect, getUserStore, getStore } from './store'
import { LOCALE_KEY } from './config'

class ErrorBoundary extends Component<ErrorBoundaryProps & Store> {
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

export function createErrorBoundary() {
  // must be called after createStore, same as react-component's
  // connect(...storeKeys, LOCALE_KEY); symbol keys are excluded from
  // Object.keys, so LOCALE_KEY is appended explicitly.
  // connect's generic requires props extending Store; the HOC injects
  // store keys as props at runtime, which ErrorBoundary simply ignores
  const Connected = connect(
    ...Object.keys(getStore()),
    LOCALE_KEY,
  )(ErrorBoundary)
  Connected.displayName = 'various-connector'

  // connect's mapped type collapses ErrorBoundaryProps (Store's index
  // signature swallows keyof), so the boundary props must be restored here
  return Connected as ComponentType<ErrorBoundaryProps>
}
