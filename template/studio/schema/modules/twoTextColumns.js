export default {
  type: 'object',
  name: 'moduleTwoTextColumns',
  title: 'Two column text',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options',
    },
    {
      title: 'First text column',
      name: 'firstTextColumn',
      type: 'richText',
    },
    {
      title: 'Second text column',
      name: 'secondTextColumn',
      type: 'richText',
    },
  ],
  preview: {
    select: {
      title: 'firstTextColumn.text.0.children.0.text',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Two text columns',
      }
    },
  },
}
