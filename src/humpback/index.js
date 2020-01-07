/* eslint-disable max-classes-per-file */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
import { createStore, connect, dispatch } from './store'
import Routes from './routes'
import createComponent from './create-component'
import {
  Loading,
  Error,
  Container,
  LOADED_COMPONENTS,
} from './config'

export default (config) => {
  const {
    packages,
    store = {},
    routes = [],
    methods = {},
    loading: L = Loading,
    error: E = Error,
    container: C = Container,
    ...rest
  } = config
  const storeKeys = Object.keys(store).concat([LOADED_COMPONENTS])
  const componentMethods = {}
  const RoutesWidthConfig = () => (
    <Routes
      routes={routes}
      methods={methods}
      Loading={L}
      Error={E}
      componentMethods={componentMethods}
    />
  )
  // const Creator = withRouter(({ name, ...router }) => {
  //   const R = createComponent({
  //     name,
  //     storeMethods: methods,
  //     componentMethods,
  //     Loading: L,
  //     Error: E,
  //     router,
  //   })
  //   return <R />
  // })
  const componentCreator = (name) => withRouter((router) => {
    const R = createComponent({
      name,
      storeMethods: methods,
      componentMethods,
      Loading: L,
      Error: E,
      router,
    })
    return <R />
  })

  createStore({ ...store, [LOADED_COMPONENTS]: [] })

  class R extends Component {
    static propTypes = {
      history: PropTypes.func.isRequired,
    }

    state = {
      error: undefined,
    }

    componentDidMount() {
      const { history } = this.props
      this.unsubscribe = history.listen(() => {
        Object.keys(componentMethods).forEach((key) => delete componentMethods[key])
        dispatch({ [LOADED_COMPONENTS]: [] }, true)
      })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    dispatch = (name, func, ...values) => {
      if (name === 'global') {
        if (!methods[func]) {
          throw `Method \`${func}\` not exists`
        }
        return dispatch(methods[func], ...values)
      }

      // eslint-disable-next-line react/destructuring-assignment
      if (!this.props[LOADED_COMPONENTS].includes(name)) {
        // throw `Component \`${name}\` not ready`
        throw new Error(`Component \`${name}\` not ready`)
      }

      const actions = componentMethods[name]

      if (!actions[func]) {
        throw `Method \`${func}\` not exists`
      }

      return actions[func](...values)
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const storeData = {}

      storeKeys.forEach((key) => {
        // eslint-disable-next-line react/destructuring-assignment
        storeData[key] = this.props[key]
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={RoutesWidthConfig}
          componentCreator={componentCreator}
          config={{ ...rest, routes }}
          store={storeData}
        />
      )
    }
  }

  const X = connect(...storeKeys)(withRouter(R))

  render((
    <Router>
      <X />
    </Router>
  ), document.querySelector('#root'))
}
