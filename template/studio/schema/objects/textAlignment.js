export default {
  name: 'textAlignment',
  type: 'object',
  title: 'Text Alignment',
  fields: [
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
          {title: 'Center', value: 'center'}
        ]
      }
    }
  ]
}
