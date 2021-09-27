export default {
  name: 'moduleHero',
  title: 'Hero',
  type: 'object',
  fields: [
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image'
    },
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'text'
    }
  ],

  preview: {
    select: {
      title: 'heroTitle',
      media: 'heroImage'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Hero'}
    }
  }
}
