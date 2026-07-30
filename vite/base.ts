import { type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import istanbul from 'vite-plugin-istanbul'
import pkg from '../package.json'

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

// IIFE globals mapping (for loader build, matches externals)
export const GLOBALS: Record<string, string> = {
  react: 'React',
  'react-dom/client': 'ReactDOM',
  'react-router-dom': 'ReactRouterDOM',
  '@variousjs/various': 'Various',
  vue: 'Vue',
  'sub-m': 'subM',
  'stack-exceeded': 'stackExceeded',
  '@variousjs/various/standalone': 'VariousStandalone',
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
