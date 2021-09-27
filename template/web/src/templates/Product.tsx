import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import PageContainer from '@/containers/PageContainer'
import { SanityPage } from 'web/graphql-types'

interface PageProps {
  data: {
    page: SanityPage
  }
}

const Page: FC<PageProps> = ({ data: { page: sanityPage } }) => (
  <Layout>
    <PageContainer page={sanityPage} />
  </Layout>
)

export default Page

export const query = graphql`
  query($id: String!) {
    page: sanityPage(id: { eq: $id }) {
      title
      meta {
        ...metaData
      }
      contentModules {
        ...contentModulesData
      }
    }
  }
`
