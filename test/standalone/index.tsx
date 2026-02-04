import '@variousjs/requirejs'
import React, { useRef, StrictMode } from 'react'
import * as Vue from 'vue'
import { createRoot } from 'react-dom/client'
import { AppConfig } from '@variousjs/various/standalone'
import {
  createComponent,
  createAppConfig,
  createDispatch,
  createLogger,
  createPostMessage,
} from '../../src/standalone'

const query = new URLSearchParams(window.location.search)
const testType = query.get('type') || 'default'

interface Store {
  locale?: string
  globalB: string
}

const baseConfig: Record<string, AppConfig<Store>> = {
  default: {
    dependencies: {
      react: React, // not needs
      vue: Vue,
    },
    store: { locale: 'zh', globalB: 'B' },
    actions: {
      // payload specific string
      async setLocale({ emit, getStore }, payload: string | undefined, trigger) {
        window.console.log(trigger)
        let next = payload
        if (!next) {
          next = getStore('locale') === 'zh' ? 'en' : 'zh'
        }
        emit({ locale: next })
      },
    },
  },
  config: {
    dependencies: {},
    Fallback: () => null,
    ErrorFallback: ({ $self }) => <p>Error - {$self.url}</p>,
  },
}

const RC = createComponent<{ propsA: string }>({
  module: 'a.A',
  url: '/dist/standalone/a.js',
  dependencies: {
    '@variousjs/various': '/dist/index.js',
  },
})
const VC = createComponent<{ propsB: string }, any, { globalB: string }>({
  module: 'b',
  url: '/dist/standalone/b.js',
  type: 'vue3',
  dependencies: testType === 'config' ? undefined : {
    vue: Vue,
  },
  storeKeys: ['globalB'],
})

// widthout config
if (testType !== 'strict') {
  createAppConfig(baseConfig[testType])
}

function App() {
  const ref = useRef<{ set:(t: string) => void }>(null)

  return (
    <div style={{ padding: 20 }}>
      <RC $ref={ref} propsA="propsA" />
      <button
        onClick={() => {
          const dispatch = createDispatch('ot')
          dispatch({ target: 'app', action: 'setLocale' })
        }}
      >
        change lng
      </button>
      <button
        onClick={() => {
          ref.current?.set('setText')
        }}
      >
        set text
      </button>
      <button
        onClick={() => {
          const pm = createPostMessage('ot')
          pm({ event: 'greet', payload: +new Date() })
        }}
      >
        message
      </button>
      <button
        onClick={() => {
          const log = createLogger('ot')
          log.info('any')
        }}
      >
        log
      </button>
      <VC propsB="propsB" />
    </div>
  )
}

const container = document.getElementById('root')
const node = testType === 'strict'
  ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (<App />)
const root = createRoot(container!)
root.render(node)
