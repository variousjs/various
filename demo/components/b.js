import React, { Component } from 'react'
import { Button, message } from 'antd'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ b: '666' })

class X extends Component {
  static getValue = () => getStore().b

  static updateValue = (value) => {
    dispatch({ b: value })
  }

  onGetA = () => {
    try {
      message.info(this.props.dispatch('a', 'getValue'))
    } catch (e) {
      console.log(e)
      message.error(e)
    }
  }

  onSetA = async () => {
    await this.props.dispatch('a', 'updateValue', Math.random().toFixed(2))
    this.onGetA()
  }

  onSetG = () => {
    this.props.dispatch('global', 'setNumber', Math.random().toFixed(2))
  }

  onGetStatus = () => {
    message.info(this.props.dispatch('GET_MOUNTED_COMPONENTS'))
  }

  onRemoveA = () => {
    this.props.dispatch('UN_MOUNT_COMPONENT', { name: 'a' })
  }

  onGetSwitch = () => {
    this.props.dispatch('MOUNT_COMPONENT', {
      name: 'switch',
      url: 'https://unpkg.com/react-ios-switch@0.1.19/build/bundle.js',
    })
  }

  render() {
    const { number } = this.props.store
    const { b, match } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>B</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>全局值：{number}</p>
          <p>组件值: {b}</p>
          <p>当前路由参数：{match.params.id || '空'}</p>
          <Button onClick={this.onGetA}>获取 A 组件的值</Button>
          <Button onClick={this.onSetA}>更新 A 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值</Button>
          <Button onClick={this.onGetStatus}>获取当前加载组件</Button>
          <Button onClick={this.onRemoveA}>卸载 A 组件</Button>
          <Button onClick={this.onGetSwitch}>加载 Switch 组件</Button>
        </div>
      </div>
    )
  }
}

export default connect('b')(X)
