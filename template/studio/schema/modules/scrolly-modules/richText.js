export default {
  name: 'scrollyModuleRichText',
  title: 'Rich Text',
  type: 'object',
  fieldsets: [{ name: 'options' }],
  fields: [
    {
      title: 'Module Options',
      type: 'scrollyModuleDefaultFields',
      name: 'options',
      fieldset: 'options',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'richTextExtended',
    },
  ],

  preview: {
    select: {
      title: 'text.text.0.children.0.text',
    },
    prepare({ title }) {
      return { title, subtitle: 'Rich Text' }
    },
  },
}
