import path from 'path'
import { type Plugin } from 'vite'

// Inlines shared chunks (assets/*.js) into entry files so each component
// is self-contained and loadable by RequireJS without relative require() calls.
export function inlineChunks(): Plugin {
  return {
    name: 'inline-chunks',
    generateBundle(_, bundle) {
      // Step 1: Collect all chunk files in assets/
      const chunkCodes: Record<string, string> = {}
      const chunkBasenames: Record<string, string> = {}

      Object.entries(bundle).forEach(([fileName, entry]) => {
        if (entry.type === 'chunk' && fileName.startsWith('assets/')) {
          chunkCodes[fileName] = entry.code
          chunkBasenames[path.basename(fileName)] = fileName
        }
      })

      if (Object.keys(chunkCodes).length === 0) return

      // Step 2: Recursively inline a chunk's code
      function inlineChunk(chunkFileName: string, visited: Set<string>): string {
        if (visited.has(chunkFileName)) {
          throw new Error(`Circular chunk dependency: ${chunkFileName}`)
        }
        visited.add(chunkFileName)

        const code = chunkCodes[chunkFileName]
        if (!code) return 'undefined'

        // Replace require("./xxx.js") calls within this chunk (chunk-to-chunk deps)
        const inlined = code.replace(
          /require\(["']\.\/([^"']+\.js)["']\)/g,
          (_match, basename) => {
            const depFileName = chunkBasenames[basename]
            if (depFileName) {
              return inlineChunk(depFileName, new Set(visited))
            }
            return _match
          },
        )

        // Wrap in IIFE that provides module/exports and returns exports
        return `(function(){var module={exports:{}};var exports=module.exports;\n${inlined}\nreturn module.exports;})()`
      }

      // Step 3: For each entry file, inline chunk references
      Object.entries(bundle).forEach(([fileName, entry]) => {
        if (entry.type !== 'chunk') return
        if (fileName.startsWith('assets/')) return

        const { code } = entry

        // Replace require("../assets/xxx.js") and require("./assets/xxx.js")
        const inlined = code.replace(
          /require\(["']\.+\/assets\/([^"']+)["']\)/g,
          (_match, basename) => {
            const chunkFileName = `assets/${basename}`
            if (chunkCodes[chunkFileName]) {
              return inlineChunk(chunkFileName, new Set())
            }
            return _match
          },
        )

        // eslint-disable-next-line no-param-reassign
        entry.code = inlined
      })

      // Step 4: Remove chunk files and their sourcemaps from bundle
      Object.keys(bundle)
        .filter((f) => f.startsWith('assets/'))
        .forEach((fileName) => {
          // eslint-disable-next-line no-param-reassign
          delete bundle[fileName]
        })
    },
  }
}
