export default {
  name: 'siteSettingsModules',
  title: 'Content Modules Settings',
  type: 'document',

  fields: [
    {
      name: 'colorOptions',
      title: 'Color Options',
      type: 'array',
      of: [
        {
          name: 'colorObject',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'color', type: 'color'}
          ]
        }
      ]
    },
    {
      name: 'spacingObject',
      type: 'object',
      fields: [
        {name: 'label', type: 'string'},
        {name: 'spacing', title: 'Spacing in REM', type: 'number'}
      ]
    }    
  ]
}
