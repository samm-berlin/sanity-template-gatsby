import S from '@sanity/desk-tool/structure-builder'
import {
  AiOutlineInfoCircle as InformationIcon,
  AiOutlineApartment as NavigationIcon,
  AiOutlineFileSearch as SeoIcon,
  AiOutlineSetting as SettingsIcon,
} from 'react-icons/ai'
import {BsLayoutWtf as ModulesIcon} from 'react-icons/bs'
import {GiCookie} from 'react-icons/gi'

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
          .title('SEO-Settings')
          .icon(SeoIcon)
          .child(
            S.document()
              .schemaType('siteSettingsSeo')
              .documentId('siteSettingsSeo')
              .title('SEO-Settings')
          ),

        S.listItem()
          .title('Cookies')
          .icon(GiCookie)
          .child(
            S.document()
              .schemaType('siteSettingsCookies')
              .documentId('siteSettingsCookies')
              .title('Cookie Settings')
          ),

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
