/**
 * Defines an object that can be secure exposed for public management
 *
 * @template ExposedType - The exposed interface of the object
 */
export interface Exposable<ExposedType> {
  expose(): ExposedType
}
