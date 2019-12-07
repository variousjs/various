import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import createComponent from './create-component'

function Routes({ routes, methods }) {
  const componentMethods = {}

  return routes.map(({ path, components }) => {
    const [name] = Object.keys(components)

    return (
      <Route
        key={path}
        exact
        path={path}
        component={createComponent(name, methods, componentMethods)}
      />
    )
  })
}

Routes.propTypes = {
  routes: PropTypes.array.isRequired,
  methods: PropTypes.object.isRequired,
}

export default Routes
