export default {
  name: 'furtherReading',
  title: 'Further Reading',
  type: 'object',

  preview: {
    select: {
      title: 'title'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Showcasing 2-4 featured post or pages'}
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: 'Featured item',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'post'}, {type: 'page'}, {type: 'product'}]}],
      validation: Rule => Rule.min(2).max(4)
    }
  ]
}
