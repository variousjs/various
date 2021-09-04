declare module 'humpback' {
  import { RouteComponentProps } from 'react-router-dom'
  import { ComponentType, ReactNode } from 'react'

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
    Router: ComponentType<{ children: ReactNode }>,
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
  }

  type Nycticorax<S> = {
    getStore: () => S,
    dispatch: (next: Partial<S>) => void,
  }

  export type Actions<S = {}> = {
    [name: string]: (nycticorax: Nycticorax<S>, ...args: any[]) => unknown,
  }

  export interface Entry<S = {}, C = {}> {
    store?: Readonly<S>,
    actions?: Actions<S>,
    Loader?: ComponentType,
    Error?: ComponentType<ErrorProps>,
    Container: ComponentType<ContainerProps<S, C>>,
  }
}
