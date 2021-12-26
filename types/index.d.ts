declare module '@variousjs/various' {
  import { RouteComponentProps } from 'react-router-dom'
  import { ComponentType, Component } from 'react'

  type $dispatch = (type: string, method: string, value?: any) => unknown
  type $render = (params: {
    name: string,
    url?: string,
    module?: string,
    props?: { [key: string]: any },
    target: Element | null,
    onMounted?: () => void,
  }) => () => void
  type $preload = (names: string[]) => Promise<void>

  export { default as Store, Connect, Dispatch } from 'nycticorax'

  export class Router extends Component {}
  export {
    Route,
    Link,
    generatePath,
    Redirect,
    Prompt,
    NavLink,
  } from 'react-router-dom'

  export interface ComponentProps<S = {}, C = {}> {
    $config: Readonly<C>,
    $mounted: string[],
    $router?: RouteComponentProps<{ [key: string]: string }>,
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $render?: $render,
    $preload?: $preload,
  }

  export interface ErrorProps {
    reload?: () => void,
    type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'ROUTER_ERROR' | 'CONTAINER_ERROR',
    message?: string,
  }

  export interface ContainerProps<S = {}, C = {}> {
    $config: Readonly<C>,
    $component: (name: string) => ComponentType<{
      silent?: boolean,
      [key: string]: any,
    }>,
    $store: Readonly<S>,
    $mounted: string[],
    $dispatch: $dispatch,
    $render: $render,
    $preload: $preload,
    $router: RouteComponentProps<{ [key: string]: string }>,
  }

  type Store<S> = {
    getStore: () => S,
    dispatch: (next: Partial<S>) => void,
  }

  export type Actions<S = {}> = {
    [name: string]: (store: Store<S>, ...args: any[]) => unknown,
  }
}
