import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps, Store, Connect as CT, Invoker, onComponentMounted } from '@variousjs/various'
import { Store as GlobalStore } from '../types'

type S = { value: string, readys: string[] }
type Connect = CT<S>

const { createStore, connect, emit, getStore } = new Store<S>()

createStore({ value: 'a', readys: [] })

class A extends Component<Connect & ComponentProps<GlobalStore> & { name: string }> {
  static updateValue: Invoker = async ({ value, trigger }) => {
    window.console.log(trigger)
    await new Promise((r) => setTimeout(r, 100))
    emit({ value }, true)
  }

  un: Function

  un2: Function

  un3: Function

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

  componentDidMount() {
    this.un = onComponentMounted('b.C', () => {
      const { readys } = getStore()
      emit({ readys: readys.concat(['b.C']) }, true)
    })
    this.un2 = onComponentMounted('x', () => {
      const { readys } = getStore()
      emit({ readys: readys.concat(['x']) }, true)
    })
    this.un3 = onComponentMounted('y', () => {
      const { readys } = getStore()
      emit({ readys: readys.concat(['y']) }, true)
    })
  }

  componentWillUnmount() {
    this.un()
    this.un2()
    this.un3()
    emit({ readys: [] }, true)
  }

  render() {
    const { value, name, $store, readys } = this.props
    const { dispatchError, bValue } = this.state

    return (
      <>
        <p>Store: {$store.user.name}</p>
        <p>Store(component): {value}</p>
        <p>Component Props: {name}</p>
        <p>Value(b): {bValue}</p>
        <p>Dispatch Error: <span id="a-dispatch-error">{dispatchError}</span></p>
        <p>Readys: {readys.sort().join()}</p>
        <Button onClick={this.onGetB}>$dispatch(b)</Button>
        <Button onClick={this.onDpB}>$dispatch(b-no-exits)</Button>
        <Button id="a-dispatch-global" onClick={this.onSetG}>$dispatch(global)</Button>
      </>
    )
  }
}

export default connect('value', 'readys')(A)
