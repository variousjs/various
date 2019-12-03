import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { connect, createStore } from 'nycticorax'

createStore({ data: { user: 'name' } })

const staticMethodIgnores = ['name', 'prototype', 'length', 'propTypes', 'defaultProps']

const globalActions = {}

const appActions = {
  updateUserName({ dispatch, getStore }, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const { data } = getStore()
        data.user = value
        dispatch({ data })
        resolve()
      }, 1000)
    })
  }
}

class Menu extends Component {
  render() {
    return window.config.routers.map(({ path, label }) => (
      <Link to={path} key={path}>{label}</Link>
    ))
  }
}

function createComponent(name) {
  class O extends Component {
    state = {
      components: {}
    }

    componentDidMount() {
      const { components } = this.state

      setTimeout(() => {
        window.require([name], (C) => {
          const actions = {}

          Object
            .getOwnPropertyNames(C)
            .forEach((name) => {
              if (!staticMethodIgnores.includes(name)) {
                actions[name] = C[name]
              }
            })

          globalActions[name] = actions

          components.C = C
          this.setState({ components })
        })
      }, 1000)
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global' && appActions[func]) {
        return this.props.dispatch(appActions[func], ...values)
      }
      const actions = globalActions[name]
      if (actions) {
        return actions[func](...values)
      }
    }

    render() {
      const { C } = this.state.components
      const { data } = this.props

      if (!C) {
        return (
          <div>loading</div>
        )
      }

      return (
        <C data={data} dispatch={this.dispatch} />
      )
    }
  }

  return connect('data')(O)
}

class Container extends Component {
  render() {
    return window.config.routers.map(({ path, component }) => (
      <Route
        key={path}
        exact
        path={path}
        component={createComponent(component)}
      />
    ))
  }
}

class X extends Component {
  render() {
    return (
      <>
        <Router>
          <Menu />
          <Container />
        </Router>
      </>
    )
  }
}

export default () => render(<X />, document.querySelector('#root'))
