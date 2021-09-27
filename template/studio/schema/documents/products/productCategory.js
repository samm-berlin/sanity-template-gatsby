import {AiOutlineTags as CategoryIcon} from 'react-icons/ai'

export default {
  name: 'productCategory',
  title: 'Category',
  icon: CategoryIcon,
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ]
}
