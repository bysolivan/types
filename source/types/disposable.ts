/**
 * Defines an object that can be disposed of to release resources
 * and mark it as unusable.
 */
export interface Disposable {
  /** Indicates whether the object has been disposed. */
  get disposed(): boolean
  /** Releases the resources held by the object. */
  dispose(): void
}
