declare module '@variousjs/various' {
  import { ComponentType } from 'react'

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
  type $postMessage = (name: string, value?: any) => void
  type $getMountedComponents = () => string[]

  export { default as Store, Connect, Dispatch } from 'nycticorax'

  export interface ComponentProps<S = {}, C = {}> {
    $config: Readonly<C>,
    $store: Readonly<S>,
    $dispatch: $dispatch,
    $render?: $render,
    $preload: $preload,
    $postMessage: $postMessage,
    $getMountedComponents: $getMountedComponents,
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

  export type OnMessage = (message: {
    type: string,
    name: string,
    value?: any,
  }) => void
}
