import S from '@sanity/base/structure-builder'

import {singletonTypes} from '../config'

/**
 * Disable creating new/multiple site settings
 */
export default [
  ...S.defaultInitialValueTemplateItems().filter(
    item => !singletonTypes.includes(item.spec.id)
  )
]
