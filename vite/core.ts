import path from 'path'
import { type UserConfig } from 'vite'
import { createBaseConfig, EXTERNALS } from './base'
import { cjsToAmd } from './cjs-to-amd'

const ROOT = process.cwd()

// Builds the framework core (@variousjs/various) as an AMD module.
// CJS output is wrapped in define([deps], factory) by cjsToAmd plugin
// so RequireJS can properly resolve and preload dependencies.
// Matches webpack/package-core.js: libraryTarget 'amd', entry src/core/index.tsx
export function createCoreConfig(mode: string): UserConfig {
  const devVariant = process.env.DEV_VARIANT === 'true'
  const isProd = mode === 'production'
  // prod -> dist/, dev variant -> dist/, dev server -> public/dist/
  const outputDir = (isProd || devVariant) ? 'dist' : 'public/dist'
  const entryName = devVariant ? 'index.dev' : 'index'

  const base = createBaseConfig(mode)
  return {
    ...base,
    plugins: [...(base.plugins || []), cjsToAmd()],
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, outputDir),
      minify: isProd,
      rollupOptions: {
        external: EXTERNALS,
        input: { [entryName]: path.resolve(ROOT, 'src/core/index.tsx') },
        preserveEntrySignatures: 'strict',
        output: {
          format: 'cjs',
          entryFileNames: '[name].js',
        },
      },
    },
  }
}
