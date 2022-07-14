import React, { Component } from 'react'
import { Button } from 'antd'
import { ComponentProps, Store, Connect as CT, Invoker, Ii8nConfig } from '@variousjs/various'
import { Store as GlobalStore } from '../types'
import Zh from './i18n/zh.json'
import En from './i18n/en.json'

type S = { value: string }
type Connect = CT<S>

const { createStore, connect, emit } = new Store<S>()

createStore({ value: 'a' })

class A extends Component<Connect & ComponentProps<GlobalStore> & { name: string }> {
  static $getI18nConfig: Ii8nConfig = () => ({
    localeKey: 'locale',
    resources: {
      zh: Zh,
      en: En,
    },
  })

  static updateValue: Invoker = async ({ value, trigger }) => {
    window.console.log(trigger)
    await new Promise((r) => setTimeout(r, 100))
    emit({ value }, true)
  }

  state = {
    dispatchError: '',
    bValue: '',
  }

  onGetB = async () => {
    const b = await this.props.$dispatch('b', 'getValue')
    this.setState({ bValue: (b as string) })
  }

  onSetG = async () => {
    const locale: string = await this.props.$dispatch('store', 'getLocale')
    await this.props.$dispatch('store', 'setLocale', locale === 'zh' ? 'en' : 'zh')
    try {
      await this.props.$dispatch('store', 'no-exist')
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  onDpB = async () => {
    try {
      await this.props.$dispatch('b', 'no-exist')
    } catch (e) {
      this.setState({ dispatchError: (e as Error).message })
    }
  }

  render() {
    const { value, name, $store, $t } = this.props
    const { dispatchError, bValue } = this.state

    return (
      <>
        <p>Store: {$store.user.name}</p>
        <p>Store(component): {value}</p>
        <p>Component Props: {name}</p>
        <p>Value(b): {bValue}</p>
        <p>Dispatch Error: <span id="a-dispatch-error">{dispatchError}</span></p>
        <Button onClick={this.onGetB}>$dispatch(b)</Button>
        <Button onClick={this.onDpB}>$dispatch(b-no-exits)</Button>
        <Button id="a-dispatch-global" onClick={this.onSetG}>$dispatch(global)</Button>
        <h1>{$t('title', '标题')}</h1>
      </>
    )
  }
}

export default connect('value')(A)
