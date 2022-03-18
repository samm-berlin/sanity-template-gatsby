// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')

const isProd = process.env.NODE_ENV === 'production'

const SITE_URL = 'https://samm-boiler.netlify.app'
// const SITE_URL = '<#< deployments.web.url >#>';

module.exports = {
  siteMetadata: {
    siteUrl: SITE_URL
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sanity-image',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        includeFragments: false
        // fragmentName: 'Image',
        // fragmentTypeName: 'SanityImage'
      }
    },

    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'types/graphql-types.ts',
        codegen: true,
        codegenDelay: 250
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    // options: {
    //   name: `images`,
    //   path: path.join(__dirname, `src`, `images`)
    // }
    // },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    },
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-netlify'
  ]
}
