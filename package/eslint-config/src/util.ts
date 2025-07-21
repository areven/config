// =============================================================================
// eslint-config utils
// =============================================================================

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function hasModule(moduleName: string): boolean {
  try {
    require.resolve(moduleName);
    return true;
  } catch (e) {
    return false;
  }
}
