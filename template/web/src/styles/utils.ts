import { theme } from './theme'

/**
 * px to rem conversion
 */
export const rem = (val: number): string => `${val / theme.scale / 16}rem`

/**
 * scale measurements
 */
export const scale = (value: number): string => `${value * theme.scale}rem`
