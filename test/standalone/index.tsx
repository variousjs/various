import React from 'react'
import { createRoot } from 'react-dom/client'
import createComponent from '../../src/standalone'

const url1 = 'https://variousjs.github.io/preview/dist/dino.js'
const url2 = 'http://127.0.0.1:2333/dist/i18n/vue-async.js'
const Dino = createComponent({ name: 'dino', url: url1 })
const VueC = createComponent({ name: 'vuec', url: url2, type: 'vue3' })

function App() {
  return (
    <div>
      <Dino />
      <VueC />
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
