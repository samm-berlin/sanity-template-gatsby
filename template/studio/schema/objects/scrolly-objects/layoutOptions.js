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
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' },
        ],
      },
    },
  ],
}
