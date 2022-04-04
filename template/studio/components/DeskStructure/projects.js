import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import _ from 'lodash'
import {
  AiOutlineFileText as PageIcon,
  AiOutlineTags as CategoryIcon,
  GoArchive as AllIcon,
} from 'react-icons/ai'
import { BiProjects as ProjectsIcon } from 'react-icons/bi'
import { PreviewsStructure, previewUrl } from '../Preview'

const resolvePreviewUrl = async (document) => {
  const siteSettings = await sanityClient.fetch(
    '*[_type == "siteSettingsNavigation"] { "frontpageId": frontpage->_id }'
  )

  const { frontpageId } = siteSettings[0]

  return document._id === frontpageId ? previewUrl : `${previewUrl}/${document.slug.current}`
}

export default S.listItem()
  .title('Projects')
  .icon(ProjectsIcon)
  .schemaType('project')
  .child(
    S.list()
      .title('Activities')
      .items([
        S.documentTypeListItem('project')
          .title('All Projects')
          .icon(ProjectsIcon)
          .child((documentId) =>
            S.document()
              .documentId(documentId)
              .schemaType('project')
              .views(PreviewsStructure(resolvePreviewUrl))
          ),

        S.listItem()
          .title('Projects by tag')
          .child(
            // List out all tags
            S.documentTypeList('tag')
              .title('Projects by tag')
              .child((tagId) =>
                S.documentList()
                  .schemaType('project')
                  .title('Projects')
                  .filter('_type == "project" && $tagId == tags[]._ref')
                  .params({ tagId })
              )
          ),
      ])
  )
