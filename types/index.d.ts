declare module 'humpback' {
  import { RouteComponentProps } from 'react-router-dom'

  export type ComponentProps<C = any, S = any> = {
    $config: C,
    $mounted: string[],
    $router: RouteComponentProps<{ [key: string]: string }>,
    $store: S,
    $dispatch: (type: string, method: string, value?: any) => any,
  }
}
