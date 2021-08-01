import { ComponentType } from 'react'
import getDispatch from './dispatch'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS, ERROR_TYPE } from '../config'
import {
  Dependency, ny, Entry, HumpbackConfig, ErrorState, ErrorType, Component, connectComponent,
} from '../types'

interface RequireError extends Error {
  requireType: string,
  requireModules: string[],
  originalError: Error,
}

type P = {
  React: Dependency.React,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  nycticorax: ny,
}

type E = {
  name: string,
  storeDispatcher: Entry['actions'],
  componentDispatcher: {
    [name: string]: Entry['actions'],
  },
  config: HumpbackConfig,
  Loader: Entry['Loader'],
  Error: Entry['Error'],
}

declare global {
  interface Require {
    s: any,
  }
}

export default function ({
  React,
  ReactRouterDOM,
  nycticorax,
}: P, {
  config,
  name,
  storeDispatcher,
  componentDispatcher,
  Loader,
  Error,
}: E) {
  const { withRouter } = ReactRouterDOM
  const { connect, getStore, dispatch } = nycticorax
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { components, dependencies, ...rest } = config

  class R extends React.Component<Component['$router'] & {
    silent: Boolean | undefined,
    MOUNTED_COMPONENTS: string[],
    dispatch: typeof dispatch,
    [key: string]: unknown,
  }, ErrorState & {
    component: ComponentType | undefined,
  }> {
    state = {
      component: undefined,
      errorType: '',
      errorMessage: '',
    }

    dispatch = currentDispatch.bind(this, name)

    componentDidMount() {
      this.mountComponent()
    }

    componentDidCatch(e: Error) {
      this.setState({ errorType: 'SCRIPT_ERROR', errorMessage: e.message })
      window.requirejs.undef(name)
      window.requirejs.config({
        paths: {
          [name]: `${components[name]}#`,
        },
      })
      this.unMountComponent()
    }

    componentWillUnmount() {
      this.unMountComponent()
    }

    unMountComponent = () => {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
      mountedComponents = mountedComponents.filter((item) => item !== name)
      dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[name]
    }

    mountComponent = () => {
      try {
        const { registry, urlFetched } = window.requirejs.s.contexts._
        Object.keys(registry).forEach((key) => {
          if (registry[key].error) {
            delete urlFetched[registry[key].map.url]
            delete registry[key]
          }
        })
      } catch (e) {
        // ignore
      }

      type Com = ComponentType & Entry['actions'] & {
        default: ComponentType,
      }

      window.requirejs([name], (C: Com) => {
        if (!C) {
          this.setState({ errorType: 'COMPONENT_NAME_ERROR' })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
        const actions: Entry['actions'] = {}

        if (!mountedComponents.includes(name)) {
          mountedComponents.push(name)
        }

        Object
          .getOwnPropertyNames(C)
          .forEach((method) => {
            if (!IGNORE_STATIC_METHODS.includes(method) && typeof C[method] === 'function') {
              actions[method] = C[method]
            }
          })

        componentDispatcher[name] = actions // eslint-disable-line no-param-reassign

        this.setState({ component: C.default || C }, () => {
          dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
        })
      }, (e: RequireError) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${components[name]}#`,
          },
        })

        const [module] = e.requireModules

        this.setState({
          errorType: module === name ? 'LOADING_ERROR' : 'DEPENDENCIES_LOADING_ERROR',
          errorMessage: e.message,
        })
      })
    }

    onReload = () => {
      this.setState({
        component: undefined,
        errorType: '',
        errorMessage: '',
      }, () => {
        this.mountComponent()
      })
    }

    render() {
      const {
        history,
        location,
        match,
        staticContext,

        // eslint-disable-next-line react/prop-types
        MOUNTED_COMPONENTS: mountedComponents, silent, ...propsRest
      } = this.props
      const { component, errorMessage, errorType } = this.state
      const store: Entry['store'] = {}
      const componentProps: Entry['store'] = {}

      if (errorType) {
        return !silent
          ? (
            <Error
              type={ERROR_TYPE[errorType as ErrorType]}
              message={errorMessage}
              reload={errorType === 'COMPONENT_NAME_ERROR' ? undefined : this.onReload}
            />
          )
          : null
      }

      if (!component) {
        return !silent
          ? (
            <Loader />
          )
          : null
      }

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          // eslint-disable-next-line react/destructuring-assignment
          store[key] = this.props[key]
        }
      })

      Object.keys(propsRest).forEach((key) => {
        if (store[key] !== propsRest[key]) {
          componentProps[key] = propsRest[key]
        }
      })

      const C = component as unknown as ComponentType<Component>

      return (
        <C
          // eslint-disable-next-line react/jsx-props-no-spreading
          // {...propsRest}
          {...componentProps}
          $config={rest}
          $dispatch={this.dispatch}
          $store={store}
          $mounted={mountedComponents}
          $router={{
            history,
            location,
            match,
            staticContext,
          }}
        />
      )
    }
  }

  const RwithRouter = withRouter(R) as unknown as connectComponent

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  return connect(key0, ...keyn)(RwithRouter)
}
