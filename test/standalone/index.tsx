import React, { useRef, StrictMode } from 'react'
import * as Vue from 'vue'
import { createRoot } from 'react-dom/client'
import '@variousjs/requirejs'
import { createComponent, createConfig } from '../../src/standalone'

const query = new URLSearchParams(window.location.search)
const testType = query.get('type') || 'default'

const baseConfig: Record<string, Parameters<typeof createConfig>['0']> = {
  default: {
    baseDependencies: {
      requirejs: window.requirejs,
      react: React,
      vue: Vue,
      'test-exist-module': {},
    },
    store: { locale: 'zh', globalB: 'B' },
  },
  depsError: {
    baseDependencies: {},
    fallback: () => null,
    errorFallback: ({ $self }) => <p>Error - {$self.url}</p>,
  },
  requirejsPath: {
    baseDependencies: {
      requirejs: './libs/require.min.js',
    },
  },
  requirejsPathError: {
    baseDependencies: {
      requirejs: '.error/require.min.js',
    },
  },
}

createConfig(baseConfig[testType])

const RC = createComponent<{ propsA: string }>({
  name: 'a',
  module: 'A',
  url: '/dist/standalone/a.js',
  dependencies: {
    '@variousjs/various': '/dist/index.js',
    'test-exist-module': {},
  },
})
const VC = createComponent<{ propsB: string }>({
  name: 'b',
  url: '/dist/standalone/b.js',
  type: 'vue3',
  storeKeys: ['globalB'],
})

function App() {
  const ref = useRef<{ set:(t: string) => void }>(null)

  return (
    <div style={{ padding: 20 }}>
      <RC $ref={ref} propsA="propsA" />
      <button
        onClick={() => {
          RC.dispatch({ locale: 'en' })
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
      <VC propsB="propsB" />
    </div>
  )
}

const container = document.getElementById('root')
const node = testType !== 'requirejsPath'
  ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (<App />)
const root = createRoot(container!)
root.render(node)
