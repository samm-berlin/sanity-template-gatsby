import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import NewsContainer from '@/containers/NewsContainer'
import { SanityNews } from 'web/graphql-types'

interface NewsProps {
  data: {
    news: SanityNews
  }
}

const News: FC<NewsProps> = ({ data: { news: sanityNews } }) => (
  <Layout>
    <NewsContainer news={sanityNews} />
  </Layout>
)

export default News

export const query = graphql`
  query ($id: String!) {
    news: sanityNews(id: { eq: $id }) {
      title
      seoSettings {
        ...seoSettingsData
      }
      contentModules {
        ...contentModulesData
      }
    }
  }
`
