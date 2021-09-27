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
        {type: 'moduleHero'},
        {type: 'moduleHeroSlider'},
        {type: 'moduleFurtherReading'},
        {type: 'moduleTwoColumn'},
        {type: 'moduleVideoEmbed'}
      ],
      options: {
        editModal: 'modal'
      }
    }
  ]
}
