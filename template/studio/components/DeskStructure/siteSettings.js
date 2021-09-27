import S from '@sanity/desk-tool/structure-builder'
import {
  AiOutlineInfoCircle as InformationIcon,
  AiOutlineApartment as NavigationIcon,
  AiOutlineFileSearch as MetaIcon,
  AiOutlineSetting as SettingsIcon
} from 'react-icons/ai'
import {BsLayoutWtf as ModulesIcon} from 'react-icons/bs'

export default S.listItem()
  .title('Settings')
  .icon(SettingsIcon)
  .child(
    S.list()
      .title('Settings')

      .items([
        S.listItem()
          .title('Information')
          .icon(InformationIcon)
          .child(
            S.document()
              .schemaType('siteSettingsInformation')
              .documentId('siteSettingsInformation')
              .title('Global Information')
          ),

        S.listItem()
          .title('Navigation')
          .icon(NavigationIcon)
          .child(
            S.document()
              .schemaType('siteSettingsNavigation')
              .documentId('siteSettingsNavigation')
              .title('Navigation Settings')
          ),

        S.listItem()
          .title('Meta')
          .icon(MetaIcon)
          .child(
            S.document()
              .schemaType('siteSettingsMeta')
              .documentId('siteSettingsMeta')
              .title('Meta Settings')
          )

        // contentmoduleSettings are deactivated for now
        // S.listItem()
        //   .title('Content Modules')
        //   .icon(ModulesIcon)
        //   .child(
        //     S.document()
        //       .schemaType('siteSettingsModules')
        //       .documentId('siteSettingsModules')
        //       .title('Content Modules Settings')
        //   )
      ])
  )
