/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const { setEnvVars, createType, getSettings } = require('./src/utils/build')
const { getUri } = require('./src/utils/routing')
// const { isFuture } = require("date-fns");
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions

  createTypes([
    schema.buildObjectType({
      name: 'SanityPost',
      interfaces: ['Node'],
      fields: {
        isPublished: {
          type: 'Boolean!',
          resolve: (source) => new Date(source.publishedAt) <= new Date()
        }
      }
    })
  ])

  const typeDefs = `
    type ContentModule implements Node {
      joinedAt: Date
    }
  `
  createTypes(typeDefs)
}

/**
 * Webpack Config
 */
exports.onCreateWebpackConfig = ({ actions }) => {
  // absolute imports with "@/…"
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  })
}

/**
 * Main Build Process
 */
exports.createPages = async (apiProps) => {
  // setup env variables
  setEnvVars([
    'STAGE',
    'SANITY_PROJECT_ID',
    'SANITY_DATASET',
    'SHOPIFY_SHOP_NAME',
    'SHOPIFY_ACCESS_TOKEN',
    'MAILCHIMP_SUBSCRIBE_URL'
  ])

  // get site settings
  const siteSettings = await getSettings(
    {
      type: 'siteSettingsNavigation',
      query: `
        frontpage {
          id
        }
      `
    },
    apiProps
  )

  const frontpageId = siteSettings?.frontpage?.id

  // pages
  const pages = createType(
    {
      type: 'page',
      path: ({ id, slug }) => (id === frontpageId ? '/' : getUri(slug.current, 'page')),
      component: path.resolve(__dirname, 'src/templates/Page.tsx')
    },
    apiProps
  )

  // blog posts stores
  const posts = createType(
    {
      type: 'post',
      path: ({ slug }) => getUri(slug.current, 'post'),
      component: path.resolve(__dirname, 'src/templates/Post.tsx')
    },
    apiProps
  )

  // products
  const stores = createType(
    {
      type: 'product',
      path: ({ slug }) => getUri(slug.current, 'product'),
      component: path.resolve(__dirname, 'src/templates/Product.tsx')
    },
    apiProps
  )

  const allContent = await Promise.all([pages /* , stores, posts */])
  return allContent
}
