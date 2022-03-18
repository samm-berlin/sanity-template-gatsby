import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import {AiOutlineLayout as PageIcon} from 'react-icons/ai'

import {PreviewsStructure, previewUrl} from '../Preview'

const resolvePreviewUrl = async document => {
  const siteSettings = await sanityClient.fetch(
    '*[_type == "siteSettingsNavigation"] { "frontpageId": frontpage->_id }'
    )

    const {frontpageId} = siteSettings[0]

  return document._id.includes(frontpageId)
    ? previewUrl
    : `${previewUrl}/${document.slug.current}`
}

export default S.listItem()
  .title('Pages')
  .icon(PageIcon)
  .schemaType('page')
  .child(
    S.documentTypeList('page')
      .title('Pages')
      .child(documentId =>
        S.document()
          .documentId(documentId)
          .schemaType('page')
          .views(PreviewsStructure(resolvePreviewUrl))
      )
  )
