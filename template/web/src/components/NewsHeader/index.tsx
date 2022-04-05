import React, { FC } from 'react'
import { graphql } from 'gatsby'
import Box from '@/atoms/Box'
import { News } from 'web/types/custom-graphql-types'
import Text from '@/atoms/Text'
import Image from '@/atoms/SanityImage'
import TagList from '../TagList'
import { toDateString } from '@/lib/date'
import ModuleContainer from '@/containers/ModuleContainer'

interface NewsHeaderProps {
  news: News
}

const moduleOptionsContainerWide = {
  padding: {
    container: false,
    x: -1,
    y: -1
  },
  theme: {
    theme: 'none',
    value: '#00ffe0'
  }
}

const moduleOptionsContainerNarrow = {
  padding: {
    container: true,
    x: '15rem',
    y: 4
  },
  theme: {
    theme: 'none',
    value: '#00ffe0'
  }
}

const NewsHeader: FC<NewsHeaderProps> = (props) => {
  const { title, keyVisual, category, excerpt, tags, _createdAt } = props.news

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ModuleContainer options={moduleOptionsContainerWide}>
        <Text> {title} </Text>
        {keyVisual && <Image image={keyVisual}></Image>}
      </ModuleContainer>
      <ModuleContainer options={moduleOptionsContainerNarrow}>
        {category && <Text> {category.title} </Text>}
        {excerpt && <Text> {excerpt}</Text>}
        {tags && <TagList tags={tags} numberOfTags={tags.length} />}
        {_createdAt && <Text>{toDateString(_createdAt)}</Text>}
      </ModuleContainer>
    </Box>
  )
}

export default NewsHeader
