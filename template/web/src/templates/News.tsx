import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import NewsContainer from '@/containers/NewsContainer'
import { News } from 'web/types/custom-graphql-types'

interface NewsProps {
  data: {
    news: News
  }
}

const NewsPage: FC<NewsProps> = ({ data: { news: sanityNews } }) => (
  <Layout>
    <NewsContainer news={sanityNews} />
  </Layout>
)

export default NewsPage

export const query = graphql`
  query ($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      _id
      _key
      _type
      title
      keyVisual {
        ...ImageWithPreview
      }
      category {
        title
      }
      excerpt
      tags {
        ...tagsData
      }
      _createdAt
      seoSettings {
        ...seoSettingsData
      }
      contentModules {
        ...contentModulesData
      }
    }
  }
`
