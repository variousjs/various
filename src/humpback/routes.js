import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { dispatch } from './store'
import createComponent from './create-component'
import { LOADED_COMPONENTS } from './config'

class RouteWrap extends Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired,
    methods: PropTypes.object.isRequired,
    Loading: PropTypes.element.isRequired,
    Error: PropTypes.element.isRequired,
    componentMethods: PropTypes.object.isRequired,
  }

  state = {
    error: undefined,
  }

  componentDidMount() {
    const { history } = this.props
    this.unsubscribe = history.listen(() => {
      this.props.componentMethods = {}
      dispatch({ [LOADED_COMPONENTS]: [] }, true)
    })
  }

  shouldComponentUpdate(props, { error }) {
    return !!error
  }

  componentDidCatch(e) {
    this.setState({ error: e.message || 'Routes Error' })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { error } = this.state
    const {
      Loading,
      Error,
      routes,
      methods,
      componentMethods,
    } = this.props

    if (error) {
      return (<Error error={error} />)
    }

    return routes.map(({ path, components }) => {
      const component = (router) => components.map((h, i) => {
        const route = router.match.path.split(/\/|:|-/g).join('_')

        return (
          <div
            className={`row-components row-components-${i} route-${route}`}
            key={i}
          >
            {
              h.map((v, j) => (
                <div
                  className={`column-components column-components-${j} route-${route}`}
                  key={j}
                >
                  {
                    v.map((name, k) => {
                      if (!name) {
                        return null
                      }

                      const config = {
                        name,
                        storeMethods: methods,
                        componentMethods,
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
        )
      })

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

export default withRouter(RouteWrap)
