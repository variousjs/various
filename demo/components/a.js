import React, { Component } from 'react'
import { Button, message } from 'antd'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ a: '9' })

class X extends Component {
  static getValue = () => getStore().a

  static updateValue = (value) => {
    dispatch({ a: value })
  }

  state = {
    componentB: false,
  }

  static getDerivedStateFromProps(props) {
    if (props.store.LOADED_COMPONENTS.includes('b')) {
      return { componentB: true }
    }
    return null
  }

  onGetB = () => {
    message.info(this.props.dispatch('b', 'getValue'))
  }

  onSetB = () => {
    this.props.dispatch('b', 'updateValue', Math.random().toFixed(2))
  }

  onSetG = async () => {
    await this.props.dispatch('global', 'updateUserName', Math.random())
    message.success('更新完成')
  }

  render() {
    const { user } = this.props.store
    const { a } = this.props
    const { componentB } = this.state

    return (
      <div>
        <p style={{ fontSize: 100 }}>A</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>全局值：{user.name}</p>
          <p>组件值: {a}</p>
          <p>B 组件加载完成：{componentB ? 'yes' : 'no'}</p>
          <Button onClick={this.onGetB}>获取 B 组件的值</Button>
          <Button onClick={this.onSetB}>更新 B 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值(异步)</Button>
        </div>
      </div>
    )
  }
}

export default connect('a')(X)
