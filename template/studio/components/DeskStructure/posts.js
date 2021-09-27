import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import _ from 'lodash'
import {
  AiOutlineFileText as PageIcon,
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
  .title('Blog Posts')
  .icon(PageIcon)
  .schemaType('post')
  .child(
    S.list()
      .title('Activities')
      .items([
        S.documentTypeListItem('post')
          .title('All Posts')
          .icon(AllIcon)
          .child(documentId =>
            S.document()
              .documentId(documentId)
              .schemaType('post')
              .views(PreviewsStructure(resolvePreviewUrl))
          ),

        S.listItem()
          .title('Posts by category')
          .child(
          // List out all tags
            S.documentTypeList('postCategory')
              .title('Posts by category')
              .child(cat =>
                S.documentList()
                  .schemaType('post')
                  .title('Posts')
                  .filter(
                    '_type == "post" && $category == cat._ref'
                  )
                  .params({cat})
              )
          ),

        S.listItem()
          .title('Posts by date')
          .child(() => {
            const type = 'post'
            const client = sanityClient.withConfig({apiVersion: '2021-06-07'})
            return client.fetch('* [_type == $type && defined(_createdAt)] {_id, _type, _createdAt}', {
              type
            })
              .then(docs => {
                // Create a map of days
                const days = {}
                docs.forEach(d => {
                  const date = new Date(d._createdAt)
                  const day = date.toLocaleDateString()
                  if (!days[day]) { days[day] = [] }
                  days[day].push(d._id)
                })
                return S.list()
                  .title('Posts by date')
                  .id('date')
                  .items(
                    Object.keys(days).map(day => {
                      return S.listItem()
                        .id(_.camelCase(day))
                        .title(day)
                        .child(
                          S.documentList()
                            .id(type)
                            .schemaType(type)
                            .defaultOrdering([{field: 'startTime', direction: 'asc'}])
                            .title(`Posts from ${day}`)
                            .filter(`_id in $ids`)
                            .params({ids: days[day]})
                        )
                    }
                    )
                  )
              }).catch(err => console.log(err))
          }),

        S.divider(),

        S.listItem()
          .title('Categories')
          .icon(CategoryIcon)
          .schemaType('postCategory')
          .child(
            S.documentTypeList('postCategory').title('Categories')
          )
      ])
  )
