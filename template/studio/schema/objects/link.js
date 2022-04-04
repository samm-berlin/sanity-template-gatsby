export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      type: 'string',
      name: 'type',
      options: {
        list: ['internal', 'external'],
        layout: 'radio',
      },
    },
    {
      name: 'internal',
      type: 'reference',
      to: [{ type: 'page' }, { type: 'news' }, { type: 'project' }, { type: 'product' }],
      hidden: ({ parent }) => parent?.type === 'external',
    },
    {
      name: 'url',
      type: 'url',
      hidden: ({ parent }) => parent?.type === 'internal',
    },
    {
      name: 'targetBlank',
      title: 'Open in new Tab',
      type: 'boolean',
    },
  ],
}
