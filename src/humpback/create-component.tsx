import { ComponentType } from 'react'
import getDispatch from './dispatch'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS, ERROR_TYPE } from '../config'
import {
  Dependency, Connector, Entry, HumpbackConfig, ErrorState, ComponentProps,
} from '../types'

interface P {
  React: Dependency.React,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  nycticorax: Connector.nycticorax,
}

interface E {
  name: string,
  storeDispatcher: Entry['actions'],
  componentDispatcher: {
    [name: string]: Entry['actions'],
  },
  config: HumpbackConfig,
  Loader: Entry['Loader'],
  Error: Entry['Error'],
  routerProps?: ComponentProps['$router'] | {},
  onMounted?: () => void,
}

type RequiredComponent = ComponentType<ComponentProps> & Entry['actions'] & {
   default: RequiredComponent,
}

function componentCreator({
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
  routerProps,
  onMounted = () => undefined,
}: E) {
  const { withRouter } = ReactRouterDOM
  const { connect, getStore, dispatch } = nycticorax
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)
  const { components, ...rest } = config

  class R extends React.Component<ComponentProps['$router'] & {
    silent: Boolean | undefined,
    MOUNTED_COMPONENTS: string[],
    dispatch: typeof dispatch,
    [key: string]: unknown,
  }, ErrorState & {
    componentReady: boolean,
  }> {
    state = {
      componentReady: false,
      errorType: '',
      errorMessage: '',
    }

    private ComponentNode: RequiredComponent

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
      this.ComponentNode = null as RequiredComponent
      this.unMountComponent()
    }

    unMountComponent = () => {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS]
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

      window.requirejs([name], (C: RequiredComponent) => {
        if (!C) {
          this.setState({ errorType: 'COMPONENT_NAME_ERROR' })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS]
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

        this.ComponentNode = C.default || C

        this.setState({ componentReady: true }, () => {
          if (!routerProps) {
            dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
          } else {
            onMounted()
          }
        })
      }, (e: Dependency.RequireError) => {
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
        componentReady: false,
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

        MOUNTED_COMPONENTS: mountedComponents, silent, ...propsRest
      } = this.props
      const { componentReady, errorMessage, errorType } = this.state
      const store: Entry['store'] = {}
      const componentProps: Entry['store'] = {}
      const { ComponentNode } = this

      if (errorType) {
        return !silent
          ? (
            <Error
              type={ERROR_TYPE[errorType]}
              message={errorMessage}
              reload={errorType === 'COMPONENT_NAME_ERROR' ? undefined : this.onReload}
            />
          )
          : null
      }

      if (!componentReady) {
        return !silent ? (<Loader />) : null
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

      const $router = routerProps || {
        history,
        location,
        match,
        staticContext,
      }

      return (
        <ComponentNode
          {...componentProps}
          $config={rest}
          $dispatch={this.dispatch}
          $store={store}
          $mounted={mountedComponents}
          $router={$router as ComponentProps['$router']}
        />
      )
    }
  }

  const RwithRouter: unknown = routerProps ? R : withRouter(R)

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  return connect(key0, ...keyn)(RwithRouter as Connector.connect)
}

export default componentCreator
