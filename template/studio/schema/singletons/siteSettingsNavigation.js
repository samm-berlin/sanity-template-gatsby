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
      name: 'desktopMain',
      title: 'Main Navigation (Desktop)',
      type: 'array',
      of: [{type: 'menuLink'}]
    },
    {
      name: 'desktopSecondary',
      title: 'Secondary Navigation (Desktop)',
      type: 'array',
      of: [{type: 'menuLink'}]
    },
    {
      name: 'mobileMain',
      title: 'Main Navigation (Mobile)',
      type: 'array',
      of: [{type: 'menuLink'}]
    },
    {
      name: 'mobileSecondary',
      title: 'Secondary Navigation (Mobile)',
      type: 'array',
      of: [{type: 'menuLink'}]
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'button'
    }
  ]
}
