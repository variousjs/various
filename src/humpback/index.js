import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter, Switch } from 'react-router-dom'
import { createStore, connect, dispatch } from './store'
import getRoutes from './routes'
import createComponent from './create-component'
import defaultDispatcher from './dispatcher'
import getDispatch from './dispatch'
import {
  Loading,
  Error,
  Container,
  MOUNTED_COMPONENTS,
} from './config'

export default (config) => {
  const {
    dependencies,
    components,
    store = {},
    dispatcher = {},
    loading: L = Loading,
    error: E = Error,
    container: C = Container,
    ...rest
  } = config
  const storeKeys = Object.keys(store).concat([MOUNTED_COMPONENTS])
  const componentDispatcher = {}
  const storeDispatcher = { ...dispatcher, ...defaultDispatcher }
  const COMPONENTS = {}
  const Routes = getRoutes(E)
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
  })

  Object.keys(components).forEach((name) => {
    const R = createComponent({
      name,
      storeDispatcher,
      componentDispatcher,
      Loading: L,
      Error: E,
      config: rest,
    })
    COMPONENTS[name] = () => (<R />)
  })

  const componentCreator = (name) => {
    if (COMPONENTS[name]) {
      return COMPONENTS[name]
    }
    return () => (<E error="Component undefined" />)
  }

  class R extends Component {
    static propTypes = {
      history: PropTypes.func.isRequired,
    }

    state = {
      error: undefined,
    }

    dispatch = currentDispatch.bind(this)

    componentDidMount() {
      const { history } = this.props
      this.unsubscribe = history.listen(() => {
        Object.keys(componentDispatcher).forEach((key) => delete componentDispatcher[key])
        dispatch({ [MOUNTED_COMPONENTS]: [] }, true)
      })
    }

    componentDidCatch(e) {
      this.setState({ error: e.message || 'Container Error' })
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    render() {
      const { error } = this.state

      if (error) {
        return (<E error={error} />)
      }

      const storeData = {}

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          storeData[key] = this.props[key]
        }
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={Routes}
          store={storeData}
          componentCreator={componentCreator}
          MOUNTED_COMPONENTS={this.props[MOUNTED_COMPONENTS]}
          CONFIG={rest}
        />
      )
    }
  }

  const X = connect(...storeKeys)(withRouter(R))

  render((
    <Router>
      <Switch>
        <X />
      </Switch>
    </Router>
  ), document.querySelector('#root'))
}
