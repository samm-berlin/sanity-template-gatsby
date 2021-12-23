export default {
  name: 'siteSettingsCookies',
  title: 'Cookies',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'cookies',
      title: 'Cookies',
      type: 'array',
      of: [
        {type: 'cookie'}
      ]
    }
  ]
}
