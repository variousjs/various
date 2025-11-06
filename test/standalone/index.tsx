import React from 'react'
import * as Vue from 'vue'
import { createRoot } from 'react-dom/client'
import { createComponent, createConfig } from '../../src/standalone'

createConfig({
  baseDependencies: {
    requirejs: 'https://cdn.jsdelivr.net/npm/requirejs@2.3.7/require.min.js',
    react: React,
    vue: Vue,
  },
  lng: { key: 'locale', defaultValue: 'zh' },
})

const url1 = 'https://variousjs.github.io/preview/dist/dino.js'
const url2 = 'http://127.0.0.1:2333/dist/i18n/vue-async.js'
const Dino = createComponent({
  name: 'dino',
  url: url1,
  dependencies: {
    // requirejs: 'https://cdn.jsdelivr.net/npm/requirejs@2.3.7/require.min.js',
  },
})
const VueC = createComponent({ name: 'vuec', url: url2, type: 'vue3' })

function App() {
  return (
    <div>
      <Dino />
      <VueC />
      <button
        onClick={() => {
          VueC.updateLng('locale', 'en')
        }}
      >
        change lng
      </button>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
