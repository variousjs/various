import React, { ComponentType, Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import getDispatch from './dispatch'
import { preload, isComponentLoaded } from './preload'
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
  onMounted,
}: E) {
  const storeKeys = Object.keys(getStore())
  const currentDispatch = getDispatch(storeDispatcher, componentDispatcher)
  const { components, ...rest } = config
  const symbolModule = Symbol('module')
  const [name, module = symbolModule] = nameWidthModule.split('.')

  class R extends Component<{
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

    postMessage = getPostMessage(nameWidthModule)

    componentDidMount() {
      this.setState({ componentExist: isComponentLoaded(name) })
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
      let mountedComponents = this.$getMountedComponents()
      mountedComponents = mountedComponents.filter((item) => item !== nameWidthModule)
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

      window.requirejs([name], async (C: RequiredComponent) => {
        if (this.isUnMounted) {
          return
        }

        if (!C) {
          this.setState({ errorMessage: 'Not content', errorType: 'INVALID_COMPONENT' })
          return
        }

        const componentNode = module === symbolModule ? C.default || C : C[module]

        if (!componentNode) {
          this.setState({ errorMessage: 'Module not defined', errorType: 'INVALID_COMPONENT' })
          return
        }

        if (typeof componentNode !== 'function') {
          this.setState({ errorMessage: 'Component cannot be executed', errorType: 'INVALID_COMPONENT' })
          return
        }

        const mountedComponents = getStore()[MOUNTED_COMPONENTS] as string[]
        const actions: Entry['actions'] = {}

        if (!mountedComponents.includes(nameWidthModule)) {
          mountedComponents.push(nameWidthModule)
        }

        Object
          .getOwnPropertyNames(componentNode)
          .forEach((method) => {
            if (typeof componentNode[method] !== 'function') {
              return
            }
            if (method === '$onMessage') {
              this.unsubscribe = subscribe(getOnMessage(nameWidthModule, componentNode[method]))
              return
            }
            if (!IGNORE_STATIC_METHODS.includes(method)) {
              actions[method] = componentNode[method]
            }
          })

        componentDispatcher[nameWidthModule] = actions // eslint-disable-line no-param-reassign

        this.ComponentNode = componentNode

        this.setState({ componentReady: true }, () => {
          if (onMounted) {
            onMounted()
          } else {
            dispatch({ [MOUNTED_COMPONENTS]: mountedComponents }, true)
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

    $getMountedComponents = () => getStore()[MOUNTED_COMPONENTS] as string[]

    $render: ComponentProps['$render'] = ({
      name: componentName,
      url,
      target,
      props,
      module: componentModule,
      onMounted: onMountedFn,
    }) => {
      if (url) {
        // if define url, means replace component
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
        onMounted: onMountedFn,
      })
      const Fc = (p: { [key: string]: any }) => (<C {...p} />)

      render(<Fc {...props} />, target)
      return () => unmountComponentAtNode(target as Element)
    }

    render() {
      const {
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

      return (
        <ComponentNode
          {...componentProps}
          $config={rest}
          $dispatch={this.dispatch}
          $store={store}
          $render={onMounted ? undefined : this.$render}
          $preload={preload}
          $postMessage={this.postMessage}
          $getMountedComponents={this.$getMountedComponents}
        />
      )
    }
  }

  // A spread argument must either have a tuple type or be passed to a rest parameter.ts(2556)
  const [key0, ...keyn] = storeKeys
  return connect(key0, ...keyn)(R)
}

export default componentCreator
