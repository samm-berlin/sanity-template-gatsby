export default {
  name: 'scrollyContentModules',
  title: 'Scrolly Content',
  type: 'object',
  fields: [
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        { type: 'scrollyModuleRichText' },
        { type: 'scrollyModuleImage' },
        { type: 'scrollyModuleMultiImages'},
        { type: 'scrollyModuleVideoEmbed' },
        { type: 'scrollyModuleVideoUploaded' },
        { type: 'scrollyModuleSpacer' },
        { type: 'moduleScrollySection' },
      ],
      options: {
        editModal: 'modal',
      },
    },
  ],
}
