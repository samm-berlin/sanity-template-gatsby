import React, { FC } from 'react'
import ModulesLoop from '@/modules'
import { News } from 'web/types/custom-graphql-types'
import NewsHeader from '@/components/NewsHeader'
import Box from '@/atoms/Box'

interface NewsContainerProps {
  news: News
}

const NewsContainer: FC<NewsContainerProps> = (props) => {
  const { news } = props

  return (
    <Box pt="12rem">
      <NewsHeader news={news} />
      <ModulesLoop modules={news.contentModules?.modules} />
    </Box>
  )
}

export default NewsContainer
