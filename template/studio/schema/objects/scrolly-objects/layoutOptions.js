export default {
  name: 'layoutOptions',
  title: 'Layout Options',
  type: 'object',
  fields: [
    {
      title: 'Horizontal Position',
      name: 'horizontalPosition',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'flex-start' },
          { title: 'Right', value: 'flex-end' },
          { title: 'Center', value: 'center' },
        ],
      },
    },
    {
      title: 'Height (optional)',
      name: 'height',
      type: 'number',
      description: 'Height in % of viewport height. If empty, module has height of content.',
      validation: (Rule) => Rule.min(0).max(100),
    },
    {
      title: 'Width',
      name: 'width',
      type: 'string',
      options: {
        list: [
          { title: 'Narrow', value: 'narrow' },
          { title: 'Regular', value: 'regular' },
          { title: 'Wide', value: 'wide' },
        ],
      },
    },
  ],
  initialValue: {
    horizontalPosition: 'center',
    width: 'regular',
  },
}
