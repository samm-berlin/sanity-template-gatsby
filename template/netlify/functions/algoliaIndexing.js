import algoliasearch from 'algoliasearch'
import sanityClient from '@sanity/client'
import indexer from 'sanity-algolia'
require("dotenv").config()

const algolia = algoliasearch(
  process.env.ALGOLIA_APPLICATION_ID,
  process.env.ALGOLIA_ADMIN_API_KEY
);
const sanity = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET,
  // If your dataset is private you need to add a read token.
  // You can mint one at https://manage.sanity.io,
  // token: "read-token",
  apiVersion: "2022-04-07",
  useCdn: false,
});

export default function handler(req, res) {
  // Tip: Its good practice to include a shared secret in your webhook URLs and
  // validate it before proceeding with webhook handling. Omitted in this short
  // example.
  if (req.headers["content-type"] !== "application/json") {
    res.status(400);
    res.json({ message: "Bad request" });
    return;
  }

  // Configure this to match an existing Algolia index name
  const algoliaIndex = algolia.initIndex("samm-boiler-index")

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
      }`,
      },
      projects: {
        index: algoliaIndex,
        projection: `{
        title,
        "path": slug.current,
        excerpt,
        tags,
      }`,
      },
    },
    // The second parameter is a function that maps from a fetched Sanity document
    // to an Algolia Record. Here you can do further mutations to the data before
    // it is sent to Algolia.
    (document) => {
      switch (document._type) {
        case "news":
          return document
        case "project":
          return document
        default:
          return document
      }
    }
  )

  return sanityAlgolia
    .webhookSync(sanity, req.body)
    .then(() => res.status(200).send("ok"))
}
