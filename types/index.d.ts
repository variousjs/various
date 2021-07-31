declare module 'humpback' {
  import { RouteComponentProps } from 'react-router-dom'
  import { ComponentType } from 'react'

  export type ComponentProps<S = any, C = any> = {
    $config: Readonly<C>,
    $mounted: string[],
    $router: RouteComponentProps<{ [key: string]: string }>,
    $store: Readonly<S>,
    $dispatch: (type: string, method: string, value?: any) => any,
  }

  export type ErrorProps = {
    reload: () => void,
    type: string,
    message: string,
  }

  export type ContainerProps<S = any, C = any> = {
    Router: ComponentType,
    $config: Readonly<C>,
    $component: (name: string) => ComponentType<{
      silent?: boolean,
      [key: string]: any,
    }>,
    $store: Readonly<S>,
    $mounted: string[],
    $dispatch: (type: string, method: string, value?: any) => any,
  }

  type Nycticorax<S> = {
    getStore: () => S,
    dispatch: (next: Partial<S>) => void,
  }

  export type Actions<S = any> = {
    [name: string]: (nycticorax: Nycticorax<S>, ...args: any) => any,
  }

  export interface Entry<S = any, C = any> {
    store?: Readonly<S>,
    actions?: Actions<S>,
    Loader?: ComponentType,
    Error?: ComponentType<ErrorProps>,
    Container: ComponentType<ContainerProps<S, C>>,
  }
}
