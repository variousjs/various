import { defineConfig } from 'vite'
import { createCoreConfig, createCoreESMConfig } from './vite/core'
import {
  createLoaderConfig,
  createStandaloneConfig,
  createStandaloneESMConfig,
  createStandaloneDevConfig,
} from './vite/entry'
import { createComponentsConfig } from './vite/components'
import { createServeConfig } from './vite/serve'

// Dispatcher: selects build config based on TARGET env var.
// Usage: TARGET=core vite build   /   TARGET=serve vite
export default defineConfig(({ mode }) => {
  const target = process.env.TARGET || 'serve'

  switch (target) {
    case 'core':
      return createCoreConfig(mode)
    case 'core-esm':
      return createCoreESMConfig(mode)
    case 'loader':
      return createLoaderConfig(mode)
    case 'standalone':
      return createStandaloneConfig()
    case 'standalone-esm':
      return createStandaloneESMConfig()
    case 'standalone-dev':
      return createStandaloneDevConfig()
    case 'components':
      return createComponentsConfig(mode)
    case 'serve':
      return createServeConfig()
    default:
      throw new Error(`Unknown TARGET: ${target}. Use: core, core-esm, loader, standalone, standalone-esm, standalone-dev, components, serve`)
  }
})
