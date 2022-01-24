export default {
  name: 'scrollyBackgroundContentModules',
  title: 'Scrolly Content',
  type: 'object',
  fields: [
    {
      name: 'modules',
      title: 'Module',
      type: 'array',
      validation: (Rule) => Rule.length(1),
      of: [{ type: 'scrollyModuleImage' }, { type: 'scrollyModuleVideoEmbed' }],
      options: {
        editModal: 'modal',
      },
    },
  ],
}
