import { type Plugin } from 'vite'

// Converts CJS output to SystemJS System.register() wrapper.
// Bare specifiers (react, vue, etc.) are NOT listed as System.register deps
// because SystemJS can't resolve them without an import map. Instead, the
// require() shim looks them up from the SystemJS registry via System.get().
// This works because the loader registers all base libs (react, vue, etc.)
// via System.set() before any component modules are loaded.
export function cjsToSystem(): Plugin {
  return {
    name: 'cjs-to-system',
    generateBundle(_, bundle) {
      Object.entries(bundle).forEach(([fileName, entry]) => {
        if (entry.type !== 'chunk') return
        // Skip shared chunks (in assets/) - they're inlined by inlineChunks
        if (fileName.startsWith('assets/')) return

        const { code } = entry

        const wrapped = `System.register([],function(_export,_context){return{execute:function(){var require=function(n){if(n==='require')return require;if(n==='exports')return module.exports;if(n==='module')return module;var m=System.get(n);return m?(m.default!==undefined?m.default:m):null;};var module={exports:{}};var exports=module.exports;\n${code}\n_export(module.exports);}};});`

        // eslint-disable-next-line no-param-reassign
        entry.code = wrapped
      })
    },
  }
}
