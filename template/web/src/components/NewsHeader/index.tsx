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
    x: 4,
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
    x: [4, '15rem'],
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
        {category && (
          <Box pb="4" display={['unset', 'none']}>
            <Text variant="bodyTitleSmall" textAlign="center">
              {category.title}
            </Text>
          </Box>
        )}
        <Text variant="head" component="h1" textAlign="center">
          {title}
        </Text>
        {keyVisual && (
          <Box display={['unset', 'none']}>
            <Image image={keyVisual} aspectRatio="1"></Image>
          </Box>
        )}
        {keyVisual && (
          <Box display={['none', 'unset']}>
            <Image image={keyVisual}></Image>
          </Box>
        )}
      </ModuleContainer>
      <ModuleContainer options={moduleOptionsContainerNarrow}>
        {category && (
          <Box pb="2" display={['none', 'unset']}>
            <Text variant="bodyTitleSmall"> {category.title} </Text>
          </Box>
        )}
        {excerpt && (
          <Box pb="2">
            <Text variant="bodyTitle"> {excerpt}</Text>
          </Box>
        )}
        {tags && (
          <Box pb="2">
            <TagList tags={tags} numberOfTags={tags.length} />
          </Box>
        )}
        {_createdAt && <Text>{toDateString(_createdAt)}</Text>}
      </ModuleContainer>
    </Box>
  )
}

export default NewsHeader
