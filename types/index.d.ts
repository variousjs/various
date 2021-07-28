declare module 'humpback' {
  import { RouteComponentProps } from 'react-router-dom'

  export type ComponentProps<S> = {
    $config: { [key: string]: unknown },
    $mounted: string[],
    $router: RouteComponentProps,
    $store: S,
    $dispatch: (type: string, method: string, value?: any) => any,
  }
}
