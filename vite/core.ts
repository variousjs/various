import path from 'path'
import { type UserConfig } from 'vite'
import { createBaseConfig, EXTERNALS, onwarn } from './base.js'

const ROOT = process.cwd()

// Builds the framework core (@variousjs/various) as an ESM module.
export function createCoreConfig(mode: string): UserConfig {
  const devVariant = process.env.DEV_VARIANT === 'true'
  const isProd = mode === 'production'
  // prod -> dist/, dev variant -> dist/, dev server -> public/dist/
  const outputDir = (isProd || devVariant) ? 'dist' : 'public/dist'
  const entryName = devVariant ? 'index.dev' : 'index'

  const base = createBaseConfig(mode)
  return {
    ...base,
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, outputDir),
      minify: isProd,
      rollupOptions: {
        onwarn,
        external: EXTERNALS,
        input: { [entryName]: path.resolve(ROOT, 'src/core/index.tsx') },
        preserveEntrySignatures: 'strict',
        output: {
          format: 'es',
          entryFileNames: '[name].js',
        },
      },
    },
  }
}
