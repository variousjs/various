import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { createStore } from 'nycticorax'
import Container from './container'

export default (config) => {
  const { store, ...rest } = config

  createStore({ ...store })

  render((
    <Router>
      <Container {...rest} />
    </Router>
  ), document.querySelector('#root'))
}
