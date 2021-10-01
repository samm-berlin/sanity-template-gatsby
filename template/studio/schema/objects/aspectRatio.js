export default {
  title: 'Aspect Ratio',
  name: 'aspectRatio',
  type: 'object',
  description: 'The aspect Ratio of the object, i.e. 16:9 would be x=16, y=9',
  options: {
    columns: 2
  },
  fields: [
    {
      type: 'number',
      name: 'x'
    },
    {
      type: 'number',
      name: 'y'
    }
  ]
}
