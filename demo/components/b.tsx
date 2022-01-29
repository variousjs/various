import React, { Component } from 'react'
import { Button, message } from 'antd'
import {
  ComponentProps, Store, Connect as CT, OnMessage,
} from '@variousjs/various'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { Store as GlobalStore, Config } from '../types'

type S = { b: string }
type Connect = CT<S>

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Store<S>()

createStore({ b: '666' })

class X extends Component<
  Connect & RouteComponentProps<{ id: string }> & ComponentProps<GlobalStore, Config>
> {
  static getValue = () => getStore().b

  static updateValue = (value: string, caller: string) => {
    message.info(`caller: ${caller}`)
    dispatch({ b: value })
  }

  static $onMessage: OnMessage = (params) => {
    console.log(params)
  }

  componentDidMount() {
    window.console.log(this.props.$config.menu[0].label)
  }

  onGetA = () => {
    try {
      message.info(this.props.$dispatch('a', 'getValue') as string)
    } catch (e) {
      message.error((e as Error).message)
    }
  }

  onSetA = async () => {
    await this.props.$dispatch('a', 'updateValue', Math.random().toFixed(2))
    this.onGetA()
    this.props.$dispatch('a', 'cdy')
  }

  onSetG = () => {
    this.props.$dispatch('store', 'setNumber', Math.random().toFixed(2))
  }

  onGetStatus = () => {
    this.props.$postMessage('bbbbb', 'ccccc')
  }

  render() {
    const { number } = this.props.$store
    const { b, match } = this.props

    console.log(this.props)

    return (
      <div>
        <p style={{ fontSize: 20 }}>B</p>
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
            {match.params.id || '空'}
          </p>
          <Button onClick={this.onGetA}>获取 A 组件的值</Button>
          <Button onClick={this.onSetA}>更新 A 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值</Button>
          <Button onClick={this.onGetStatus}>广播消息</Button>
        </div>
      </div>
    )
  }
}

const Y = withRouter(X)

export default connect('b')(Y)
