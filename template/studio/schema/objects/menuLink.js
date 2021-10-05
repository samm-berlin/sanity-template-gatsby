export default {
  name: 'menuLink',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'link',
      type: 'link'
    }
  ]
}
