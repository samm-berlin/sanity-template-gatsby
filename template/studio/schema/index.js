import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettingsInformation from './singletons/siteSettingsInformation'
import siteSettingsMeta from './singletons/siteSettingsMeta'
import siteSettingsNavigation from './singletons/siteSettingsNavigation'
// import siteSettingsModules from './singletons/siteSettingsModules'

import page from './documents/page'
import post from './documents/posts'
import postCategory from './documents/posts/postCategory'
import product from './documents/products'
import productCategory from './documents/products/productCategory'

import contentModules from './modules'
import imageWithArtDirection from './objects/imageWithArtDirection'
import link from './objects/link'
import meta from './objects/meta'
import richTextExtended from './objects/richTextExtended'
import imageWithAlt from './objects/imageWithAlt'
import images from './objects/images'
import colorTheme from './objects/colorTheme'
import videoEmbed from './objects/videoEmbed'
import activation from './objects/activation'
import modulePadding from './objects/modulePadding'
import aspectRatio from './objects/aspectRatio'
import textAlignment from './objects/textAlignment'
import button, { buttonProperties } from './objects/button'
import card from './objects/card'

import imageModule from './modules/image'
import heroModule from './modules/hero'
import moduleListing from './modules/listing'
import richTextModule from './modules/richText'
import twoColumnModule from './modules/twoColumn'
import moduleDefaultFields from './modules/_defaultFields'
import moduleVideoEmbed from './modules/videoEmbed'
import moduleSpacer from './modules/spacer'
import moduleMarquee from './modules/marquee'

export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,

    // singletons
    siteSettingsInformation,
    siteSettingsMeta,
    siteSettingsNavigation,
    /* contentmoduleSettings are deactivated for now */
    // siteSettingsModules,

    // documents
    page,
    post,
    postCategory,
    product,
    productCategory,

    // objects
    contentModules,
    imageWithArtDirection,
    link,
    meta,
    richTextExtended,
    colorTheme,
    videoEmbed,
    activation,
    modulePadding,
    aspectRatio,
    textAlignment,
    button,
    buttonProperties,
    card,

    // modules
    moduleDefaultFields,
    imageModule,
    heroModule,
    richTextModule,
    twoColumnModule,
    moduleVideoEmbed,
    imageWithAlt,
    images,
    moduleSpacer,
    moduleMarquee,
    moduleListing
  ]
})
