import React, { Component } from 'react'
import {
  ComponentProps,
  ComponentNode,
  createComponent,
  I18n,
} from '@variousjs/various'
import zh from './zh.json'
import en from './en.json'

const Mb = createComponent({ module: 'i18n.B' })
const Mc = createComponent({ module: 'i18n.NoConfig' })
const Md = createComponent({ module: 'i18n.NoResource' })
const Me = createComponent({ module: 'i18n.NoKey' })
const Mf = createComponent({ module: 'i18n.NoLocale' })
const Mg = createComponent({ module: 'i18n.Async' })
const Mh = createComponent({ module: 'i18n.ConfigError' })
const Mi = createComponent({ module: 'i18n.Update' })

const A = ((props) => {
  const { $t, $dispatch } = props

  return (
    <>
      <h3>I18n</h3>
      <div className="value">
        <p>name: {$t('name')}</p>
        <p>greet: {$t('greet', { name: 'A', name2: 'B' })}</p>
        <button onClick={() => $dispatch({ target: 'app', action: 'setLocale' })}>change locale</button>
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
}) as ComponentNode

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
