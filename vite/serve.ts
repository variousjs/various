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

          // Serve HTML files directly without Vite transformation
          // (prevents /@vite/client injection which breaks import maps)
          server.middlewares.use((req, res, next) => {
            const { url } = req
            if (!url) {
              next()
              return
            }
            const cleanUrl = url.split('?')[0]
            // Map URL paths to HTML files in public/
            const htmlMap: Record<string, string> = {
              '/': 'index.html',
              '/index.html': 'index.html',
              '/standalone': 'standalone.html',
              '/standalone.html': 'standalone.html',
            }
            const htmlFile = htmlMap[cleanUrl]
            if (!htmlFile) {
              next()
              return
            }
            const filePath = path.join(process.cwd(), 'public', htmlFile)
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
