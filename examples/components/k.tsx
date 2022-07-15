import React, { Component, FC, useState } from 'react'
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
  const { $t, $dispatch } = props
  const [lang, setLang] = useState('')
  const getLang = async () => {
    const current: string = await $dispatch('store', 'getLocale')
    setLang(current)
  }

  return (
    <>
      <p>{$t('title', '标题')}</p>
      <p>{$t('titl', '标题')}</p>
      <p>{lang}</p>
      <Button onClick={() => $dispatch('store', 'setLocale', 'zh-CN')}>zh-CN</Button>
      <Button onClick={getLang}>get locale</Button>
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

export const T: FC<ComponentProps> = (props) => {
  const { $t } = props

  return (
    <>
      <p>{$t('title', '标题')}</p>
    </>
  )
}
