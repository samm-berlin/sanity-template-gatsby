import React, { FC } from 'react'
import { SanityNews } from 'web/types/graphql-types'
import ModulesLoop from '@/modules'

interface NewsProps {
  news: SanityNews
}
const NewsContainer: FC<NewsProps> = ({ news: { title, meta, contentModules }, ...props }) => {
  return <ModulesLoop modules={contentModules?.modules} />
}

export default NewsContainer
