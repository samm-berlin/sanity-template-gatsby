export default {
  name: 'contentModules',
  title: 'Content',
  type: 'object',
  fields: [
    {
      name: 'modules',
      title: 'Modules',
      type: 'array',
      of: [
        {type: 'moduleRichText'},
        {type: 'moduleImage'},
        {type: 'moduleVideoEmbed'},
        {type: 'moduleHero'},
        {type: 'moduleTwoColumn'},
        {type: 'moduleTwoTextColumns'},
        {type: 'moduleSpacer'},
        {type: 'moduleMarquee'},
        {type: 'moduleListing'},
        {type: 'moduleRelationalGrid'},
        {type: 'moduleRelatedList'},
        {type: 'moduleNewsListMasonry'},
        {type: 'moduleStatement'},
        {type: 'moduleFourPathGrid'},
        {type: 'moduleScrollySection'},
      ],
      options: {
        editModal: 'modal'
      }
    }
  ]
}
