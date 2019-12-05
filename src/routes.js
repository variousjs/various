import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import createComponent from './create-component'

function Routes({ routes, actions }) {
  const componentActions = {}

  return routes.map(({ path, components }) => {
    const [name] = Object.keys(components)

    return (
      <Route
        key={path}
        exact
        path={path}
        component={createComponent(name, actions, componentActions)}
      />
    )
  })
}

Routes.propTypes = {
  routes: PropTypes.array,
  actions: PropTypes.object,
}

Routes.defaultProps = {
  routes: [],
  actions: {},
}

export default Routes
