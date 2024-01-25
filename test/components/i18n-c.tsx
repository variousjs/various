import React, { Component } from 'react'
import { Button, Descriptions } from 'antd'
import { ComponentProps, I18n } from '@variousjs/various'
import { setEn } from 'helper'
import { Store } from '../types'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

export default class C extends Component<ComponentProps<Store>> {
  static $i18n: I18n = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  render() {
    const { $t } = this.props

    return (
      <Descriptions column={2} size="small" title="C" layout="vertical" bordered>
        <Descriptions.Item label="Title">
          <span data-c="title">{$t('title')}</span>
        </Descriptions.Item>

        <Descriptions.Item label="Hello">
          <span data-c="hello">
            {$t('hello', { name: 1, name2: '999' })}
          </span>
        </Descriptions.Item>

        <Descriptions.Item label="Actions">
          <Button data-c="action-set" type="primary" size="small" onClick={setEn}>en</Button>
        </Descriptions.Item>
      </Descriptions>
    )
  }
}
