export default {
  name: 'siteSettingsSeo',
  title: 'SEO-Settings',
  type: 'document',

  fields: [
    {
      name: 'seoSettings',
      title: 'Default SEO-Settings',
      type: 'seoSettings',
      options: {
        collapsible: false,
        collapsed: false,
      },
    },
  ],
}
