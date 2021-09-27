import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import PageContainer from '@/containers/PageContainer'
import { SanityPage } from 'web/types/graphql-types'

interface PageProps {
  data: {
    page: SanityPage
  }
}

const Page: FC<PageProps> = ({ data: { page }, ...props }) => (
  <Layout>
    <PageContainer page={page} />
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
