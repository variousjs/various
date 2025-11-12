import React, { useRef } from 'react'
import * as Vue from 'vue'
import ReactDOM, { createRoot } from 'react-dom/client'
import '@variousjs/requirejs'
import { createComponent, createConfig } from '../../src/standalone'

createConfig({
  baseDependencies: {
    requirejs: window.requirejs,
    react: React,
    vue: Vue,
  },
  lng: { key: 'locale', defaultValue: 'zh' },
})

const RC = createComponent<{ propsA: string }>({
  name: 'a',
  module: 'A',
  url: '/dist/standalone/a.js',
  dependencies: {
    '@variousjs/various': '/dist/index.js',
    'react-dom/client': ReactDOM,
  },
})
const VC = createComponent<{ propsB: string }>({
  name: 'b',
  url: '/dist/standalone/b.js',
  type: 'vue3',
})

function App() {
  const ref = useRef<{ set:(t: string) => void }>(null)

  return (
    <div style={{ padding: 20 }}>
      <RC $ref={ref} propsA="propsA" />
      <button
        onClick={() => {
          RC.updateLng('locale', 'en')
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
const root = createRoot(container!)
root.render(<App />)
