import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import ProjectContainer from '@/containers/ProjectContainer'
import { SanityProject } from 'web/types/graphql-types'

interface ProjectProps {
  data: {
    project: SanityProject
  }
}

const Project: FC<ProjectProps> = ({ data: { project }, ...props }) => (
  <Layout>
    <ProjectContainer project={project} />
  </Layout>
)

export default Project

export const query = graphql`
  query ($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      title
      seoSettings {
        ...seoSettingsData
      }
      contentModules {
        ...contentModulesData
      }
    }
  }
`
