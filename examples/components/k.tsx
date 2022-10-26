import React, { Component, FC, useState, memo } from 'react'
import { Button } from 'antd'
import { ComponentProps, Ii8n } from '@variousjs/various'
import { Store } from '../types'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

export class C extends Component<ComponentProps<Store>> {
  static $i18n: Ii8n = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  nx = memo(this.props.$component('b.D'))

  render() {
    const { $t, $dispatch } = this.props
    const D = this.nx

    return (
      <>
        <h3>{$t('title')}</h3>
        <p>{$t('hello', { name: 1, name2: '999' })}</p>
        <Button onClick={() => $dispatch('store', 'setLocale', 'zh')}>zh</Button>
        <Button id="en" onClick={() => $dispatch('store', 'setLocale', 'en')}>en</Button>
        <D />
      </>
    )
  }
}

const F: FC<ComponentProps> & { $i18n: Ii8n } = (props) => {
  const { $t, $dispatch } = props
  const [lang, setLang] = useState('')
  const getLang = async () => {
    const current: string = await $dispatch('store', 'getLocale')
    setLang(current)
  }

  return (
    <>
      <p>{$t('title', {})}</p>
      <p id="titl">{$t('titl')}</p>
      <p>{lang}</p>
      <Button id="zh-cn" onClick={() => $dispatch('store', 'setLocale', 'zh-CN')}>zh-CN</Button>
      <Button onClick={getLang}>get locale</Button>
    </>
  )
}

F.$i18n = () => ({
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
      {/* @ts-ignore */}
      <p>{$t('title', [])}</p>
    </>
  )
}
