export default {
  title: 'Module padding',
  name: 'modulePadding',
  type: 'object',
  fields: [
    // @TODO
    // maybe move this to a global .env??
    // or, even better load value from module settings bla
    {
      title: 'horizontal',
      name: 'x',
      type: 'number', // should I rather return a number or a string ?
      options: {
        list: [{value: 0, title: 'none'}, {value: 20, title: 'large'}]
      }
    },
    {
      title: 'vertical',
      name: 'y',
      type: 'number', // should I rather return a number or a string ?
      options: {
        list: [{value: 0, title: 'none'}, {value: 20, title: 'large'}]
      }
    }
  ]
  // fields: [
  //   {
  //     title: 'horizontal',
  //     name: 'x',
  //     type: 'reference',
  //     weak: 'true',
  //     to: [{type: 'spacingObject'}],
  //     options: {
  //       filter: `*[_type=="siteSettingsModules"]{
  //         name,
  //         "options": *[_type=='spacingObject' && references(^._id)]{
  //           label
  //         }
  //       }`
  //     }
  //   },
  //   {
  //     title: 'vertical',
  //     name: 'y',
  //     type: 'number'
  //   }
  // ]
}
