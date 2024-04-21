import React, { FC, useState } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, I18n } from '@variousjs/various'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

const F: FC<ComponentProps> & { $i18n: I18n } = (props) => {
  const { $t, $dispatch } = props
  const [lang, setLang] = useState('')
  const getLang = async () => {
    const current: string = await $dispatch('app', 'getLocale')
    setLang(current)
  }

  return (
    <Descriptions column={2} size="small" title="D" layout="vertical" bordered>
      <Descriptions.Item label="Title">
        <span data-d="title">{$t('title', {})}</span>
      </Descriptions.Item>

      <Descriptions.Item label="I18n Nonexist">
        <span data-d="titl">{$t('titl')}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Lang">
        <span data-d="lang">{lang}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button data-d="action-set" type="primary" size="small" onClick={() => $dispatch('app', 'setLocale', 'zh-CN')}>zh-CN</Button>
        <Button data-d="action-get" type="primary" size="small" onClick={getLang}>Get Locale</Button>
      </Descriptions.Item>
    </Descriptions>
  )
}

F.$i18n = () => ({
  localeKey: 'locale',
  resources: {
    zh: Zh,
    en: En,
  },
})

export default F
