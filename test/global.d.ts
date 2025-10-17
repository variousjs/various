export {}

declare global {
  interface Window {
    Cypress: any,
    middlewaresEnabled?: boolean,
  }
}
