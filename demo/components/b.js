/* eslint-disable react/prop-types */
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

  static updateValue = (value, caller) => {
    message.info(`caller: ${caller}`)
    dispatch({ b: value })
  }

  onGetA = () => {
    try {
      message.info(this.props.dispatch('a', 'getValue'))
    } catch (e) {
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
    const { mountedComponents } = this.props
    message.info(mountedComponents)
  }

  render() {
    const { number } = this.props.store
    const { b, match } = this.props

    console.log('b', this.props)

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
            {match.params.id || '空'}
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
