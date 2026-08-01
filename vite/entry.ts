import path from 'path'
import { type UserConfig } from 'vite'
import {
  createBaseConfig,
  EXTERNALS,
  STANDALONE_EXTERNALS,
  GLOBALS,
  onwarn,
} from './base.js'

const ROOT = process.cwd()

// Builds the page loader script (loaded via <script src>).
// Matches webpack/entry.js: entry src/loader.tsx, default library type (IIFE)
export function createLoaderConfig(mode: string): UserConfig {
  const devVariant = process.env.DEV_VARIANT === 'true'
  const isProd = mode === 'production'
  const outputDir = (isProd || devVariant) ? 'dist' : 'public/dist'
  const entryName = devVariant ? 'loader-dev' : 'loader'

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
        input: { [entryName]: path.resolve(ROOT, 'src/loader.tsx') },
        output: {
          format: 'iife',
          entryFileNames: '[name].js',
          globals: GLOBALS,
        },
      },
    },
  }
}

// Builds standalone module for npm package (CJS format).
// Matches webpack/entry.js production: entry src/standalone/index.tsx, libraryTarget 'commonjs2'
export function createStandaloneConfig(): UserConfig {
  const base = createBaseConfig('production')
  return {
    ...base,
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, 'dist'),
      minify: false,
      rollupOptions: {
        onwarn,
        external: STANDALONE_EXTERNALS,
        input: { standalone: path.resolve(ROOT, 'src/standalone/index.tsx') },
        output: {
          format: 'cjs',
          entryFileNames: '[name].js',
          exports: 'named',
        },
      },
    },
  }
}

// Builds standalone module as ESM for npm consumers.
export function createStandaloneESMConfig(): UserConfig {
  const base = createBaseConfig('production')
  return {
    ...base,
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, 'dist'),
      minify: false,
      rollupOptions: {
        onwarn,
        external: STANDALONE_EXTERNALS,
        input: { standalone: path.resolve(ROOT, 'src/standalone/index.tsx') },
        output: {
          format: 'es',
          entryFileNames: 'standalone.mjs',
        },
      },
    },
  }
}

// Builds standalone test entry for dev server (bundled, no externals).
// Matches webpack/entry.js development: entry test/standalone/index.tsx, externals undefined
export function createStandaloneDevConfig(): UserConfig {
  const base = createBaseConfig('development')
  return {
    ...base,
    build: {
      ...base.build,
      outDir: path.resolve(ROOT, 'public/dist'),
      minify: false,
      rollupOptions: {
        onwarn,
        input: { standalone: path.resolve(ROOT, 'test/standalone/index.tsx') },
        output: {
          format: 'iife',
          entryFileNames: '[name].js',
        },
      },
    },
  }
}
