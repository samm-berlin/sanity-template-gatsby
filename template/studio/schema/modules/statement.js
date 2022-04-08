export default {
  name: 'moduleStatement',
  title: 'Statement',
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
      title: 'Font Size',
      name: 'fontSize',
      type: 'string',
      options: {
        list: [
          {
            title: 'small',
            value: 'small',
          },
          {
            title: 'medium',
            value: 'medium',
          },
          {
            title: 'large',
            value: 'large',
          },
        ],
      },
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
    {
      title: `The authors name`,
      name: 'authorName',
      type: 'string',
    },
  ],

  initialValue: {
    fontSize: 'medium'
  },

  preview: {
    select: {
      title: 'authorName',
    },
    prepare({ ...selection }) {
      return { ...selection, subtitle: 'Statement' }
    },
  },
}
