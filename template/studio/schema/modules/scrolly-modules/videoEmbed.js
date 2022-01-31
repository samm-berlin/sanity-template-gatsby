export default {
  type: 'object',
  name: 'scrollyModuleVideoEmbed',
  title: 'Embedded Video',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2,
      },
    },
    { name: 'options' },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'posterFrame',
    },
    prepare({ title, media }) {
      return {
        title: 'Video Module',
        media,
        subtitle: title,
      }
    },
  },
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
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'videoEmbed',
    },
    {
      name: 'posterFrame',
      type: 'imageField',
      title: 'Poster frame',
    },
    {
      name: 'aspectRatio',
      type: 'aspectRatio',
      title: 'Aspect Ratio',
      hidden: ({ document, parent }) =>
        parent._key === document.backgroundOptions?.backgroundModule?.modules[0]?._key,
    },
    {
      name: 'muted',
      title: 'Muted',
      type: 'boolean',
      fieldset: 'settings',
      hidden: ({ document, parent }) =>
        parent._key === document.backgroundOptions?.backgroundModule?.modules[0]?._key,
    },
    {
      name: 'controls',
      title: 'Controls',
      description: 'Show controls like play/pause etc',
      type: 'boolean',
      fieldset: 'settings',
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      fieldset: 'settings',
    },
  ],
}
