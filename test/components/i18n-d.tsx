import React, { FC, useState } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Ii8n } from '@variousjs/various'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

const F: FC<ComponentProps> & { $i18n: Ii8n } = (props) => {
  const { $t, $dispatch } = props
  const [lang, setLang] = useState('')
  const getLang = async () => {
    const current: string = await $dispatch('store', 'getLocale')
    setLang(current)
  }

  return (
    <Descriptions column={2} size="small" title="D" layout="vertical" bordered>
      <Descriptions.Item label="Title">
        <span data-name="i18n-title">{$t('title', {})}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Ii8n Nonexist">
        <span data-name="i18n-title">{$t('titl')}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Lang">
        <span data-name="i18n-title">{lang}</span>
      </Descriptions.Item>

      <Descriptions.Item label="Actions">
        <Button type="primary" size="small" onClick={() => $dispatch('store', 'setLocale', 'zh-CN')}>zh-CN</Button>
        <Button type="primary" size="small" onClick={getLang}>Get Locale</Button>
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
