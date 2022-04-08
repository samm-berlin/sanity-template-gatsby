import { graphql } from 'gatsby'
import React, { FC } from 'react'
import Layout from '@/containers/Layout'
import ProjectContainer from '@/containers/ProjectContainer'
import { Project } from 'web/types/custom-graphql-types'

interface ProjectProps {
  data: {
    project: Project
  }
}

const ProjectPage: FC<ProjectProps> = ({ data: { project: SanityProject } }) => (
  <Layout>
    <ProjectContainer project={SanityProject} />
  </Layout>
)

export default ProjectPage

export const query = graphql`
  query ($id: String!) {
    project: sanityProject(id: { eq: $id }) {
      _id
      _key
      _type
      title
      keyVisual {
        ...ImageWithPreview
      }
      excerpt
      tags {
        ...tagsData
      }
      seoSettings {
        ...seoSettingsData
      }
      contentModules {
        ...contentModulesData
      }
    }
  }
`
