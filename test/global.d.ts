import { ComponentPublicActionMap } from '@variousjs/various'

export {}

declare global {
  interface Window {
    Cypress: any,
    middlewaresEnabled?: boolean,
  }

  interface Actions extends ComponentPublicActionMap {
    dispatch: {
      update: { value: number, result: void },
    }
  }
}
