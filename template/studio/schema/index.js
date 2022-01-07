import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettingsInformation from './singletons/siteSettingsInformation'
import siteSettingsMeta from './singletons/siteSettingsMeta'
import siteSettingsNavigation from './singletons/siteSettingsNavigation'
import siteSettingsCookies from './singletons/siteSettingsCookies'
// import siteSettingsModules from './singletons/siteSettingsModules'

import imageField from './fields/image'

import page from './documents/page'
import post from './documents/posts'
import postCategory from './documents/posts/postCategory'
import product from './documents/products'
import productCategory from './documents/products/productCategory'
import scrollySection from './documents/scrollySection'

import contentModules from './modules'
import imageWithArtDirection from './objects/imageWithArtDirection'
import link from './objects/link'
import meta from './objects/meta'
import richTextExtended from './objects/richTextExtended'
import colorTheme from './objects/colorTheme'
import videoEmbed from './objects/videoEmbed'
import activation from './objects/activation'
import modulePadding from './objects/modulePadding'
import aspectRatio from './objects/aspectRatio'
import textAlignment from './objects/textAlignment'
import button, {buttonProperties} from './objects/button'
import card from './objects/card'
import menuLink from './objects/menuLink'
import cookie from './objects/cookie'
import cookieCategory from './objects/cookieCategory'
import sectionBackgroundOptions from './objects/sectionBackgroundOptions'

import imageModule from './modules/image'
import heroModule from './modules/hero'
import moduleListing from './modules/listing'
import richTextModule from './modules/richText'
import twoColumnModule from './modules/twoColumn'
import moduleDefaultFields from './modules/_defaultFields'
import moduleVideoEmbed from './modules/videoEmbed'
import moduleSpacer from './modules/spacer'
import moduleMarquee from './modules/marquee'
import moduleScrollySection from './modules/scrollySection'

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
    siteSettingsCookies,

    // documents
    page,
    post,
    postCategory,
    product,
    productCategory,
    scrollySection,

    // fields
    imageField,

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
    menuLink,
    cookie,
    cookieCategory,
    sectionBackgroundOptions,

    // modules
    moduleDefaultFields,
    imageModule,
    heroModule,
    richTextModule,
    twoColumnModule,
    moduleVideoEmbed,
    moduleSpacer,
    moduleMarquee,
    moduleListing,
    moduleScrollySection,
  ]
})
