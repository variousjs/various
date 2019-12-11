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

  onGetB = () => {
    message.info(this.props.dispatch('b', 'getValue'))
  }

  onSetB = () => {
    this.props.dispatch('b', 'updateValue', Math.random().toFixed(2))
  }

  onSetG = () => {
    this.props.dispatch('global', 'updateUserName', Math.random())
  }

  componentDidMount() {
    this.unsubscribe = this.props.subscribe((components) => {
      console.log(components)
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { user } = this.props.store
    const { a } = this.props

    return (
      <div>
        <p style={{ fontSize: 100 }}>A</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>全局值：{user.name}</p>
          <p>组件值: {a}</p>
          <Button onClick={this.onGetB}>获取 B 组件的值</Button>
          <Button onClick={this.onSetB}>更新 B 组件的值</Button>
          <Button onClick={this.onSetG}>更新全局值(异步)</Button>
        </div>
      </div>
    )
  }
}

export default connect('a')(X)
