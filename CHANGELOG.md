# Changelog

The first release of `@bysolivan/types`. This version introduces a core set of
framework-agnostic lifecycle interfaces designed to standardize object behavior
across projects.

## [1.0.0 - 1.0.2] - 2026-06-16

### Added

- **`Disposable`** interface for resource cleanup and lifecycle termination.
- **`Restorable`** interface for resetting internal state for object reuse.
- **`Configurable<T>`** interface for updating operational parameters via
  generics.
