export default {
  name: 'moduleRelationalGrid',
  title: 'Relational Grid',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options',
    },
    {
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      options: {
        list: [
          {title: 'Jobs', value: 'jobs'},
          {title: 'News', value: 'news'}
        ]
      }
    },
  ],
}
