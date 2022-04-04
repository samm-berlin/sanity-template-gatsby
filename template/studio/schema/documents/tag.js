import { AiOutlineTags as CategoryIcon } from 'react-icons/ai'

export default {
  name: 'tag',
  title: 'Tags',
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
