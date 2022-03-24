import { AiOutlineTags as CategoryIcon } from 'react-icons/ai'

export default {
  name: 'newsCategory',
  title: 'Category',
  icon: CategoryIcon,
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ],
}
