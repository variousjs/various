/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import { Button, message } from 'antd'
import Nycticorax, { Connect as CT } from 'nycticorax'
import { ComponentProps } from 'humpback'
import { Store as GlobalStore, Config } from '../types'

type Store = { b: string }
type Connect = CT<Store>

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax<Store>()

createStore({ b: '666' })

class X extends Component<Connect & ComponentProps<GlobalStore, Config>> {
  static getValue = () => getStore().b

  static updateValue = (value: string, caller: string) => {
    message.info(`caller: ${caller}`)
    dispatch({ b: value })
  }

  componentDidMount() {
    console.log(this.props.$config.menu[0].label)
  }

  onGetA = () => {
    try {
      message.info(this.props.$dispatch('a', 'getValue'))
    } catch (e) {
      message.error(e)
    }
  }

  onSetA = async () => {
    await this.props.$dispatch('a', 'updateValue', Math.random().toFixed(2))
    this.onGetA()
  }

  onSetG = () => {
    this.props.$dispatch('store', 'setNumber', Math.random().toFixed(2))
  }

  onGetStatus = () => {
    const { $mounted } = this.props
    message.info($mounted)
  }

  render() {
    const { number } = this.props.$store
    const { b, $router } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>B</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            全局值：
            {number}
          </p>
          <p>
            组件值:
            {b}
          </p>
          <p>
            当前路由参数：
            {$router.match.params.id || '空'}
          </p>
          <Button onClick={this.onGetA}>获取 A 组件的值</Button>
          <Button onClick={this.onSetA}>更新 A 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值</Button>
          <Button onClick={this.onGetStatus}>获取当前加载组件</Button>
        </div>
      </div>
    )
  }
}

export default connect('b')(X)
