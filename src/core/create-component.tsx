import { ComponentType } from 'react'
import { Config } from '@variousjs/various'
import getDispatch from './dispatch'
import { IGNORE_STATIC_METHODS, MOUNTED_COMPONENTS, ERROR_TYPE } from '../config'
import preload from './preload'
import {
  Dependency,
  Connector,
  Entry,
  ErrorState,
  ComponentProps,
} from '../types'

interface P {
  React: Dependency.React,
  ReactDOM: Dependency.ReactDOM,
  ReactRouterDOM: Dependency.ReactRouterDOM,
  nycticorax: Connector.nycticorax,
}

interface E {
  name: string,
  storeDispatcher: Entry['actions'],
  componentDispatcher: {
    [name: string]: Entry['actions'],
  },
  config: Config,
  Loader: Entry['Loader'],
  Error: Entry['Error'],
  routerProps?: ComponentProps['$router'] | {},
  onMounted?: () => void,
}

type RequiredComponent = ComponentType<ComponentProps> & Entry['actions'] & {
   [key: string]: RequiredComponent,
}

function componentCreator({
  React,
  ReactDOM,
  ReactRouterDOM,
  nycticorax,
}: P, {
  config,
  name: nameWidthModule,
  storeDispatcher,
  componentDispatcher,
  Loader,
  Error,
  routerProps,
  onMounted = () => undefined,
}: E) {
  const { render, unmountComponentAtNode } = ReactDOM
  const { withRouter } = ReactRouterDOM
  const { connect, getStore, dispatch } = nycticorax
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)
  const { components, ...rest } = config
  const [name, module = Symbol('module')] = nameWidthModule.split('.')

  class R extends React.Component<ComponentProps['$router'] & {
    silent?: boolean,
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

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

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
      this.ComponentNode = null
      this.unMountComponent()
      this.isUnMounted = true
    }

    unMountComponent = () => {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS]
      mountedComponents = mountedComponents.filter((item) => item !== name)
      dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[nameWidthModule]
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
        if (this.isUnMounted) {
          return
        }

        if (!C) {
          this.setState({ errorType: 'INVALID_COMPONENT' })
          return
        }

        const componentNode = C[module as string] || C.default || C

        if (typeof componentNode !== 'function') {
          this.setState({ errorType: 'INVALID_COMPONENT' })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS]
        const actions: Entry['actions'] = {}

        if (!mountedComponents.includes(name)) {
          mountedComponents.push(name)
        }

        Object
          .getOwnPropertyNames(componentNode)
          .forEach((method) => {
            if (!IGNORE_STATIC_METHODS.includes(method) && typeof componentNode[method] === 'function') {
              actions[method] = componentNode[method]
            }
          })

        componentDispatcher[nameWidthModule] = actions // eslint-disable-line no-param-reassign

        this.ComponentNode = componentNode

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

        if (this.isUnMounted) {
          return
        }

        const [requireModule] = e.requireModules

        this.setState({
          errorType: requireModule === name ? 'LOADING_ERROR' : 'DEPENDENCIES_LOADING_ERROR',
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

    $render: ComponentProps['$render'] = ({
      name: componentName,
      url,
      target,
      props,
      module: componentModule,
      onMounted: onMountedFn,
    }) => {
      const {
        history,
        location,
        match,
        staticContext,
      } = this.props
      const router = {
        history,
        location,
        match,
        staticContext,
      }

      if (url) {
        window.requirejs.undef(componentName)
        window.requirejs.config({
          paths: {
            [componentName]: `${url}#`,
          },
        })
      }

      const C = componentCreator({
        React,
        ReactDOM,
        ReactRouterDOM,
        nycticorax,
      }, {
        name: componentModule ? `${componentName}.${componentModule}` : componentName,
        storeDispatcher,
        componentDispatcher,
        Loader,
        Error,
        config: { ...rest, components },
        routerProps: router,
        onMounted: onMountedFn,
      })
      const Fc = (p: { [key: string]: any }) => (<C {...p} />)

      render(<Fc {...props} />, target)
      return () => unmountComponentAtNode(target as Element)
    }

    render() {
      const {
        history,
        location,
        match,
        staticContext,

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        dispatch: componentDispatch,
        MOUNTED_COMPONENTS: mountedComponents,
        silent,
        ...propsRest
      } = this.props
      const { componentReady, errorMessage, errorType } = this.state
      const store: Entry['store'] = {}
      const componentProps: Entry['store'] = {}
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (errorType) {
        return !silent
          ? (
            <Error
              type={ERROR_TYPE[errorType]}
              message={errorMessage}
              reload={errorType === 'INVALID_COMPONENT' ? undefined : this.onReload}
            />
          )
          : null
      }

      if (!componentReady) {
        return !silent ? (<Loader />) : null
      }

      storeKeys.forEach((key) => {
        if (key !== MOUNTED_COMPONENTS) {
          store[key] = this.props[key]
        }
      })

      Object.keys(propsRest).forEach((key) => {
        if (store[key] !== propsRest[key]) {
          componentProps[key] = propsRest[key]
        }
      })

      const router = routerProps || {
        history,
        location,
        match,
        staticContext,
      }
      const $router = Object.keys(router).length ? router : undefined

      return (
        <ComponentNode
          {...componentProps}
          $config={rest}
          $dispatch={this.dispatch}
          $store={store}
          $mounted={mountedComponents}
          $router={$router as ComponentProps['$router']}
          $render={routerProps ? undefined : this.$render}
          $preload={routerProps ? undefined : preload}
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
