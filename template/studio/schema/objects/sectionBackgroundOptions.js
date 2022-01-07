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
          { value: 'color', title: 'color' },
          { value: 'image', title: 'image' },
          { value: 'video', title: 'video' },
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
      type: 'videoEmbed',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.backgroundType !== 'video'
      },
    },
  ],
}
