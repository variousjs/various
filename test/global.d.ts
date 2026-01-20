export {}

declare global {
  interface Window {
    Cypress: any,
    middlewaresEnabled?: boolean,
  }

  interface Actions {
    dispatch: {
      update: { value: number, result: void },
    }
  }
}
