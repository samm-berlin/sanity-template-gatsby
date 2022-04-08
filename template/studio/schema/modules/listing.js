export default {
  title: 'Listing (all items)',
  name: 'moduleListing',
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
          { title: 'Jobs', value: 'jobs' },
          { title: 'News', value: 'news' },
          { title: 'Projects', value: 'project' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'postType',
    },
    prepare({title}) {
      return {
        title: title,
        subtitle: 'Listing',
      }
    },
  },
}
