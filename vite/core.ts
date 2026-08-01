import path from 'path'
import { type UserConfig } from 'vite'
import { createBaseConfig, EXTERNALS, onwarn } from './base'
import { cjsToSystem } from './cjs-to-system'

const ROOT = process.cwd()

// Builds the framework core (@variousjs/various) as a SystemJS module.
// CJS output is wrapped in System.register([deps], factory) by cjsToSystem plugin
// so SystemJS can properly resolve and preload dependencies.
export function createCoreConfig(mode: string): UserConfig {
  const devVariant = process.env.DEV_VARIANT === 'true'
  const isProd = mode === 'production'
  // prod -> dist/, dev variant -> dist/, dev server -> public/dist/
  const outputDir = (isProd || devVariant) ? 'dist' : 'public/dist'
  const entryName = devVariant ? 'index.dev' : 'index'

  const base = createBaseConfig(mode)
  return {
    ...base,
    plugins: [...(base.plugins || []), cjsToSystem()],
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
          format: 'cjs',
          entryFileNames: '[name].js',
        },
      },
    },
  }
}

// Builds the framework core as ESM for npm consumers (esm.sh, bundlers, etc.)
export function createCoreESMConfig(mode: string): UserConfig {
  const isProd = mode === 'production'
  const base = createBaseConfig(mode)
  return {
    ...base,
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, 'dist'),
      minify: isProd,
      rollupOptions: {
        onwarn,
        external: EXTERNALS,
        input: { index: path.resolve(ROOT, 'src/core/index.tsx') },
        preserveEntrySignatures: 'strict',
        output: {
          format: 'es',
          entryFileNames: 'index.mjs',
        },
      },
    },
  }
}
