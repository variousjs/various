/**
 * Type hint (hover) assertion test
 *
 * Uses the TypeScript Language Service (the underlying implementation of IDE
 * hovers) to verify that the type hints of the example code under test/type-check
 * match the expectations written in comments. Types come from the dist/types
 * build artifacts (consumer perspective); run npm run build:types first.
 *
 * Expected comment format (segments separated by " / "):
 *   - identifier: type  e.g. res: number, payload?: number, b: number | undefined
 *   - 'literal'         e.g. 'greet', 'ca'
 *   - bare type         e.g. number, string / any, Partial<I18nConfig>
 *
 * Rules:
 *   - A trailing comment applies to its own line; a standalone comment line
 *     applies to at most the next 5 code lines (stops at the next code line
 *     carrying its own expectation comment)
 *   - Union types (|) are asserted member by member, order not required
 *   - Comments with an unrecognizable format are ignored automatically
 *     (treated as plain descriptive text)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import ts from 'typescript'

const nodeRequire = createRequire(import.meta.url)
const here = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(here, '..', '..')
const libDir = path.dirname(nodeRequire.resolve('typescript'))

const TSX = path.join(ROOT, 'test/type-check/index.tsx')
const VUE = path.join(ROOT, 'test/type-check/index.vue')
const VUE_VIRTUAL = `${VUE}.__script__.ts`

const distIndex = path.join(ROOT, 'dist/types/public/index.d.ts')
if (!fs.existsSync(distIndex)) {
  process.stderr.write('[check:hints] dist/types artifacts missing, run first: npm run build:types\n')
  process.exit(1)
}

// Extract the <script lang="ts"> of a vue SFC into a virtual ts file
// (line numbers match the vue file)
const vueText = fs.readFileSync(VUE, 'utf8')
const vueScript = vueText.match(/<script lang="ts">([\s\S]*?)<\/script>/)
if (!vueScript) {
  process.stderr.write('[check:hints] <script lang="ts"> block not found in index.vue\n')
  process.exit(1)
}
const virtualFiles = { [VUE_VIRTUAL]: vueScript[1] }

const compilerOptions = {
  target: ts.ScriptTarget.ESNext,
  module: ts.ModuleKind.ESNext,
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  jsx: ts.JsxEmit.React,
  strict: true,
  esModuleInterop: true,
  resolveJsonModule: true,
  noEmit: true,
  baseUrl: ROOT,
  paths: {
    '@variousjs/various': ['./dist/types/public/index.d.ts'],
    '@variousjs/various/standalone': ['./dist/types/public/standalone.d.ts'],
  },
}

const scriptFiles = [
  TSX,
  VUE_VIRTUAL,
  path.join(ROOT, 'test/global.d.ts'),
  path.join(ROOT, 'src/globals.d.ts'),
]

const host = {
  getScriptFileNames: () => scriptFiles,
  getScriptVersion: () => '1',
  getScriptSnapshot: (fileName) => {
    if (fileName in virtualFiles) {
      return ts.ScriptSnapshot.fromString(virtualFiles[fileName])
    }
    return fs.existsSync(fileName)
      ? ts.ScriptSnapshot.fromString(fs.readFileSync(fileName, 'utf8'))
      : undefined
  },
  getCurrentDirectory: () => ROOT,
  getCompilationSettings: () => compilerOptions,
  getDefaultLibFileName: (options) => path.join(libDir, ts.getDefaultLibFileName(options)),
  fileExists: ts.sys.fileExists,
  readFile: ts.sys.readFile,
  readDirectory: ts.sys.readDirectory,
  directoryExists: ts.sys.directoryExists,
  getDirectories: ts.sys.getDirectories,
}

const service = ts.createLanguageService(host, ts.createDocumentRegistry())
const program = service.getProgram()

// Identifiers to query hovers for (i.e. names referenced in comment expectations)
const INTEREST = new Set([
  '$postMessage', '$dispatch', 'typedPostMessage', 'unTypedPostMessage',
  'target', 'action', 'event', 'payload', 'trigger', 'res', 'a', 'b',
])
const TOKEN_RE = /\$?[A-Za-z_$][\w$]*/g
const NAMED_RE = /^(\$?[A-Za-z_$][\w$]*)\??:\s*(.+)$/
const TYPE_RE = /^[A-Za-z_$'"][\w$<>|.'"\s-]*$/
const PRIMITIVES = new Set([
  'string', 'number', 'boolean', 'any', 'unknown', 'undefined', 'void', 'never', 'object',
])

const norm = (text) => text.replace(/[\s'"]/g, '')
const maskStrings = (line) => line.replace(/'[^']*'|"[^"]*"/g, (matched) => ' '.repeat(matched.length))

// Parse an expectation comment; returns null when a segment is
// unrecognizable (whole comment ignored)
function parseExpectation(text) {
  const segments = text.split(' / ').map((part) => part.trim()).filter(Boolean)
  if (!segments.length) {
    return null
  }
  const out = []
  for (let i = 0; i < segments.length; i += 1) {
    const seg = segments[i]
    const quoted = seg.match(/^'([^']*)'$/)
    const named = seg.match(NAMED_RE)
    const typeLike = /[A-Za-z]/.test(seg) && TYPE_RE.test(seg)
    const bareType = !named && typeLike
      && (seg.includes('|') || seg.includes('<') || PRIMITIVES.has(seg))
    if (quoted) {
      out.push({ kind: 'literal', value: quoted[1], raw: seg })
    } else if (named && typeLike) {
      out.push({
        kind: 'named',
        name: named[1],
        type: named[2],
        raw: seg,
      })
    } else if (bareType) {
      out.push({ kind: 'type', type: seg, raw: seg })
    } else {
      return null
    }
  }
  return out
}

function collectHovers(sf, fileName, lines, idx) {
  const map = {}
  const masked = maskStrings(lines[idx])
  const cut = masked.indexOf('//')
  const code = cut >= 0 ? masked.slice(0, cut) : masked
  Array.from(code.matchAll(TOKEN_RE)).forEach((match) => {
    const token = match[0]
    if (INTEREST.has(token) && !map[token]) {
      const pos = ts.getPositionOfLineAndCharacter(sf, idx, match.index)
      const info = service.getQuickInfoAtPosition(fileName, pos)
      if (info) {
        map[token] = ts.displayPartsToString(info.displayParts)
      }
    }
  })
  return map
}

const failures = []

function checkTarget(name, fileName, sf, lines) {
  let count = 0
  const cache = {}
  let inBlock = false

  const getHovers = (lineNo) => {
    if (!cache[lineNo]) {
      cache[lineNo] = collectHovers(sf, fileName, lines, lineNo)
    }
    return cache[lineNo]
  }

  const diags = [
    ...service.getSyntacticDiagnostics(fileName),
    ...service.getSemanticDiagnostics(fileName),
  ]
  diags.forEach((diag) => {
    const { line } = sf.getLineAndCharacterOfPosition(diag.start)
    const text = ts.flattenDiagnosticMessageText(diag.messageText, ' ')
    failures.push(`${name} L${line + 1} TS${diag.code} ${text}`)
  })

  for (let i = 0; i < lines.length; i += 1) {
    const raw = lines[i]
    if (raw.includes('/*')) {
      inBlock = true
    } else if (raw.includes('*/')) {
      inBlock = false
    } else if (!inBlock) {
      const masked = maskStrings(raw)
      const cut = masked.indexOf('//')
      const code = (cut >= 0 ? masked.slice(0, cut) : masked).trim()
      const comment = cut >= 0 ? raw.slice(cut + 2).trim() : ''
      const expectation = comment ? parseExpectation(comment) : null
      if (expectation) {
        // Associate code lines: trailing comment => its own line;
        // standalone comment => up to 5 code lines below
        let assoc = [i]
        if (!code) {
          assoc = []
          for (let j = i + 1; j < lines.length && assoc.length < 5; j += 1) {
            const nextRaw = lines[j]
            const isBlockEdge = nextRaw.includes('/*') || nextRaw.includes('*/')
            const nextMasked = maskStrings(nextRaw)
            const nextCut = nextMasked.indexOf('//')
            const nextCode = (nextCut >= 0 ? nextMasked.slice(0, nextCut) : nextMasked).trim()
            let nextExpectation = null
            if (nextCode && nextCut >= 0) {
              nextExpectation = parseExpectation(nextRaw.slice(nextCut + 2).trim())
            }
            if (isBlockEdge || (nextCode && nextExpectation)) {
              break
            }
            if (nextCode) {
              assoc.push(j)
            }
          }
        }

        const maps = assoc.map((idx) => getHovers(idx))
        const allText = norm(maps.map((item) => Object.values(item).join(' ')).join(' '))
        const where = code
          ? `${name} L${i + 1}`
          : `${name} L${i + 1} (applies to ${assoc.map((no) => `L${no + 1}`).join(',') || 'no code lines'})`

        for (let s = 0; s < expectation.length; s += 1) {
          const seg = expectation[s]
          let ok = false
          let got = ''
          if (seg.kind === 'named') {
            const text = maps.map((item) => item[seg.name]).find(Boolean)
            if (text) {
              got = norm(text)
              const members = seg.type.includes('|') ? seg.type.split('|') : [seg.type]
              ok = members.map((part) => norm(part)).every((part) => got.includes(part))
            }
          } else {
            got = allText
            ok = seg.kind === 'literal'
              ? got.includes(norm(seg.value))
              : got.includes(norm(seg.type))
          }
          if (!ok) {
            const flat = got.replace(/\s+/g, ' ').trim()
            failures.push(
              `${where} expected「${seg.raw}」not met, actual hover: ${flat.slice(0, 200) || '(none)'}`,
            )
          }
          count += 1
        }
      }
    }
  }
  return count
}

const tsxSf = program.getSourceFile(TSX)
const vueSf = program.getSourceFile(VUE_VIRTUAL)

if (!tsxSf || !vueSf) {
  process.stderr.write('[check:hints] failed to load test files, check that dist/types has been generated\n')
  process.exit(1)
}

const tsxCount = checkTarget('index.tsx', TSX, tsxSf, tsxSf.getFullText().split('\n'))
const vueCount = checkTarget('index.vue', VUE_VIRTUAL, vueSf, vueSf.getFullText().split('\n'))
service.dispose()

if (failures.length) {
  process.stderr.write(`[check:hints] ${failures.length} type hint(s) do not match expectations:\n\n`)
  failures.forEach((failure) => process.stderr.write(`  - ${failure}\n`))
  process.exit(1)
}

process.stdout.write(
  `[check:hints] passed: index.tsx ${tsxCount} + index.vue ${vueCount}, ${tsxCount + vueCount} assertions matched in total\n`,
)
