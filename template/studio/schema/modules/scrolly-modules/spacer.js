export default {
  name: 'scrollyModuleSpacer',
  title: 'Spacer',
  type: 'object',
  fieldsets: [
    {name: 'options'}
  ],
  fields: [
    {
      name: 'height',
      description: 'in % of screen height',
      type: 'number'
    },
    {
      title: 'Module Options',
      type: 'scrollyModuleDefaultFields',
      name: 'options',
      fieldset: 'options',
      hidden: true
    },
  ],

  preview: {
    select: {
      title: 'height'
    },
    prepare ({title}) {
      return {
        title: 'Spacer',
        subtitle: title
      }
    }
  }
}
