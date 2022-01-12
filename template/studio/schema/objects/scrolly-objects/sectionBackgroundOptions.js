export default {
  title: 'Background',
  name: 'sectionBackgroundOptions',
  type: 'object',

  fields: [
    {
      title: 'Type',
      name: 'backgroundType',
      type: 'string',
      options: {
        list: [
          { value: 'color', title: 'Color' },
          { value: 'image', title: 'Image' },
          { value: 'video', title: 'Video' },
        ],
      },
    },
    {
      title: 'Color',
      name: 'color',
      type: 'colorPicker',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.backgroundType !== 'color'
      },
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.backgroundType !== 'image'
      },
    },
    {
      title: 'Video',
      name: 'video',
      type: 'moduleVideoEmbed',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.backgroundType !== 'video'
      },
    },
  ],
}
