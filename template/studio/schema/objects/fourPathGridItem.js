export default {
  title: 'Grid Item',
  name: 'gridItem',
  type: 'object',
  options: {
    editModal: 'fullscreen', // TODO: Solution for open image dialogue
  },
  fields: [
    {
      title: 'Page Reference',
      name: 'pageReference',
      type: 'reference',
      to: [{ type: 'news' }, { type: 'page' }, { type: 'project' }, { type: 'product' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'imageField',
    },
  ],
  preview: {
    select: {
      title: 'pageReference.title',
      media: 'image',
    },
    prepare({ ...selection }) {
      return { ...selection }
    },
  },
}
