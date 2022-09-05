import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps, Store, Invoker } from '@variousjs/various'
import { Store as GlobalStore } from '../types'

type S = { value: string }

const { createStore, connect, emit } = new Store<S>()

createStore({ value: 'a' })

class A extends Component<S & ComponentProps<GlobalStore> & { name: string }> {
  static updateValue: Invoker = async ({ value, trigger }) => {
    window.console.log(trigger)
    await new Promise((r) => setTimeout(r, 100))
    emit({ value }, true)
  }

  state = {
    dispatchError: '',
    bValue: '',
  }

  onGetB = async () => {
    const b = await this.props.$dispatch('b.C', 'getValue')
    this.setState({ bValue: (b as string) })
  }

  onSetG = async () => {
    try {
      await this.props.$dispatch('store', 'no-exist')
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  onDpB = async () => {
    try {
      await this.props.$dispatch('b.C', 'no-exist')
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  render() {
    const { value, name, $store } = this.props
    const { dispatchError, bValue } = this.state

    return (
      <>
        <p>Store: {$store.user.name}</p>
        <p>Store(component): {value}</p>
        <p>Component Props: {name}</p>
        <p>Value(b): {bValue}</p>
        <p>Dispatch Error: <span id="a-dispatch-error">{dispatchError}</span></p>
        <Button onClick={this.onGetB}>$dispatch(b)</Button>
        <Button onClick={this.onDpB}>$dispatch(b-no-exits)</Button>
        <Button id="a-dispatch-global" onClick={this.onSetG}>$dispatch(global)</Button>
      </>
    )
  }
}

export default connect('value')(A)
