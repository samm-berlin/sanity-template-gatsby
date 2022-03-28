export default {
  name: 'moduleRelatedList',
  title: 'Related List (Further Reading)',
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
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Related Posts',
      name: 'relatedPosts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'projects' }, { type: 'news' }],
        },
      ],
    },
  ],
}
