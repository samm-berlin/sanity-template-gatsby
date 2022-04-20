const algoliasearch = require('algoliasearch')
const sanityClient = require('@sanity/client')
const indexer = require('sanity-algolia').default
require('dotenv').config()

const algolia = algoliasearch('71VEX14UR3', 'e5ba4d816b7b3195f7f63548de4c7b12')
const sanity = sanityClient({
  projectId: '8mrvczjr',
  dataset: 'production',
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
        date,
        "image": featuredImage,
        title,
        slug,
        _type,
        excerpt,
        "tags": tags[]->{
          _type,
          title
        }
      }`
    },
    projects: {
      index: algoliaIndex,
      projection: `{
        title,
        "image": featuredImage,
        _type,
        slug,
        excerpt,
        "tags": tags[]->{
          _type,
          title
        },
      }`
    }
  },
  // The second parameter is a function that maps from a fetched Sanity document
  // to an Algolia Record. Here you can do further mutations to the data before
  // it is sent to Algolia.
  (document) => {
    switch (document._type) {
      default:
        return document
    }
  }
)

const types = ['news', 'jobs', 'projects']
const quqery = '* [_type in $types && !(_id in path("drafts.**"))][]._id'

sanity.fetch(quqery, { types }).then((ids) =>
  sanityAlgolia.webhookSync(sanity, {
    ids: { created: [], updated: ids, deleted: [] }
  })
)
