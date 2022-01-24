export default {
  name: 'scrollyModuleImage',
  title: 'Image',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'scrollyModuleDefaultFields',
      name: 'options',
      fieldset: 'options',
      hidden: ({document, parent}) => parent._key === document.backgroundOptions?.backgroundModule?.modules[0]?._key
    },
    {
      name: 'image',
      title: 'Image',
      type: 'imageField',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
  ],

  preview: {
    select: {
      title: 'image.alt',
      media: 'image',
    },
    prepare({ ...selection }) {
      return { ...selection, subtitle: 'Image' }
    },
  },
}
