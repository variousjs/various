import React, { Component } from 'react'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
} = new Nycticorax()

createStore({ a: 1 })

class X extends Component {
  static getA = () => getStore('a')

  static updateA = (value) => {
    dispatch({ a: value })
  }

  onClick = () => {
    console.log(this.props.dispatch('next', 'getA'))
    console.log(this.props.dispatch('global', 'getUserName'))
    this.props.dispatch('next', 'updateA', 6666)
    this.props.dispatch('global', 'updateUserName', 'kcabpmuh')
  }

  render() {
    const { user } = this.props.store
    const { a } = this.props
    return (
      <div>
        <p>{user.name}</p>
        <p>a: {a}</p>
        <button onClick={this.onClick}>click</button>
      </div>
    )
  }
}

export default connect('a')(X)
