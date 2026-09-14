/**
 * Type-level assertion helpers (globally available in type-check files)
 *
 * Usage:
 *   type _r = Expect<Equal<typeof res, string>>
 *   // tsc fails when the asserted type is not exactly `string`
 */

// Fails unless the given type resolves exactly to `true`
type Expect<T extends true> = T

// Exact type identity check: distinguishes optionality, unions, literal types and `any`
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false
