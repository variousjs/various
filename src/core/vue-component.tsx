import React, { FC } from 'react'
import { createApp, h, ref } from 'vue'
import { ComponentDefaultProps, ModuleDefined } from '@variousjs/various'
import { VUE_FUNCTION_OPTIONS } from './config'
import { getStore, useStore } from './store'
import { getNameWithModule } from './helper'

const vueComponent = (config: ModuleDefined & {
  url?: string,
  watchKeys?: string[],
  onMounted: () => void,
}) => {
  const {
    name,
    module,
    url,
    watchKeys,
    onMounted,
  } = config
  const storeKeys = (watchKeys || Object.keys(getStore()))

  const V: FC<ComponentDefaultProps> = (props) => {
    const $componentProps = useStore(...storeKeys)
  }

  V.displayName = `${getNameWithModule({ name, module })}(vue)`
}

export default vueComponent
