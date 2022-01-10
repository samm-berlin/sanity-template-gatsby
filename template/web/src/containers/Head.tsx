import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet, { HelmetProps } from 'react-helmet'
// import { mapToSingleObject } from '@/lib/helpers'
// import fonts from '@/assets/fonts.css'

type MetaData = {
  robotsIndex: boolean
  metaTitle: string | null
  metaDescription: string | null
  ogImage: unknown
}

type HeadProps = {
  title?: string
  meta?: MetaData
} & HelmetProps

const Head = (props: HeadProps): JSX.Element => {
  const { meta, title } = props

  const { data } = useStaticQuery(graphql`
    query {
      data: allSanitySiteSettingsMeta {
        edges {
          node {
            meta {
              robotsIndex
              metaTitle
              metaDescription
              ogImage {
                asset {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)

  // const data = {
  //   robotsIndex: 0,
  //   metaTitle: 'nicht neu',
  //   metaDescription: ''
  // }

  const { meta: defaultMeta } = /* mapToSingleObject(data) */ data

  // if this is not the production environment, we don't want to index the site
  // noindex set in general siteSettings has priority over page-specific setting
  let indexSafe = 'noindex,nofollow'

  if (process.env.STAGE === 'production') {
    indexSafe = defaultMeta?.robotsIndex && meta?.robotsIndex ? 'index,follow' : 'noindex,follow'
  }

  const ogImage = meta?.ogImage || defaultMeta?.ogImage

  return (
    <Helmet
    //titleTemplate={`%s — ${defaultMeta?.metaTitle}`}
    //defaultTitle={defaultMeta?.metaTitle || title}
    // {...props}
    >
      <html lang="en" />

      <style type="text/css">{}</style>

      {/* <meta name="robots" content={indexSafe} />

  <meta name="description" content={meta?.metaDescription || defaultMeta?.metaDescription} /> */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no"
      />

      <link
        href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
        rel="stylesheet"
        type="text/css"
      />
      {/* <style type="text/css">{fonts}</style> */}

      {/* ogImage && <meta property="og:image" content={ogImage.asset.url} /> */}
    </Helmet>
  )
}

export const query = graphql`
  fragment metaData on SanityMeta {
    robotsIndex
    metaTitle
    metaDescription
    ogImage {
      asset {
        url
      }
    }
  }
`

export default Head
