import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, Ii8n } from '@variousjs/various'
import { Store } from '../types'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

export default class C extends Component<ComponentProps<Store>> {
  static $i18n: Ii8n = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  render() {
    const { $t, $dispatch } = this.props

    return (
      <Descriptions column={2} size="small" title="C" layout="vertical" bordered>
        <Descriptions.Item label="Title">
          <span data-name="i18n-title">{$t('title')}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Hello">
          <span data-name="i18n-hello">
            {$t('hello', { name: 1, name2: '999' })}
          </span>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button type="primary" size="small" onClick={() => $dispatch('store', 'setLocale', 'zh')}>zh</Button>
          <Button type="primary" size="small" onClick={() => $dispatch('store', 'setLocale', 'en')}>en</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}
