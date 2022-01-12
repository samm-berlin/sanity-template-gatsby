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
  ],
}
