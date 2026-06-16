export interface Configurable<Settings> {
  reconfigurate(settings: Settings): void
}
