import React, { Component } from 'react'
import {
  createDispatch,
  ComponentProps,
  ComponentNode,
  Nycticorax,
  createComponent,
} from '@variousjs/various'
import { Store } from '../../types'

interface S {
  payload?: number,
  trigger?: string,
}

const { createStore, emit, useStore } = new Nycticorax<S>()
createStore({})

const E = createComponent({ module: 'dispatch.B' })

const A: ComponentNode<{}, Store, { update: { payload: number, result: void } }> = (props) => {
  const { $dispatch, $store } = props
  const { trigger, payload } = useStore('trigger', 'payload')

  return (
    <>
      <h3>Dispatch</h3>
      <div className="value">
        <p>store: {$store.name}</p>
        <p>trigger: {trigger}</p>
        <p>payload: {payload}</p>
        <button
          onClick={() => {
            $dispatch({ target: 'app', action: 'setName' })
          }}
        >
          dispatch app
        </button>
        <button
          onClick={() => {
            $dispatch({ target: 'dispatch-v', action: 'update', payload: new Date() })
          }}
        >
          dispatch vue
        </button>
      </div>

      <E />
    </>
  )
}

A.update = ({ payload, trigger }) => {
  emit({ payload, trigger })
}

export default A

export class B extends Component<ComponentProps> {
  state = {
    errors: {} as Record<string, Error>,
  }

  localDispatch = createDispatch('local')

  onError = (name: string, e: any) => {
    this.setState((pre: any) => ({ errors: { ...pre.errors, [name]: e } }))
  }

  render() {
    const { $dispatch } = this.props
    const { errors } = this.state

    return (
      <>
        <h3>Dispatch App Error</h3>
        <div className="value">
          <p>error: {errors.app?.message}</p>
          <button
            onClick={() => {
              this.localDispatch({
                target: 'app',
                action: 'not exist',
              }).catch((e) => this.onError('app', e))
            }}
          >
            dispatch-app
          </button>
        </div>

        <h3>Dispatch Component Error</h3>
        <div className="value">
          <p>error: {errors.component?.message}</p>
          <button
            onClick={() => {
              $dispatch({
                target: 'not exist',
                action: 'any',
                payload: 1,
              }).catch((e) => this.onError('component', e))
            }}
          >
            dispatch-component
          </button>
        </div>

        <h3>Dispatch Action Error</h3>
        <div className="value">
          <p>error: {errors.action?.message}</p>
          <button
            onClick={() => {
              $dispatch({
                target: 'dispatch',
                action: 'not-exist',
              }).catch((e) => this.onError('action', e))
            }}
          >
            dispatch-action
          </button>
        </div>
      </>
    )
  }
}
