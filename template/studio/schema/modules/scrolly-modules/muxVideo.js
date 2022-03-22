export default {
  title: 'Mux Video',
  name: 'scrollyModuleMuxVideo',
  type: 'object',
  fieldsets: [
    {
      name: 'animation',
      title: 'Animation',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 1,
      },
    },
    {
      name: 'settings',
      title: 'Settings',
      hidden: ({ parent }) => {
        console.log(parent)
        return parent?.animations?.scrubbed
      },
    },
    { name: 'options' },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title, media }) {
      return {
        title: 'Mux Video Module',
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
      title: 'Video file',
      name: 'video',
      type: 'mux.video',
    },
    {
      name: 'aspectRatio',
      type: 'aspectRatio',
      title: 'Aspect Ratio',
    },
    {
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      fieldset: 'settings',
      hidden: ({ parent }) => parent?.animations?.scrubbed,
    },
    {
      name: 'muted',
      title: 'Muted',
      description: 'Must be true if autoplay',
      type: 'boolean',
      fieldset: 'settings',
      hidden: ({ parent }) => parent?.animations?.scrubbed,
    },
    {
      name: 'controls',
      title: 'Controls',
      description: 'Show controls like play/pause etc',
      type: 'boolean',
      fieldset: 'settings',
      hidden: ({ parent }) => parent?.animations?.scrubbed,
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      fieldset: 'settings',
      hidden: ({ parent }) => {
        console.log(parent)
        return parent?.animations?.scrubbed
      },
    },
  ],
}
