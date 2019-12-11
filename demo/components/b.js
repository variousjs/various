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
    message.info(this.props.dispatch('a', 'getValue'))
  }

  onSetA = () => {
    this.props.dispatch('a', 'updateValue', Math.random().toFixed(2))
  }

  onSetG = () => {
    this.props.dispatch('global', 'setNumber', Math.random().toFixed(2))
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
          <p>当前路由参数：{match.params.id}</p>
          <Button onClick={this.onGetA}>获取 A 组件的值</Button>
          <Button onClick={this.onSetA}>更新 A 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值</Button>
        </div>
      </div>
    )
  }
}

export default connect('b')(X)
