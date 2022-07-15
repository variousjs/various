import React, { Component, FC } from 'react'
import { Button } from 'antd'
import { ComponentProps, Ii8nConfig } from '@variousjs/various'
import { Store } from '../types'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

export class C extends Component<ComponentProps<Store>> {
  static $getI18nConfig: Ii8nConfig = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  render() {
    const { $t, $dispatch } = this.props

    return (
      <>
        <h3>{$t('title')}</h3>
        <Button onClick={() => $dispatch('store', 'setLocale', 'zh')}>zh</Button>
        <Button onClick={() => $dispatch('store', 'setLocale', 'en')}>en</Button>
      </>
    )
  }
}

const F: FC<ComponentProps> & { $getI18nConfig: Ii8nConfig } = (props) => {
  const { $t } = props

  return (
    <>
      <h3>{$t('title', '标题')}</h3>
    </>
  )
}

F.$getI18nConfig = () => ({
  localeKey: 'locale',
  resources: {
    zh: Zh,
    en: En,
  },
})

export const G = F
