import path from 'path'
import { type UserConfig } from 'vite'
import {
  createReadStream,
  statSync,
  readFileSync,
  watch,
} from 'fs'
import type { ServerResponse } from 'http'

// Dev server config: serves public/ on port 2333.
// Uses appType: 'custom' to prevent Vite from injecting /@vite/client module
// script, which would break the dynamic import map (browsers require import
// maps to be added before any module script is loaded).
//
// A lightweight SSE-based reload mechanism replaces /@vite/client: when the
// parallel watch builds (dev:core, dev:loader, dev:standalone, dev:components)
// update files in public/dist/, connected browsers are notified to reload.
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
          const distDir = path.resolve(process.cwd(), 'public/dist')
          const reloadClients = new Set<ServerResponse>()
          let reloadTimer: ReturnType<typeof setTimeout> | undefined

          function notifyReload() {
            // Debounce: a single watch-build run may update many files at once
            clearTimeout(reloadTimer)
            reloadTimer = setTimeout(() => {
              reloadClients.forEach((client) => {
                client.write('data: reload\n\n')
              })
            }, 300)
          }

          // SSE endpoint: browsers connect here to receive reload signals
          server.middlewares.use((req, res, next) => {
            if (req.url !== '/__reload') {
              next()
              return
            }
            res.writeHead(200, {
              'Content-Type': 'text/event-stream',
              'Cache-Control': 'no-cache, no-transform',
              Connection: 'keep-alive',
            })
            res.write('data: connected\n\n')
            reloadClients.add(res)
            req.on('close', () => {
              reloadClients.delete(res)
            })
          })

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
          // (prevents /@vite/client injection which breaks import maps).
          // Injects a small SSE-based reload script so browsers auto-refresh
          // when watch builds update public/dist/.
          server.middlewares.use((req, res, next) => {
            const { url } = req
            if (!url) {
              next()
              return
            }
            const cleanUrl = url.split('?')[0]
            // Resolve HTML file path from URL:
            // / -> index.html, /standalone -> standalone.html,
            // /app/error.html -> app/error.html
            let candidates: string[]
            if (cleanUrl === '/') {
              candidates = ['index.html']
            } else if (cleanUrl.endsWith('.html')) {
              candidates = [cleanUrl.slice(1)]
            } else {
              candidates = [`${cleanUrl.slice(1)}.html`, `${cleanUrl.slice(1)}/index.html`]
            }
            const htmlFile = candidates.find((c) => {
              try {
                return statSync(path.join(process.cwd(), 'public', c)).isFile()
              } catch {
                return false
              }
            })
            if (!htmlFile) {
              next()
              return
            }
            const filePath = path.join(process.cwd(), 'public', htmlFile)
            try {
              let html = readFileSync(filePath, 'utf-8')
              const reloadScript = '<script>(function(){var e=new EventSource("/__reload");e.addEventListener("message",function(ev){if(ev.data==="reload")location.reload()});})()</script>'
              html = html.replace('</body>', `${reloadScript}</body>`)
              res.setHeader('Content-Type', 'text/html')
              res.end(html)
              return
            } catch {
              // File not found, fall through to Vite
            }
            next()
          })

          // Watch public/dist for changes emitted by the parallel watch builds
          // (dev:core, dev:loader, dev:standalone, dev:components) and notify
          // connected browsers to reload.
          //
          // A standalone fs.watch is used instead of server.watcher because
          // Vite adds outDir (public/dist/**) to the chokidar ignored list
          // when emptyOutDir is true, so server.watcher would never fire.
          const distWatcher = watch(distDir, { recursive: true }, (_e, filename) => {
            if (!filename) return
            notifyReload()
          })
          server.httpServer?.on('close', () => {
            distWatcher.close()
          })
        },
      },
    ],
  }
}
