import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Nycticorax, PublicAction } from '@variousjs/various'
import { Store } from '../types'

type S = { value: string, trigger: string }

const { createStore, connect, emit } = new Nycticorax<S>()

createStore({ value: '', trigger: '' })

class A extends Component<ComponentProps<Store, S>> {
  static updateValue: PublicAction = async (value, trigger) => {
    await new Promise((r) => setTimeout(r, 100))
    emit({ value, trigger: Object.values(trigger).join('.') }, true)
  }

  state = {
    dispatchError: '',
    bValue: '',
  }

  onGetB = async () => {
    const b = await this.props.$dispatch({
      name: 'dispatch-b',
      action: 'getValue',
    })
    this.setState({ bValue: (b as string) })
  }

  onSetG = async () => {
    try {
      await this.props.$dispatch({
        name: 'app',
        action: 'no-exist',
      })
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  onDpB = async () => {
    try {
      await this.props.$dispatch({
        name: 'b',
        module: 'C',
        action: 'no-exist',
        value: undefined,
      })
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  render() {
    const { value, $store, trigger } = this.props
    const { dispatchError, bValue } = this.state

    return (
      <Descriptions column={2} size="small" title="A" layout="vertical" bordered>
        <Descriptions.Item label="Store">
          <span data-a="store-name">{$store.name}</span>
        </Descriptions.Item>

        <Descriptions.Item label="A Value">
          <span data-a="value">{value || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Trigger">
          <span data-a="trigger">{trigger || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="B Value">
          <span data-a="b-value">{bValue || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item span={2} label="Error">
          <span data-a="error">{dispatchError || '-'}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button data-a="action-b" type="primary" size="small" onClick={this.onGetB}>B Value</Button>
          <Button data-a="action-b-nonexist" type="primary" size="small" onClick={this.onDpB}>B Nonexist</Button>
          <Button data-a="action-store-nonexist" type="primary" size="small" onClick={this.onSetG}>Store Nonexist</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}

export default connect('value')(A)
