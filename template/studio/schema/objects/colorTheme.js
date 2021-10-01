import {brandColors} from '../../../web/src/styles/theme'

export default {
  name: 'colorTheme',
  title: 'Color Theme',
  type: 'object',
  fields: [
    // @TODO
    // maybe move this to a global .env??
    // or, even better load value from module settings bla
    {
      name: 'theme',
      type: 'string',
      options: {
        list: ['none', 'light', 'dark', 'brand']
      }
    },
    {
      title: 'Brand Color',
      name: 'list',
      type: 'colorlist', // required
      options: {
        list: Object.entries(brandColors).map(item => ({title: item[0], value: item[1]}))
        // list: [
        //   {title: 'Yellow', value: 'rgba(245, 199, 1, 0.5)'},
        //   {title: 'Pink', value: {r: 246, g: 206, b: 219}},
        //   {title: 'Red', value: '#f16d70'},
        //   {title: 'Teal', value: '#88c6db'},
        //   {title: 'Purple', value: '#aca0cc'},
        //   {title: 'Green', value: '#bdcdcb'},
        //   {title: 'White', value: 'white'}
        // ]
      }
    }
  ]
}
