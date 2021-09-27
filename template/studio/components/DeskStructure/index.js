import S from '@sanity/desk-tool/structure-builder'

import pages from './pages'
import posts from './posts'
import products from './products'
import siteSettings from './siteSettings'

const hiddenDocs = [
  'page',
  'post',
  'product',
  'postCategory',
  'productCategory',
  // 'tag',
  'siteSettingsMeta',
  'siteSettingsNavigation',
  'siteSettingsInformation',
  'siteSettingsModules',
  'frontPageSettings',
  'media.tag' // media plugin
]

const hiddenDocsForStage =
  process.env.SANITY_STUDIO_STAGE === 'production'
    ? [...hiddenDocs, 'vimeo']
    : hiddenDocs

// Hide document types that we already have a structure definition for
const hiddenDocTypes = listItem =>
  !hiddenDocsForStage.includes(listItem.getId())

// Main Structure
export default () =>
  S.list()
    .title('Content')
    .items([
      pages,
      posts,
      products,
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.divider(),

      siteSettings
    ])

// Fallback views
export const getDefaultDocumentNode = () => {
  return S.document().views([S.view.form()])
}
