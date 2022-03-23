export default {
  name: 'scrollyModuleMultiImages',
  title: 'Multiple Images',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'scrollyModuleDefaultFields',
      name: 'options',
      fieldset: 'options',
      hidden: ({ document, parent }) =>
        parent._key === document.backgroundOptions?.backgroundModule?.modules[0]?._key,
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageField' }],
    },
    {
      name: 'transitionType',
      title: 'Transition Type',
      type: 'string',
      options: {
        list: [
          { title: 'Scroll Horizontal', value: 0 },
          { title: 'Scroll Vertical', value: 1 },
          { title: 'Fade', value: 2 },
          { title: 'Before / After', value: 3 },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'transitionTime',
      title: 'Transition Time',
      description:
        'Transition time per transition. It is a relative value to the overall timeline, which means: How many percent of the total scroll distance is amounted to one transition.',
      type: 'number',
      validation: (Rule) => Rule.min(0).max(100).required(),
    },
  ],
}
