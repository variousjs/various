/* eslint-disable import/no-duplicates */
declare module 'antd' {
  import { ComponentType } from 'react'

  export const Button: ComponentType<any>
  export const ConfigProvider: ComponentType<any>
  export const message: { [key: string]: (m: string | string[]) => void }
  export const DatePicker: ComponentType
  export const locales: { [key: string]: any }
}

declare module 'rc-table' {
  import { ComponentType } from 'react'

  const A: ComponentType
  export default A
}
declare module 'table' {
  import { ComponentType } from 'react'

  const A: ComponentType
  export default A
}
