/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react'
import {
  Button, message, ConfigProvider, DatePicker, locales,
} from 'antd'
import Nycticorax, { Connect as CT } from 'nycticorax'
import { ComponentProps } from 'humpback'
import { Store as GlobalStore } from '../types'

type Store = { a: string }
type Connect = CT<Store>

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax<Store>()

createStore({ a: '9' })

class X extends Component<Connect & ComponentProps<GlobalStore> & { name: string }> {
  static getValue = () => getStore().a

  static updateValue = async (value: string) => {
    await new Promise((r) => setTimeout(r, 1000))
    dispatch({ a: value }, true)
  }

  onGetB = () => {
    try {
      message.info(this.props.$dispatch('b', 'getValue'))
    } catch (e) {
      window.console.log(e.message)
    }
  }

  onSetB = () => {
    this.props.$dispatch('b', 'updateValue', Math.random().toFixed(2))
  }

  onSetG = async () => {
    await this.props.$dispatch('store', 'updateUserName', Math.random())
    message.success('更新完成')
    this.props.$dispatch('store', 'abs')
  }

  render() {
    const { user } = this.props.$store
    const { a, $mounted, name } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>{name.toUpperCase()}</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>
            全局值：
            {user.name}
          </p>
          <p>
            组件值:
            {a}
          </p>
          <p>
            B 组件加载完成：
            {$mounted.includes('b') ? 'yes' : 'no'}
          </p>
          <Button onClick={this.onGetB}>获取 B 组件的值</Button>
          <Button onClick={this.onSetB}>更新 B 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值(异步)</Button>
          <ConfigProvider locale={locales.zh_CN}>
            <DatePicker />
          </ConfigProvider>
        </div>
      </div>
    )
  }
}

export default connect('a')(X)