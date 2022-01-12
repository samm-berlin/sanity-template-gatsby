export default {
  name: 'scrollyModuleSpacer',
  title: 'Spacer',
  type: 'object',
  fieldsets: [
    {name: 'options'}
  ],
  fields: [
    {
      title: 'Module Options',
      type: 'scrollyModuleDefaultFields',
      name: 'options',
      fieldset: 'options'
    },
    {
      name: 'height',
      description: 'in % of screen height',
      type: 'number'
    }
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
