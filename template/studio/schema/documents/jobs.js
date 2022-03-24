import { MdWorkOutline as Icon } from 'react-icons/md'

export default {
  name: 'jobs',
  title: 'Jobs',
  icon: Icon,
  type: 'document',

  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'description',
      title: 'Description',
      type: 'richTextExtended',
    },
  ],
}
