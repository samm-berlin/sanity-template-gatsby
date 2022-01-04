/**
 * Clamp a value betwenn min and max
 */
export const clamp = (val, min, max) => Math.min(Math.max(min, val), max)
