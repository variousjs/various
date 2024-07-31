/* eslint-disable no-param-reassign */
import { memo } from 'react'
import { getConfig, createComponent } from '@variousjs/various'
import { Config } from './types'

export const getPageComponents = (type: string) => {
  const config = getConfig<Config>()
  const page = config.pages.find((p) => p.component === type)

  if (!page) {
    return {}
  }
  return page.components.reduce((prev, current, index) => {
    if (prev[current]) {
      prev[`${current}${index}`] = memo(createComponent({ name: current }))
    } else {
      prev[current] = memo(createComponent({ name: current }))
    }
    return prev
  }, {} as Record<string, ReturnType<typeof createComponent>>)
}
