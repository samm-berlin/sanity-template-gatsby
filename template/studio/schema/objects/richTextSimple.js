export default {
  name: 'richTextSimple',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [{ title: 'Emphasis', value: 'em' }],
            annotations: [
              {
                name: 'link',
                title: 'Link',
                type: 'link',
              },
            ],
          },
        },
      ],
    },
  ],
};
