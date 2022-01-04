const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * Helper to set environment variables available at runtime
 * (prefixed by GATSBY_)
 */
const setEnvVars = (vars) => {
  vars.forEach((envVar) => {
    process.env[`GATSBY_${envVar}`] = process.env[envVar]
  })
}

module.exports.setEnvVars = setEnvVars

/**
 * Helper to retrieve settings of specific sanity type
 */
const getSettings = ({ type, query }, { graphql }) =>
  new Promise((resolve) => {
    const typeQuery = `allSanity${capitalize(type)}`

    graphql(`
      {
        settings: ${typeQuery} {
          edges {
            node {
              ${query}
            }
          }
        }
      }
    `).then(({ data }) => {
      const settings = data.settings.edges[0] ? data.settings.edges[0].node || {} : {}

      resolve(settings)
    })
  })

module.exports.getSettings = getSettings

/**
 * Helper to create pages of specific sanity type
 * path, matchPath & component can either be strings or resolver functions
 * that get the node as args
 */
const createType = (
  { type, path, matchPath = null, component, contextQuery = '', contextReducer = null },
  { graphql, actions: { createPage }, reporter }
) =>
  new Promise((resolve) => {
    const typeQuery = `allSanity${capitalize(type)}`

    graphql(`
      {
        content: ${typeQuery}(filter: { slug: { current: { ne: null } } }) {
          edges {
            node {
              id
              slug {
                current
              }
              ${contextQuery}
            }
          }
        }
      }
    `).then(({ data }) => {
      const items = data.content.edges || []

      items.forEach(({ node }) => {
        if (node) {
          const itemPath = typeof path === 'string' ? path : path(node)
          let contextProps = {
            id: node.id
          }

          if (contextReducer) {
            contextProps = {
              ...contextProps,
              ...contextReducer(node)
            }
          }

          reporter.info(`Creating ${type}: ${itemPath}`)

          createPage({
            path: itemPath,
            matchPath: matchPath
              ? typeof matchPath === 'string'
                ? matchPath
                : matchPath(node)
              : undefined,
            component: typeof component === 'string' ? component : component(node),
            context: contextProps
          })
        }
      })
      resolve()
    })
  })

module.exports.createType = createType
