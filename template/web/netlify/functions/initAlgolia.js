const algoliasearch = require('algoliasearch')
const sanityClient = require('@sanity/client')
const indexer = require('sanity-algolia').default
require('dotenv').config()

const algolia = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_ADMIN_API_KEY)
const sanity = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  // If your dataset is private you need to add a read token.
  // You can mint one at https://manage.sanity.io,
  // token: "read-token",
  apiVersion: '2022-04-07',
  useCdn: false
})

// Configure this to match an existing Algolia index name
const algoliaIndex = algolia.initIndex('samm-boiler-index')

console.log(indexer)

const sanityAlgolia = indexer(
  // The first parameter maps a Sanity document type to its respective Algolia
  // search index. In this example both `post` and `article` Sanity types live
  // in the same Algolia index. Optionally you can also customize how the
  // document is fetched from Sanity by specifying a GROQ projection.
  //
  // In this example we fetch the plain text from Portable Text rich text
  // content via the pt::text function.
  //
  // _id and other system fields are handled automatically.
  {
    news: {
      index: algoliaIndex,
      projection: `{
        title,
        "path": slug.current,
        excerpt,
        tags,
      }`
    },
    projects: {
      index: algoliaIndex,
      projection: `{
        title,
        "path": slug.current,
        excerpt,
        tags,
      }`
    }
  },
  // The second parameter is a function that maps from a fetched Sanity document
  // to an Algolia Record. Here you can do further mutations to the data before
  // it is sent to Algolia.
  (document) => {
    switch (document._type) {
      case 'news':
        return Object.assign({}, document, {
          custom: 'A custom field'
        })
      case 'project':
        return {
          title: document.title
        }
      default:
        return document
    }
  }
)

const types = ['news', 'jobs', 'project']
const quqery = '* [_type in $types && !(_id in path("drafts.**"))][]._id'

sanity.fetch(quqery, { types }).then((ids) =>
  sanityAlgolia.webhookSync(sanity, {
    ids: { created: [], updated: ids, deleted: [] }
  })
)
