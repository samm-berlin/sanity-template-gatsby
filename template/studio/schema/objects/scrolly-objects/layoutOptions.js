export default {
  name: 'layoutOptions',
  title: 'Layout Options',
  type: 'object',
  fields: [
    {
      title: 'Alignment',
      name: 'alignment',
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
      title: 'Height',
      name: 'height',
      type: 'number',
      description: 'Height in % of viewport height.',
      validation: Rule => Rule.min(0).max(100)
    }
  ],
}
