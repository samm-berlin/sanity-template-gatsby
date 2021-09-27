export default {
  name: 'moduleDefaultFields',
  type: 'object',
  options: {
    columns: 3
  },
  fields: [
    {
      title: 'Hide Module',
      name: 'activation',
      type: 'activation'
    },
    {
      title: 'Module padding',
      name: 'padding',
      type: 'modulePadding'
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'colorTheme'
    }
  ]
}
