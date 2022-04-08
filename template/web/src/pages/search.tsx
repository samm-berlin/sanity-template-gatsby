import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import SearchContainer from '@/containers/SearchContainer'

interface SearchPageProps {}

const SearchPage: FC<SearchPageProps> = (props) => (
  <Layout>
    <SearchContainer />
  </Layout>
)

export default SearchPage
