import path from 'path'
import { type UserConfig } from 'vite'

// Dev server config: serves public/ on port 2333.
// Matches webpack/entry.js devServer config
export function createServeConfig(): UserConfig {
  return {
    root: path.resolve(process.cwd(), 'public'),
    publicDir: false,
    server: {
      port: 2333,
      host: '0.0.0.0',
      fs: { strict: false },
    },
  }
}
