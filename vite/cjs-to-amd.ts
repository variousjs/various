import { type Plugin } from 'vite'

// Converts CJS output to AMD define() wrapper so RequireJS can properly
// resolve and preload dependencies before executing the module factory.
// Uses generateBundle (not renderChunk) to ensure compatibility with inlineChunks.
export function cjsToAmd(): Plugin {
  return {
    name: 'cjs-to-amd',
    generateBundle(_, bundle) {
      Object.entries(bundle).forEach(([fileName, entry]) => {
        if (entry.type !== 'chunk') return
        // Skip shared chunks (in assets/) - they're inlined by inlineChunks
        if (fileName.startsWith('assets/')) return

        const { code } = entry

        // Find all require("...") calls with non-relative module names
        const deps = new Set<string>()
        const requireRegex = /require\s*\(\s*["']([^'"\s]+)["']\s*\)/g
        let match
        // eslint-disable-next-line no-cond-assign
        while ((match = requireRegex.exec(code)) !== null) {
          const dep = match[1]
          if (!['require', 'exports', 'module'].includes(dep) && !dep.startsWith('.')) {
            deps.add(dep)
          }
        }

        // Build AMD wrapper
        // Deps are listed in the array so RequireJS preloads them,
        // but only require/exports/module are passed as factory params
        // (dep names like "@variousjs/various" are not valid JS identifiers)
        const amdDeps = ['require', 'exports', 'module', ...Array.from(deps)]
        const depsStr = amdDeps.map((d) => `"${d}"`).join(',')
        const wrapped = `define([${depsStr}],function(require,exports,module){\n${code}\n});`

        // eslint-disable-next-line no-param-reassign
        entry.code = wrapped
      })
    },
  }
}
