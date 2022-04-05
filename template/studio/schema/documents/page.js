import {AiOutlineLayout as PageIcon} from 'react-icons/ai'

export default {
  name: 'page',
  title: 'Page',
  icon: PageIcon,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'seoSettings',
      title: 'SEO-Settings',
      type: 'seoSettings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'contentModules',
      title: 'Content',
      type: 'contentModules',
    },
  ],

  initialValue: {
    seoSettings: { _type: 'seoSettings', robotsIndex: true },
  },
}
