import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps, Store, Connect as CT } from '@variousjs/various'
import { Store as GlobalStore } from '../types'

type S = { value: string }
type Connect = CT<S>

const { createStore, connect, dispatch } = new Store<S>()

createStore({ value: 'a' })

class A extends Component<Connect & ComponentProps<GlobalStore> & { name: string }> {
  static updateValue = async (value: string) => {
    await new Promise((r) => setTimeout(r, 100))
    dispatch({ value }, true)
  }

  state = {
    dispatchError: '',
    bValue: '',
  }

  onGetB = () => {
    const b = this.props.$dispatch('b', 'getValue')
    this.setState({ bValue: (b as string) })
  }

  onSetG = async () => {
    try {
      await this.props.$dispatch('store', 'no-exist')
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
        <Button id="a-dispatch-global" onClick={this.onSetG}>$dispatch(global)</Button>
      </>
    )
  }
}

export default connect('value')(A)
