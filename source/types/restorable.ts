/**
 * Defines an object capable of resetting its internal state
 * for reuse without being destroyed.
 */
export interface Restorable {
  /** Resets the internal volatile state of the object. */
  restore(): void
}
