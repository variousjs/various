import { type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul'
import pkg from '../package.json' with { type: 'json' }

// Preserved from webpack/base.js externals (lines 11-22)
export const EXTERNALS = [
  // default
  'react',
  'react-dom/client',
  'react-router-dom',
  '@variousjs/various',
  'vue',

  // create-module test
  'sub-m',
  'stack-exceeded',
]

// Standalone build needs additional external for self-reference type import
export const STANDALONE_EXTERNALS = [
  ...EXTERNALS,
  '@variousjs/various/standalone',
]

export function onwarn(warning: any, warn: (w: any) => void) {
  // INVALID_ANNOTATION: istanbul instrumentation disrupts @__PURE__ comment positions
  // EMPTY_IMPORT_META:
  //  vite preload helper uses import.meta.url in IIFE format (dead code, modulePreload is false)
  if (
    warning.code === 'COMMENT_ANCHOR_NOT_FOUND'
    || warning.code === 'INVALID_ANNOTATION'
    || warning.code === 'EMPTY_IMPORT_META'
  ) return
  warn(warning)
}

export function createBaseConfig(mode?: string): UserConfig {
  // Instrument app code in dev mode for cypress coverage.
  // Skip for standalone (npm package, TARGET=standalone) and production builds.
  const enableCoverage = mode === 'development' && process.env.TARGET !== 'standalone'

  return {
    plugins: [
      vue(),
      ...(enableCoverage ? [
        istanbul({
          include: ['src/**/*', 'test/components/**/*', 'test/app/**/*'],
          exclude: ['node_modules/**', 'cypress/**'],
          cypress: true,
          forceBuildInstrument: true,
          requireEnv: false,
        }),
      ] : []),
    ],
    define: {
      VERSION: JSON.stringify(pkg.version),
    },
    publicDir: false,
    resolve: {
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    },
    build: {
      target: 'es2017',
      sourcemap: true,
      cssCodeSplit: false,
      emptyOutDir: false,
    },
  }
}
