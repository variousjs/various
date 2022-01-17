import React, { ComponentType } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { withRouter } from 'react-router-dom'
import getDispatch from './dispatch'
import preload from './preload'
import {
  connect,
  getStore,
  dispatch,
  subscribe,
} from './store'
import { getOnMessage, getPostMessage } from './message'
import {
  IGNORE_STATIC_METHODS,
  MOUNTED_COMPONENTS,
  ERROR_TYPE,
  RETRY_COUNT,
} from '../config'
import {
  RequireError,
  Connector,
  Entry,
  ErrorState,
  ComponentProps,
  Config,
} from '../types'

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
  config,
  name: nameWidthModule,
  storeDispatcher,
  componentDispatcher,
  Loader,
  Error,
  routerProps,
  onMounted = () => undefined,
}: E) {
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(dispatch, storeDispatcher, componentDispatcher)
  const { components, ...rest } = config
  const [name, module = Symbol('module')] = nameWidthModule.split('.')

  class R extends React.Component<ComponentProps['$router'] & {
    $silent?: boolean,
    dispatch: typeof dispatch,
    [key: string]: unknown,
  }, ErrorState & {
    componentReady: boolean,
    componentExist: boolean | undefined,
  }> {
    state = {
      componentExist: undefined,
      componentReady: false,
      errorType: undefined,
      errorMessage: '',
    }

    private unsubscribe: () => void

    private ComponentNode: RequiredComponent | null

    private isUnMounted?: boolean

    private retryCount: number = 0

    dispatch = currentDispatch.bind(this, name)

    postMessage = getPostMessage(name)

    componentDidMount() {
      this.setState({ componentExist: window.requirejs.specified(name) })
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

      if (this.unsubscribe) {
        this.unsubscribe()
      }
    }

    unMountComponent = () => {
      let mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
      mountedComponents = mountedComponents.filter((item) => item !== name)
      dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)

      // eslint-disable-next-line no-param-reassign
      delete componentDispatcher[nameWidthModule]
    }

    mountComponent = () => {
      if (name === 'store') {
        this.setState({ errorType: 'INVALID_COMPONENT', errorMessage: 'Cannot load component named `store`' })
        return
      }

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

        const mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
        const actions: Entry['actions'] = {}

        if (!mountedComponents.includes(name)) {
          mountedComponents.push(name)
        }

        Object
          .getOwnPropertyNames(componentNode)
          .forEach((method) => {
            if (method === '$onMessage') {
              this.unsubscribe = subscribe(getOnMessage(name, componentNode[method]))
              return
            }

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
      }, (e: RequireError) => {
        window.requirejs.undef(name)
        window.requirejs.config({
          paths: {
            [name]: `${components[name]}#`,
          },
        })

        if (this.isUnMounted) {
          return
        }

        if (this.retryCount < RETRY_COUNT) {
          this.retryCount += 1
          setTimeout(this.mountComponent, 1000)
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
        errorType: undefined,
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
        $silent,
        ...propsRest
      } = this.props
      const {
        componentReady,
        errorMessage,
        errorType,
        componentExist,
      } = this.state
      const store: Entry['store'] = {}
      const componentProps: Entry['store'] = {}
      const ComponentNode = this.ComponentNode as RequiredComponent

      if (errorType) {
        return !$silent
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
        return !$silent && componentExist === false ? (<Loader />) : null
      }

      storeKeys.forEach((key) => {
        store[key] = this.props[key]
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
          $router={$router as ComponentProps['$router']}
          $render={routerProps ? undefined : this.$render}
          $preload={routerProps ? undefined : preload}
          $postMessage={this.postMessage}
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
