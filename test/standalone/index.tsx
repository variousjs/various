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
import { setModule as setModuleDirect } from '../../src/core/system'

const query = new URLSearchParams(window.location.search)
const testType = query.get('type') || 'default'

interface Store {
  globalB: string
}

const baseConfig: Record<string, AppConfig<Store>> = {
  default: {
    dependencies: {
      react: React, // not needs
      vue: Vue,
    },
    store: { globalB: 'B' },
    i18n: {
      defaultLocale: 'zh',
    },
    actions: {
    },
  },
  config: {
    dependencies: {},
    Fallback: () => null,
    ErrorFallback: ({ $self }) => <p>Error - {$self.url}</p>,
  },
  deps: {
    dependencies: {
      // String dep not pre-registered by createComponent -> covers defineAsync string path
      'helper-dep': '/dist/standalone/c.js',
      // Object dep not pre-registered -> covers ensureImportMap blob URL + defineAsync object path
      'helper-obj': { value: 'test' },
      // Undefined dep -> covers value === undefined branch
      'helper-undef': undefined,
    },
    store: { globalB: 'B' },
    i18n: { defaultLocale: 'zh' },
    actions: {},
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

// Component created WITHOUT an explicit url: the URL is registered via
// defineModules (setModuleUrl), so getSelfInfo falls through to getModuleUrl.
const CC = createComponent({
  module: 'c',
  dependencies: {
    c: '/dist/standalone/c.js',
  },
})

// widthout config
if (testType !== 'strict') {
  if (testType === 'deps') {
    // Inject a null module to cover createModuleBlobUrl's null guard (system.ts L127)
    setModuleDirect('null-dep', null)
  }
  createAppConfig(baseConfig[testType])
}

function App() {
  const ref = useRef<{ set:(t: string) => void }>(null)

  return (
    <div style={{ padding: 20 }}>
      <RC $ref={ref} propsA="propsA" />
      <button
        onClick={async () => {
          const dispatch = createDispatch('ot')
          const locale = await dispatch({ target: 'app', action: 'getLocale' })
          dispatch({ target: 'app', action: 'setLocale', payload: locale === 'zh' ? 'en' : 'zh' })
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
      {testType === 'default' && <CC />}
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
