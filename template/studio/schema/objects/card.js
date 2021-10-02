export default {
  name: 'card',
  title: 'Card',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'richTextExtended'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'link'
    }
  ],

  preview: {
    select: {
      title: 'text',
      media: 'image'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Hero'}
    }
  }
}
