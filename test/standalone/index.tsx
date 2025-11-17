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
      react: React, // not needs
      vue: Vue,
    },
    store: { locale: 'zh', globalB: 'B' },
  },
  config: {
    baseDependencies: {},
    fallback: () => null,
    errorFallback: ({ $self }) => <p>Error - {$self.url}</p>,
  },
}

const RC = createComponent<{ propsA: string }>({
  name: 'a',
  module: 'A',
  url: '/dist/standalone/a.js',
  dependencies: {
    '@variousjs/various': '/dist/index.js',
  },
})
const VC = createComponent<{ propsB: string }>({
  name: 'b',
  url: '/dist/standalone/b.js',
  type: 'vue3',
  dependencies: testType === 'config' ? undefined : {
    vue: Vue,
  },
  storeKeys: ['globalB'],
})

// widthout config
if (testType !== 'strict') {
  createConfig(baseConfig[testType])
}

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
const node = testType === 'strict'
  ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (<App />)
const root = createRoot(container!)
root.render(node)
