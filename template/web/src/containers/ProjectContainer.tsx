import React, { FC } from 'react'
import ModulesLoop from '@/modules'
import { Project } from 'web/types/custom-graphql-types'
import Box from '@/atoms/Box'
import ProjectHeader from '@/components/ProjectHeader'

interface ProjectContainerProps {
  project: Project
}
const ProjectContainer: FC<ProjectContainerProps> = (props) => {
  const { project } = props

  return (
    <Box>
      <ProjectHeader project={project} />
      <ModulesLoop modules={project.contentModules?.modules} />
    </Box>
  )
}

export default ProjectContainer
