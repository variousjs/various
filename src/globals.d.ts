// Ambient declarations for build-time globals.
// Kept in a .d.ts so they type-check the source but are never
// emitted into the published declaration files.
import type { Config } from './public/types'

declare global {
  const VERSION: string
  interface Window { VARIOUS_CONFIG: Config }
}

export {}
