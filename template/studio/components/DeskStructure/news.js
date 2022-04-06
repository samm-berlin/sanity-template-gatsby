import S from '@sanity/desk-tool/structure-builder'
import sanityClient from 'part:@sanity/base/client'
import _ from 'lodash'
import {
  AiOutlineFileText as PageIcon,
  AiOutlineTags as CategoryIcon,
  GoArchive as AllIcon
} from 'react-icons/ai'
import {BiNews as NewsIcon } from 'react-icons/bi'
import { PreviewsStructure, previewUrl } from '../Preview'

const resolvePreviewUrl = async (document) => {
  const siteSettings = await sanityClient.fetch(
    '*[_type == "siteSettingsNavigation"] { "frontpageId": frontpage->_id }'
  )

  const { frontpageId } = siteSettings[0]

  return document._id === frontpageId ? previewUrl : `${previewUrl}/${document.slug.current}`
}

export default S.listItem()
  .title('News')
  .icon(NewsIcon)
  .schemaType('news')
  .child(
    S.list()
      .title('Activities')
      .items([
        S.documentTypeListItem('news')
          .title('All News')
          .icon(NewsIcon)
          .child((id) =>
            S.documentList()
              .title('All News')
              .schemaType('news')
              .filter('_type == "news"')
              .params({ id })
              .menuItems([
                ...S.documentTypeList('news').getMenuItems(),
              ])
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('news')
                  .views(PreviewsStructure(resolvePreviewUrl))
              )
          ),

        S.listItem()
          .title('News by category')
          .child(
            // List out all tags
            S.documentTypeList('newsCategory')
              .title('News by category')
              .child((id) =>
                S.documentList()
                  .title('News')
                  .schemaType('news')
                  .filter('_type == "news" && $id == category._ref')
                  .params({ id })
              )
          ),

        S.listItem()
          .title('News by tag')
          .child(
            // List out all tags
            S.documentTypeList('tag')
              .title('News by tag')
              .child((tagId) =>
                S.documentList()
                  .schemaType('news')
                  .title('News')
                  .filter('_type == "news" && $tagId == tags[]._ref')
                  .params({ tagId })
              )
          ),

        S.listItem()
          .title('News by date')
          .child(() => {
            const type = 'news'
            const client = sanityClient.withConfig({ apiVersion: '2021-06-07' })
            return client
              .fetch('* [_type == $type && defined(_createdAt)] {_id, _type, _createdAt}', {
                type,
              })
              .then((docs) => {
                // Create a map of days
                const days = {}
                docs.forEach((d) => {
                  const date = new Date(d._createdAt)
                  const day = date.toLocaleDateString()
                  if (!days[day]) {
                    days[day] = []
                  }
                  days[day].push(d._id)
                })
                return S.list()
                  .title('News by date')
                  .id('date')
                  .items(
                    Object.keys(days).map((day) => {
                      return S.listItem()
                        .id(_.camelCase(day))
                        .title(day)
                        .child(
                          S.documentList()
                            .id(type)
                            .schemaType(type)
                            .defaultOrdering([{ field: 'startTime', direction: 'asc' }])
                            .title(`News from ${day}`)
                            .filter(`_id in $ids`)
                            .params({ ids: days[day] })
                        )
                    })
                  )
              })
              .catch((err) => console.log(err))
          }),

        S.divider(),

        S.listItem()
          .title('Categories')
          .icon(CategoryIcon)
          .schemaType('newsCategory')
          .child(S.documentTypeList('newsCategory').title('Categories')),
      ])
  )
