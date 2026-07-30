import fs from 'fs'
import path from 'path'
import { type UserConfig } from 'vite'
import { createBaseConfig, EXTERNALS } from './base'
import { cjsToAmd } from './cjs-to-amd'
import { inlineChunks } from './inline-chunks'

const ROOT = process.cwd()

// Dynamically scan test/components directory for component entries.
// Matches webpack/test-components.js scanning logic
function scanComponentEntries(): Record<string, string> {
  // Static entries from test/app/ (matches webpack config lines 8-21)
  const components: Record<string, string> = {
    app: path.resolve(ROOT, 'test/app/index.ts'),
    'i18n-async': path.resolve(ROOT, 'test/app/i18n/async/index.tsx'),
    'i18n-async-error': path.resolve(ROOT, 'test/app/i18n/async-error/index.tsx'),
    'i18n-global': path.resolve(ROOT, 'test/app/i18n/global.tsx'),
    'default-config': path.resolve(ROOT, 'test/app/default-config.ts'),
    'container-error': path.resolve(ROOT, 'test/app/container-error.tsx'),
    'vue-version': path.resolve(ROOT, 'test/app/vue-version.tsx'),
    'create-slient': path.resolve(ROOT, 'test/app/create-component-slient.tsx'),
  }

  // Dynamic entries from test/components/ (matches webpack config lines 25-40)
  const extensions = ['.tsx', '.vue', '.ts']
  const basePath = path.resolve(ROOT, 'test/components')

  fs.readdirSync(basePath).forEach((name) => {
    const currentPath = path.join(basePath, name)
    if (!fs.lstatSync(currentPath).isDirectory()) return

    fs.readdirSync(currentPath).forEach((filename) => {
      if (extensions.some((n) => filename.endsWith(n))) {
        const ext = filename.split('.').pop()!
        const key = `${name}/${filename.replace(`.${ext}`, '')}`
        components[key] = path.join(currentPath, filename)
      }
    })
  })

  return components
}

// Builds test components as AMD modules.
// CJS output is wrapped in define([deps], factory) by cjsToAmd plugin.
// Shared chunks are inlined by inlineChunks plugin so each module is self-contained.
// Matches webpack/test-components.js: libraryTarget 'amd', multi-entry
export function createComponentsConfig(mode: string): UserConfig {
  const isProd = mode === 'production'
  const base = createBaseConfig(mode)

  return {
    ...base,
    plugins: [...(base.plugins || []), inlineChunks(), cjsToAmd()],
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, 'public/dist'),
      minify: isProd,
      rollupOptions: {
        external: EXTERNALS,
        input: scanComponentEntries(),
        preserveEntrySignatures: 'strict',
        output: {
          format: 'cjs',
          entryFileNames: '[name].js',
          exports: 'named',
        },
      },
    },
  }
}
