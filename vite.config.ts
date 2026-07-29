import { defineConfig } from 'vite'
import { createCoreConfig } from './vite/core'
import { createLoaderConfig, createStandaloneConfig, createStandaloneDevConfig } from './vite/entry'
import { createComponentsConfig } from './vite/components'
import { createServeConfig } from './vite/serve'

// Dispatcher: selects build config based on TARGET env var.
// Usage: TARGET=core vite build   /   TARGET=serve vite
export default defineConfig(({ mode }) => {
  const target = process.env.TARGET || 'serve'

  switch (target) {
    case 'core':
      return createCoreConfig(mode)
    case 'loader':
      return createLoaderConfig(mode)
    case 'standalone':
      return createStandaloneConfig()
    case 'standalone-dev':
      return createStandaloneDevConfig()
    case 'components':
      return createComponentsConfig(mode)
    case 'serve':
      return createServeConfig()
    default:
      throw new Error(`Unknown TARGET: ${target}. Use: core, loader, standalone, standalone-dev, components, serve`)
  }
})
