import { memo } from 'react'
import { getConfig, createComponent } from '@variousjs/various'
import { Config } from './types'

export const getPageComponents = (type: string) => {
  const config = getConfig() as Config
  const page = config.pages.find((p) => p.component === type)

  if (!page) {
    return {}
  }
  return page.components.reduce((prev, current) => {
    // eslint-disable-next-line no-param-reassign
    prev[current] = memo(createComponent(current))
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)
}
