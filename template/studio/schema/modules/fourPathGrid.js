export default {
  title: 'Four Path Grid',
  name: 'moduleFourPathGrid',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options',
    },
    {
      title: 'Item',
      name: 'items',
      type: 'array',
      of: [{ type: 'gridItem' }],
      validation: Rule => Rule.length(4).required()
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Four Path Grid',
      }
    },
  },
}
