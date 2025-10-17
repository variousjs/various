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
  value?: number,
  trigger?: string,
}

const { createStore, emit, useStore } = new Nycticorax<S>()
createStore({})

const E = createComponent({ name: 'dispatch', module: 'B' })

const A = ((props) => {
  const { $dispatch, $store } = props
  const { trigger, value } = useStore('trigger', 'value')

  return (
    <>
      <h3>Dispatch</h3>
      <div className="value">
        <p>store: {$store.name}</p>
        <p>trigger: {trigger}</p>
        <p>value: {value}</p>
        <button
          onClick={() => {
            $dispatch({ name: 'app', action: 'setName' })
          }}
        >
          dispatch app
        </button>
        <button
          onClick={() => {
            $dispatch({ name: 'dispatch-v', action: 'update', value: new Date() })
          }}
        >
          dispatch vue
        </button>
      </div>

      <E />
    </>
  )
}) as ComponentNode<Store>

A.update = (value, trigger) => {
  const { name, module } = trigger
  emit({ value, trigger: [name, module].filter(Boolean).join('.') })
}

export default A

export class B extends Component<ComponentProps> {
  state = {
    errors: {} as Record<string, Error>,
  }

  localDispatch = createDispatch({ name: 'local' })

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
                name: 'app',
                action: 'not exist',
              }).catch((e) => this.onError('app', e))
            }}
          >
            app
          </button>
        </div>

        <h3>Dispatch Component Error</h3>
        <div className="value">
          <p>error: {errors.component?.message}</p>
          <button
            onClick={() => {
              $dispatch({
                name: 'not exist',
                action: 'any',
              }).catch((e) => this.onError('component', e))
            }}
          >
            component
          </button>
        </div>

        <h3>Dispatch Action Error</h3>
        <div className="value">
          <p>error: {errors.action?.message}</p>
          <button
            onClick={() => {
              $dispatch({
                name: 'dispatch',
                action: 'not-exist',
              }).catch((e) => this.onError('action', e))
            }}
          >
            action
          </button>
        </div>
      </>
    )
  }
}
