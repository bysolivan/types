/**
 * Defines an object that allows for updating its operational
 * parameters during its lifecycle.
 *
 * @template Settings - The configuration object.
 */
export interface Configurable<Settings> {
  /**
   * Updates the operational parameters of the object.
   * @param settings - The new configuration object to apply.
   */
  reconfigurate(settings: Settings): void
}
