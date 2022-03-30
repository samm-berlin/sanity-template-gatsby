import S from '@sanity/desk-tool/structure-builder'

import pages from './pages'
import products from './products'
import siteSettings from './siteSettings'
import news from './news'
import projects from './projects'

const hiddenDocs = [
  'page',
  'product',
  'productCategory',
  'news',
  'newsCategory',
  'project',
  // 'tag',
  'siteSettingsCookies',
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
      products,
      news,
      projects,
      ...S.documentTypeListItems().filter(hiddenDocTypes),

      S.divider(),

      siteSettings
    ])

// Fallback views
export const getDefaultDocumentNode = () => {
  return S.document().views([S.view.form()])
}
