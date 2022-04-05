import React, { FC } from 'react'
import Box from '@/atoms/Box'
import { Project } from 'web/types/custom-graphql-types'
import Text from '@/atoms/Text'
import TagList from '../TagList'
import ModuleContainer from '@/containers/ModuleContainer'
import Hero from '@/modules/Hero'

interface ProjectHeaderProps {
  project: Project
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
    x: [4, '15rem'],
    y: 4
  },
  theme: {
    theme: 'none',
    value: '#00ffe0'
  }
}

const ProjectHeader: FC<ProjectHeaderProps> = (props) => {
  const { title, keyVisual, excerpt, tags } = props.project

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ModuleContainer options={moduleOptionsContainerWide}>
        {(keyVisual && <Hero heroTitleString={title} heroImage={keyVisual}></Hero>) || (
          <Text variant="head" component="h1" textAlign="center">
            {title}
          </Text>
        )}
      </ModuleContainer>
      <ModuleContainer options={moduleOptionsContainerNarrow}>
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
      </ModuleContainer>
    </Box>
  )
}

export default ProjectHeader
