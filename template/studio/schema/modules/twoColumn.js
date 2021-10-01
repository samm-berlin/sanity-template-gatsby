export default {
  type: 'object',
  name: 'moduleTwoColumn',
  title: 'Two column',
  fieldsets: [
    {name: 'options'}
  ],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options'
    },
    {
      title: 'First column',
      name: 'firstColumn',
      type: 'contentModules'
    },
    {
      title: 'Second column',
      name: 'secondColumn',
      type: 'contentModules'
    }
    // {
    //   title: 'Anchor',
    //   name: 'anchor',
    //   type: 'string'
    // }

  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({title}) {
      return {
        title: 'Two column',
        subtitle: title
      }
    }
  }
}
