/**
 * Get Uri based on content type
 */
const PREFIXES = {
  page: null,
  product: 'product',
  store: 'stores'
}

const getUri = (slug, type = 'page') => {
  const parts = [PREFIXES[type], slug].filter(Boolean)

  return parts.length ? `/${parts.join('/')}/` : '/'
}

module.exports.getUri = getUri

/**
 * Get query params from search string
 */
const getQueryParams = (searchString) => {
  const pairs = searchString.replace('?', '').split('&')

  return pairs.reduce((acc, cur) => {
    const [key, value] = cur.split('=')

    if (key && value && key.length > 0 && value.length > 0) {
      return {
        ...acc,
        [key]: value
      }
    }

    return acc
  }, {})
}

module.exports.getQueryParams = getQueryParams

/**
 * Check if a path is currently active (e.g. to check active nav-item)
 */
const isPathActive = (path, uri) => (path === '/' ? uri === '/' : uri.startsWith(path))

module.exports.isPathActive = isPathActive
