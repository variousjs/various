import React, { Component } from 'react'
import { render } from 'react-dom'
import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { createStore } from 'nycticorax'
import createComponent from './create-component'

export default (config) => {
  const { store, actions: storeActions, routers } = config
  const componentActions = {}

  createStore({ store })

  class Menu extends Component {
    render() {
      return routers.map(({ path, label }) => (
        <Link to={path} key={path}>{label}</Link>
      ))
    }
  }

  class Container extends Component {
    render() {
      return routers.map(({ path, components }) => {
        const [name] = Object.keys(components)

        return (
          <Route
            key={path}
            exact
            path={path}
            component={createComponent(name, storeActions, componentActions)}
          />
        )
      })
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

  render(<X />, document.querySelector('#root'))
}
