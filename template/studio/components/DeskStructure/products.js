import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import _ from 'lodash'
import {
  AiOutlineSkin as PageIcon,
  AiOutlineTags as CategoryIcon,
  GoArchive as AllIcon
} from 'react-icons/ai'
import {PreviewsStructure, previewUrl} from '../Preview'

const resolvePreviewUrl = async document => {
  const siteSettings = await sanityClient.fetch(
    '*[_type == "siteSettingsNavigation"] { "frontpageId": frontpage->_id }'
  )

  const {frontpageId} = siteSettings[0]

  return document._id === frontpageId
    ? previewUrl
    : `${previewUrl}/${document.slug.current}`
}

export default S.listItem()
  .title('Products')
  .icon(PageIcon)
  .schemaType('product')
  .child(
    S.list()
      .title('Activities')
      .items([
        S.documentTypeListItem('product')
          .title('All Products')
          .icon(AllIcon)
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .schemaType('product')
              .views(PreviewsStructure(resolvePreviewUrl))
          ),

        S.listItem()
          .title('Products by category')
          .child(
          // List out all tags
            S.documentTypeList('productCategory')
              .title('Products by category')
              .child(cat =>
                S.documentList()
                  .schemaType('product')
                  .title('Products')
                  .filter(
                    '_type == "product" && $category == cat._ref'
                  )
                  .params({cat})
              )
          ),

        S.divider(),

        S.listItem()
          .title('Categories')
          .icon(CategoryIcon)
          .schemaType('productCategory')
          .child(
            S.documentTypeList('productCategory').title('Categories')
          )
      ])
  )
