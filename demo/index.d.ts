declare module 'antd' {
  import { ComponentType } from 'react'

  export const Button: ComponentType<any>
  export const ConfigProvider: ComponentType<any>
  export const message: { [key: string]: (m: string) => void }
  export const DatePicker: ComponentType
  export const locales: { [key: string]: any }
}
