/* eslint-disable max-classes-per-file */
/* eslint-disable import/no-duplicates */

declare module 'antd' {
  import { ComponentType, Component } from 'react'

  export const Button: ComponentType<any>
  export const ConfigProvider: ComponentType<any>
  export const message: { [key: string]: (m: string | string[]) => void }
  export const DatePicker: ComponentType<any>
  export const Alert: ComponentType<any>
  export const Spin: ComponentType<any>
  export class Layout extends Component<any> {
    static Sider: ComponentType<any>

    static Header: ComponentType<any>

    static Content: ComponentType<any>
  }
  export class Menu extends Component<any> {
    static Item: ComponentType<any>
  }
  export class Descriptions extends Component<any> {
    static Item: ComponentType<any>
  }
  export const Icon: ComponentType<any>
  export const Badge: ComponentType<any>
  export const Tag: ComponentType<any>
  export const Input: ComponentType<any>
  export class Collapse extends Component<any> {
    static Panel: ComponentType<any>
  }
  export const locales: { [key: string]: any }
}

declare module 'moment' {
  const A: any
  export default A
}

declare module 'module-error' {
  const A: any
  export default A
}

declare module 'module-error2' {
  const A: any
  export default A
}

declare module 'rc-table' {
  import { ComponentType } from 'react'

  const A: ComponentType
  export default A
}

declare module 'rc-table2' {
  import { ComponentType } from 'react'

  const A: ComponentType
  export default A
}

declare module 'table' {
  import { ComponentType } from 'react'

  const A: ComponentType
  export default A
}

declare module 'helper' {
  export const getName: () => string
  export const setEn: () => Promise<void>
  export const sendAbc: () => void
}
