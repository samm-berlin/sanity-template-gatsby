export default {
  name: 'siteSettingsNavigation',
  title: 'Navigation',
  type: 'document',

  fields: [
    {
      name: 'frontpage',
      title: 'Frontpage',
      type: 'reference',
      to: [{type: 'page'}]
    },
    {
      name: 'mainNavigationItems',
      title: 'Main Navigation',
      type: 'array',
      of: [{type: 'reference', to: {type: 'page'}}]
    }
  ]
}
