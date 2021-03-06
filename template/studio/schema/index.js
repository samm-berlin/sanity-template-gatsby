import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import siteSettingsInformation from './singletons/siteSettingsInformation'
import siteSettingsSeo from './singletons/siteSettingsSeo'
import siteSettingsNavigation from './singletons/siteSettingsNavigation'
import siteSettingsCookies from './singletons/siteSettingsCookies'
// import siteSettingsModules from './singletons/siteSettingsModules'

import imageField from './fields/image'

import page from './documents/page'
import product from './documents/products'
import productCategory from './documents/products/productCategory'
import news from './documents/news'
import newsCategory from './documents/news/newsCategory'
import project from './documents/project'
import tag from './documents/tag'
import jobs from './documents/jobs'
import scrollySection from './documents/scrollySection'

import contentModules from './modules'
import scrollyContentModules from './modules/scrolly-modules'
import scrollyBackgroundContentModules from './modules/scrolly-modules/backgroundContentModules'
import imageWithArtDirection from './objects/imageWithArtDirection'
import link from './objects/link'
import seoSettings from './objects/seoSettings'
import richText from './objects/richText'
import richTextExtended from './objects/richTextExtended'
import colorTheme from './objects/colorTheme'
import videoEmbed from './objects/videoEmbed'
import videoUploaded from './objects/videoUploaded'
import activation from './objects/activation'
import modulePadding from './objects/modulePadding'
import aspectRatio from './objects/aspectRatio'
import textAlignment from './objects/textAlignment'
import button, {buttonProperties} from './objects/button'
import card from './objects/card'
import menuLink from './objects/menuLink'
import cookie from './objects/cookie'
import cookieCategory from './objects/cookieCategory'
import fourPathGridItem from './objects/fourPathGridItem'

import sectionBackgroundOptions from './objects/scrolly-objects/sectionBackgroundOptions'
import scrollOptions from './objects/scrolly-objects/scrollOptions'
import layoutOptions from './objects/scrolly-objects/layoutOptions'

import imageModule from './modules/image'
import heroModule from './modules/hero'
import moduleListing from './modules/listing'
import richTextModule from './modules/richText'
import twoColumnModule from './modules/twoColumn'
import twoTextColumnsModule from './modules/twoTextColumns'
import moduleDefaultFields from './modules/_defaultFields'
import moduleVideoEmbed from './modules/videoEmbed'
import moduleSpacer from './modules/spacer'
import moduleMarquee from './modules/marquee'
import moduleScrollySection from './modules/scrollySection'
import moduleRelationalGrid from './modules/relationalGrid'
import moduleRelatedList from './modules/relatedList'
import moduleNewsListMasonry from './modules/newsListMasonry'
import moduleFourPathGrid from './modules/fourPathGrid'
import moduleStatement from './modules/statement'

import scrollyModuleDefaultFields from './modules/scrolly-modules/_defaultFields'
import scrollyModuleRichText from './modules/scrolly-modules/richText'
import scrollyModuleImage from './modules/scrolly-modules/image'
import scrollyModuleSpacer from './modules/scrolly-modules/spacer'
import scrollyModuleVideoEmbed from './modules/scrolly-modules/videoEmbed'
import scrollyModuleVideoUploaded from './modules/scrolly-modules/videoUploaded'



export default createSchema({
  name: 'default',
  types: [
    ...schemaTypes,

    // singletons
    siteSettingsInformation,
    siteSettingsSeo,
    siteSettingsNavigation,
    /* contentmoduleSettings are deactivated for now */
    // siteSettingsModules,
    siteSettingsCookies,

    // documents
    page,
    product,
    productCategory,
    news,
    newsCategory,
    project,
    tag,
    jobs,

    // fields
    imageField,

    // objects
    contentModules,
    imageWithArtDirection,
    link,
    seoSettings,
    richText,
    richTextExtended,
    colorTheme,
    videoEmbed,
    videoUploaded,
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
    fourPathGridItem,

    // modules
    moduleDefaultFields,
    imageModule,
    heroModule,
    richTextModule,
    twoColumnModule,
    twoTextColumnsModule,
    moduleVideoEmbed,
    moduleSpacer,
    moduleMarquee,
    moduleListing,
    moduleRelationalGrid,
    moduleRelatedList,
    moduleNewsListMasonry,
    moduleFourPathGrid,
    moduleStatement,

    /**
      Scrolly Sections
    **/

    scrollySection,

    // objects
    scrollyContentModules,
    scrollyBackgroundContentModules,

    sectionBackgroundOptions,
    scrollOptions,
    layoutOptions,

    moduleScrollySection,

    // scrolly-modules
    scrollyModuleDefaultFields,
    scrollyModuleRichText,
    scrollyModuleImage,
    scrollyModuleSpacer,
    scrollyModuleVideoEmbed,
    scrollyModuleVideoUploaded,
  ],
})
