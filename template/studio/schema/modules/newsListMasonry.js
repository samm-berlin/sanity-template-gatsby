export default {
  title: 'News List Masonry',
  name: 'moduleNewsListMasonry',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'News List Masonry',
      }
    },
  },
}
