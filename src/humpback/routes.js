import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import createComponent from './create-component'

export default class extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    methods: PropTypes.object.isRequired,
    Loading: PropTypes.element.isRequired,
    Error: PropTypes.element.isRequired,
  }

  componentMethods = {}

  state = {
    error: undefined,
  }

  componentDidCatch(e) {
    this.setState({ error: e.message || 'Routes Error' })
  }

  shouldComponentUpdate(props, { error }) {
    return error
  }

  render() {
    const { error } = this.state
    const {
      Loading,
      Error,
      routes,
      methods,
    } = this.props

    if (error) {
      return (<Error error={error} />)
    }

    return routes.map(({ path, components }) => {
      const component = (router) => components.map((h, i) => (
        <div
          className={`row-components components-${h.map(t => t.join('-')).join('-')}`} key={i}
        >
          {
            h.map((v, j) => (
              <div
                className={`column-components components-${v.join('-')}`}
                key={j}
                style={{ display: 'inline-block', verticalAlign: 'top' }}
              >
                {
                  v.map((name, k) => {
                    if (!name) {
                      return null
                    }

                    const config = {
                      name,
                      storeMethods: methods,
                      componentMethods: this.componentMethods,
                      Loading,
                      Error,
                      router,
                    }
                    const C = createComponent(config)
                    return (
                      <div key={k} className={`component-${name}`}>
                        <C />
                      </div>
                    )
                  })
                }
              </div>
            ))
          }
        </div>
      ))

      return (
        <Route
          key={path}
          exact
          path={path}
          component={component}
        />
      )
    })
  }
}
