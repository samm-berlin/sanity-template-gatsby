export default {
  name: 'moduleHero',
  title: 'Hero',
  type: 'object',
  fieldsets: [
    {name: 'options'}
  ],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'imageField',
      options: {
        hotspot: true
      }
    },
    {
      name: 'heroTitle',
      title: 'Hero Text',
      type: 'richTextExtended'
    },
    {
      name: 'heroCta',
      title: 'Call to Action',
      type: 'button'
    }
  ],

  preview: {
    select: {
      media: 'heroImage'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Hero'}
    }
  }
}
