export default {
  name: 'cookieCategory',
  title: 'Cookie Category',
  type: 'string',
  options: {
    list: [
      {title: 'Essential', value: 'essential'},
      {title: 'Statistics', value: 'statistics'},
      {title: 'External Media', value: 'external-media'}
    ]
  },
  validation: Rule => Rule.required()
}
