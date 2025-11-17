import { DependencyType, createComponent } from '@variousjs/various/standalone'
import { isModuleSpecified } from '../core/helper'

const defineAsync = (name: string, dep?: DependencyType) => new Promise<void>((resolve) => {
  window.define(name, [], () => dep)
  const check = () => {
    if (window.requirejs.specified(name)) {
      resolve()
      return
    }
    setTimeout(check, 100)
  }
  check()
})

export function defineModules(
  deps: NonNullable<Parameters<typeof createComponent>['0']['dependencies']>,
) {
  const defines: { key: string, value?: DependencyType }[] = []

  Object.entries(deps).forEach(([key, value]) => {
    if (isModuleSpecified(key) || value === undefined) {
      return
    }

    if (typeof value === 'string') {
      window.requirejs.config({ paths: { [key]: `${value}#${key}` } })
      return
    }

    defines.push({ key, value })
  })

  return Promise.all(defines.map((item) => defineAsync(item.key, item.value)))
}
