import React, { FC } from 'react'
import { SanityProject } from 'web/types/graphql-types'
import ModulesLoop from '@/modules'

interface ProjectProps {
  project: SanityProject
}
const ProjectContainer: FC<ProjectProps> = ({
  project: { title, meta, contentModules },
  ...props
}) => {
  return <ModulesLoop modules={contentModules?.modules} />
}

export default ProjectContainer
