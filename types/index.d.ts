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
  type $postMessage = (name: string, value?: any) => unknown

  export { default as Store, Connect, Dispatch } from 'nycticorax'

  export class Router extends Component {}
  export {
    Route,
    Link,
    generatePath,
    Redirect,
    Prompt,
    NavLink,
    matchPath,
    Switch,
  } from 'react-router-dom'

  export interface ComponentProps<S = {}, C = {}> {
    $config: Readonly<C>,
    $router?: RouteComponentProps<{ [key: string]: string }>,
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $render?: $render,
    $preload?: $preload,
    $postMessage: $postMessage,
  }

  export interface ErrorProps {
    reload?: () => void,
    type: 'LOADING_ERROR' | 'DEPENDENCIES_LOADING_ERROR' | 'NOT_DEFINED' | 'INVALID_COMPONENT' | 'SCRIPT_ERROR' | 'ROUTER_ERROR' | 'CONTAINER_ERROR',
    message?: string,
  }

  export interface ContainerProps<C = {}> {
    $config: Readonly<C>,
    $component: (name: string) => ComponentType<{
      $silent?: boolean,
      [key: string]: any,
    }>,
  }

  type Store<S> = {
    getStore: () => S,
    dispatch: (next: Partial<S>) => void,
  }

  export type Actions<S = {}> = {
    [name: string]: (store: Store<S>, ...args: any[]) => unknown,
  }

  export type Message = {
    type: string,
    name: string,
    value?: any,
  }

  export type OnMessage<S = {}> = (store: Store<S>, message: Message) => void
}
