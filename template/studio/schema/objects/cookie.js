export default {
  name: 'cookie',
  title: 'Cookie',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'cookieCategory'
    }
    // {
    //   name: 'description',
    //   title: 'Description',
    //   type: 'string'
    // }
  ],
  preview: {
    select: {
      title: 'label'
    }
  }
}
