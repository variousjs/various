import React, { Component } from 'react'
import {
  ComponentProps,
  ComponentNode,
  createComponent,
  I18n,
} from '@variousjs/various'
import zh from './zh.json'
import en from './en.json'

const Mb = createComponent({ name: 'i18n', module: 'B' })
const Mc = createComponent({ name: 'i18n', module: 'NoConfig' })
const Md = createComponent({ name: 'i18n', module: 'NoResource' })
const Me = createComponent({ name: 'i18n', module: 'NoKey' })
const Mf = createComponent({ name: 'i18n', module: 'NoLocale' })
const Mg = createComponent({ name: 'i18n', module: 'Async' })
const Mh = createComponent({ name: 'i18n', module: 'ConfigError' })
const Mi = createComponent({ name: 'i18n', module: 'Update' })

const A = ((props) => {
  const { $t, $dispatch } = props

  return (
    <>
      <h3>I18n</h3>
      <div className="value">
        <p>name: {$t('name')}</p>
        <p>greet: {$t('greet', { name: 'A', name2: 'B' })}</p>
        <button onClick={() => $dispatch({ name: 'app', action: 'setLocale' })}>change locale</button>
      </div>

      <h3>Error</h3>
      <div className="value">
        <Mh />
        <Mc />
        <Md />
        <Me />
        <Mf />
      </div>

      <Mb />

      <h3>Async</h3>
      <div className="value">
        <Mg />
      </div>

      <Mi />

      <h3>Global</h3>
      <div className="value">
        <button onClick={() => window.open('/i18n/index.html')}>go</button>
      </div>

      <h3>Global Async</h3>
      <div className="value">
        <button onClick={() => window.open('/i18n/async.html')}>go</button>
      </div>

      <h3>Global Async Error</h3>
      <div className="value">
        <button onClick={() => window.open('/i18n/async-error.html')}>go</button>
      </div>
    </>
  )
}) as ComponentNode<{}, {}, {
  app: {
    setLocale: {
      // value?: string,
      result?: string,
    },
  },
}>

A.$i18n = () => ({
  lngStoreKey: 'locale',
  resources: { zh, en },
})

export default A

export class B extends Component<ComponentProps> {
  static $i18n: I18n = () => ({
    lngStoreKey: 'locale',
    resources: { zh, en },
  })

  render() {
    const { $t } = this.props
    return (
      <>
        <h3>Default Text</h3>
        <div className="value">
          <p>{$t('no-exist')}</p>
          <p>{$t('no-exist', 'default Text')}</p>
          <p>{$t('no-exist', {}, '2default Text2')}</p>
          {/* @ts-ignore */}
          <p>{$t('name', [])}</p>
          <p>{$t('greet', {})}</p>
          <p>{$t('greet', { invalid: '1' })}</p>
        </div>
      </>
    )
  }
}

export const NoConfig = (props: ComponentProps) => (
  <p>{props.$t('no-config')}</p>
)

export const NoResource = ((props) => (
  <p>{props.$t('no-resources')}</p>
)) as ComponentNode
NoResource.$i18n = () => ({ lngStoreKey: 'locale', resources: {} })

export const ConfigError = ((props) => (
  <p>{props.$t('error')}</p>
)) as ComponentNode
ConfigError.$i18n = () => { throw new Error('get i18n config error') }

export const NoKey = ((props) => (
  <p>{props.$t('no-key')}</p>
)) as ComponentNode
NoKey.$i18n = () => ({ lngStoreKey: 'locale', resources: { zh, en } })

export const NoLocale = ((props) => (
  <p>{props.$t('no-locale')}</p>
)) as ComponentNode
NoLocale.$i18n = () => ({ lngStoreKey: 'no-exist', resources: {} })

let resolveFn = (() => null) as any
export const Async = ((props) => {
  const { $t } = props
  return (
    <>
      <p>{$t('name')}</p>
      <button onClick={() => resolveFn()}>get resources</button>
    </>
  )
}) as ComponentNode
Async.$i18n = async () => {
  await new Promise((r) => {
    resolveFn = r
  })
  return { lngStoreKey: 'locale', resources: { zh, en } }
}

export const Update = ((props) => {
  const { $t } = props

  return (
    <>
      <h3>Update</h3>
      <div className="value">
        <p>{$t('name')}</p>
        <button
          onClick={() => {
            $t.update({ lngStoreKey: 'locale' })
          }}
        >
          update lngStoreKey
        </button>
        <button
          onClick={() => {
            $t.update({ resources: { zh, en } })
          }}
        >
          update resources
        </button>
      </div>
    </>
  )
}) as ComponentNode
