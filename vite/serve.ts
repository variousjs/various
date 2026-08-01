import path from 'path'
import { type UserConfig } from 'vite'
import { createReadStream, statSync } from 'fs'

// Dev server config: serves public/ on port 2333.
// Matches webpack/entry.js devServer config.
// Includes a middleware to serve dist/ files as static JavaScript
// (prevents Vite from injecting HMR client import into IIFE scripts).
export function createServeConfig(): UserConfig {
  return {
    root: path.resolve(process.cwd(), 'public'),
    publicDir: false,
    server: {
      port: 2333,
      host: '0.0.0.0',
      fs: { strict: false },
    },
    plugins: [
      {
        name: 'serve-dist-static',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            const { url } = req
            if (!url || !url.startsWith('/dist/')) {
              next()
              return
            }
            const cleanUrl = url.split('?')[0]
            const filePath = path.join(process.cwd(), 'public', cleanUrl)
            try {
              const stat = statSync(filePath)
              if (stat.isFile()) {
                res.setHeader('Content-Type', 'application/javascript')
                createReadStream(filePath).pipe(res)
                return
              }
            } catch {
              // File not found, fall through to Vite
            }
            next()
          })
        },
      },
    ],
  }
}
