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
import imagesWithText from './objects/imagesWithText'
import link from './objects/link'
import meta from './objects/meta'
import richTextExtended from './objects/richTextExtended'
import richTextSimple from './objects/richTextSimple'
import placeDetails from './objects/placeDetails'
import heroSlider from './objects/heroSlider'
import imageWithAlt from './objects/imageWithAlt'
import imageTwoColumns from './objects/imageTwoColumns'
import furtherReading from './objects/furtherReading'
import images from './objects/images'
import colorTheme from './objects/colorTheme'
import videoEmbed from './objects/videoEmbed'

import imageModule from './modules/image'
import heroModule from './modules/hero'
import heroSliderModule from './modules/heroSlider'
import furtherReadingModule from './modules/furtherReading'
import richTextModule from './modules/richText'
import twoColumnModule from './modules/twoColumn'
import hero from './modules/heroOld'
import moduleDefaultFields from './modules/_defaultFields'
import moduleVideoEmbed from './modules/videoEmbed'

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
    richTextSimple,
    placeDetails,
    colorTheme,
    videoEmbed,

    // modules
    moduleDefaultFields,
    imageModule,
    heroModule,
    heroSliderModule,
    furtherReadingModule,
    richTextModule,
    twoColumnModule,
    moduleVideoEmbed,
    imageTwoColumns,
    imageWithAlt,
    images,
    imagesWithText,
    hero,
    heroSlider,
    furtherReading
  ]
})
