import React, { Component } from 'react'
import Nycticorax from 'nycticorax'

const {
  createStore,
  connect,
  dispatch,
  getStore,
  subscribe,
} = new Nycticorax()

createStore({ a: 1 })

subscribe((keys) => {
  console.log('subscribe', keys)
})

class X extends Component {
  onClick = () => {
    // console.log(this.props.dispatch('next', 'getA'))
    // this.props.dispatch('next', 'updateA', 6666)
    this.props.dispatch('global', 'updateUserName', '6666')
  }

  render() {
    const { user } = this.props.data
    return (
      <div>
        <p>{user}</p>
        <button onClick={this.onClick}>click</button>
      </div>
    )
  }
}

// const X = connect('a')(T)

X.getA = () => getStore('a')
X.updateA = (value) => {
  dispatch({ a: value })
}

export default X
