import path from 'path'
import { type UserConfig } from 'vite'
import { createReadStream, statSync, readFileSync } from 'fs'

// Dev server config: serves public/ on port 2333.
// Uses appType: 'custom' to prevent Vite from injecting /@vite/client module
// script, which would break the dynamic import map (browsers require import
// maps to be added before any module script is loaded).
export function createServeConfig(): UserConfig {
  return {
    root: path.resolve(process.cwd(), 'public'),
    publicDir: false,
    appType: 'custom',
    server: {
      port: 2333,
      host: '0.0.0.0',
      fs: { strict: false },
    },
    plugins: [
      {
        name: 'serve-dist-static',
        configureServer(server) {
          // Serve /dist/ files as static JavaScript (bypasses Vite transform)
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

          // Serve index.html directly without Vite transformation
          // (prevents /@vite/client injection which breaks import maps)
          server.middlewares.use((req, res, next) => {
            const { url } = req
            if (!url || (url !== '/' && url !== '/index.html')) {
              next()
              return
            }
            const filePath = path.join(process.cwd(), 'public', 'index.html')
            try {
              const html = readFileSync(filePath, 'utf-8')
              res.setHeader('Content-Type', 'text/html')
              res.end(html)
              return
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
