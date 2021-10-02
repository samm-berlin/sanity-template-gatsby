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
      of: [{type: 'link'}]
    },
    {
      name: 'desktopSecondary',
      title: 'Secondary Navigation (Desktop)',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      name: 'mobileMain',
      title: 'Main Navigation (Mobile)',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      name: 'mobileSecondary',
      title: 'Secondary Navigation (Mobile)',
      type: 'array',
      of: [{type: 'link'}]
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'button'
    }
  ]
}
