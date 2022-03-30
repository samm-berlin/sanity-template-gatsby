export default {
  name: 'moduleListing',
  title: 'Card Listing',
  type: 'object',

  preview: {
    select: {
      title: 'title'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Card Listing'}
    }
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {type: 'reference', to: [{type: 'news'}, {type: 'page'}, {type: 'project'}, {type: 'product'}]},
        {type: 'card'}
      ]
    }
  ]
}
