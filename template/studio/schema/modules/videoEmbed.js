export default {
  type: 'object',
  name: 'moduleVideoEmbed',
  title: 'Video module',
  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    },
    {name: 'options'}
  ],
  preview: {
    select: {
      title: 'title',
      media: 'posterFrame'
    },
    prepare ({title, media}) {
      return {
        title: 'Video Module',
        media,
        subtitle: title
      }
    }
  },
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'video',
      title: 'Video URL',
      type: 'videoEmbed'
    },
    {
      name: 'posterFrame',
      type: 'imageField',
      title: 'Poster frame'
    },
    {
      name: 'aspectRatio',
      type: 'aspectRatio',
      title: 'Aspect Ratio'
    },
    {
      name: 'muted',
      title: 'Muted',
      description: 'Must be true if autoplay',
      type: 'boolean',
      fieldset: 'settings'
    },
    {
      name: 'controls',
      title: 'Controls',
      description: 'Show controls like play/pause etc',
      type: 'boolean',
      fieldset: 'settings'
    },
    {
      name: 'loop',
      title: 'Loop',
      type: 'boolean',
      fieldset: 'settings'
    },
    // {
    //   name: 'preload',
    //   title: 'Preload',
    //   type: 'string',
    //   fieldset: 'settings',
    //   options: {
    //     list: ['auto', 'none', 'metadata']
    //   }
    // },
    {
      name: 'autoplay',
      title: 'Auto play',
      type: 'boolean',
      fieldset: 'settings'
    }
    // {
    //   name: 'autoplay',
    //   title: 'Auto play',
    //   type: 'string',
    //   fieldset: 'settings',
    //   options: {
    //     layout: 'radio',
    //     list: [
    //       {
    //         title: 'None',
    //         value: 'off'
    //       },
    //       {
    //         title: 'Always',
    //         value: 'on'
    //       },
    //       {
    //         title: 'When in viewport',
    //         value: 'viewport'
    //       }
    //     ]
    //   }
    // }
  ]
}
