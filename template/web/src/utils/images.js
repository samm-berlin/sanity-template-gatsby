import imageUrlBuilder from '@sanity/image-url'

import theme from '@/styles/theme'
import { forceArray } from '@/utils/helpers'

/**
 * Sanity Image URL Helper
 */
const imageBuilder = imageUrlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET
})

export const sanityImage = (source) => {
  return imageBuilder.image(source)
}

/**
 * Get responsive sizes string for images based on grid and theme breakpoints
 */
const getSrcsetSize = (width) => {
  return typeof width === 'number' ? `${Math.round(width * 100)}vw` : width
}

export const getSrcsetSizes = (widths) => {
  const w = forceArray(widths)
  const lastSize = w.slice(-1)[0]

  const smallerSizes = w.slice(0, w.length - 1)
  let breakpointQueries

  if (smallerSizes.length > 0) {
    breakpointQueries = [
      smallerSizes.map(
        (width, i) => `(max-width: ${theme.breakpoints[i]}) ${getSrcsetSize(width)}`
      ),
      getSrcsetSize(lastSize)
    ]
  } else {
    breakpointQueries = [getSrcsetSize(lastSize)]
  }

  return breakpointQueries.join(', ')
}
