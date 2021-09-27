export default {
  name: 'moduleImage',
  title: 'Image',
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
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt'
    }
  ],

  preview: {
    select: {
      title: 'image.alt',
      media: 'image'
    },
    prepare ({...selection}) {
      return {...selection, subtitle: 'Image'}
    }
  }
}
