import { createModule } from '@variousjs/various'
import type { App, ModuleDef } from '@variousjs/various'

type Strategy = App['middlewares'] & { version?: string }

// strategy modules are independently deployable "middleware releases";
// swapping the module name simulates releasing a new version, so updating
// middlewares never requires an app bundle rebuild
const STRATEGIES: ModuleDef[] = [
  'middleware-strategy',
  'middleware-strategy-next',
]

let index = 0
let current: Strategy = {}
let loading: Promise<void> | null = null

function load(): Promise<void> {
  if (!loading) {
    loading = createModule<Strategy>({ module: STRATEGIES[index] }, false)
      .then((m) => {
        current = m ?? {}
      })
      .catch(() => {
        // fail-open: a broken strategy release degrades to pass-through
        current = {}
      })
  }
  return loading
}

export function getStrategy(): Strategy {
  // lazy boot: this module is imported at app bundle scope, which runs
  // before createStore; middleware calls only happen after that
  load()
  return current
}

export function strategyReady(): Promise<void> {
  return load()
}

// simulates a new middleware release at runtime, resolves with the version
export async function updateStrategy(): Promise<string> {
  index = (index + 1) % STRATEGIES.length
  current = {}
  loading = null
  await load()
  return current.version ?? 'pass-through'
}
