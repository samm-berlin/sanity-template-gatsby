export default {
  name: 'moduleScrollySection',
  title: 'Scrolly Section',
  type: 'object',
  options: {
    columns: 1,
  },
  fields: [
    {
      title: 'Hide Module',
      name: 'activation',
      type: 'activation',
    },
    {
      title: 'Scrolly Section',
      name: 'scrollySectionRelation',
      type: 'reference',
      to: [{type: 'scrollySection'}],
    }
  ],
  preview: {
    select: {
      title: 'scrollySectionRelation.title'
    }
  }
}
