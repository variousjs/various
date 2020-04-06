import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-dom'
import { HashRouter as Router, withRouter } from 'react-router-dom'
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
  COMPONENT_PACKAGES,
} from './config'

export default (config) => {
  const {
    packages,
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
  const componentCreator = (name) => withRouter((router) => {
    const R = createComponent({
      name,
      storeDispatcher,
      componentDispatcher,
      Loading: L,
      Error: E,
      router,
      config: rest,
    })
    return <R />
  })
  const Routes = getRoutes(E)
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)

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
        if (key !== MOUNTED_COMPONENTS && key !== COMPONENT_PACKAGES) {
          storeData[key] = this.props[key]
        }
      })

      return (
        <C
          dispatch={this.dispatch}
          Routes={Routes}
          componentCreator={componentCreator}
          store={storeData}
          MOUNTED_COMPONENTS={this.props[MOUNTED_COMPONENTS]}
          CONFIG={{ ...rest, packages: this.props[COMPONENT_PACKAGES] }}
        />
      )
    }
  }

  createStore({
    ...store,
    [MOUNTED_COMPONENTS]: [],
    [COMPONENT_PACKAGES]: packages,
  })

  const X = connect(...storeKeys)(withRouter(R))

  render((
    <Router>
      <X />
    </Router>
  ), document.querySelector('#root'))
}
