import {BiNews as NewsIcon} from 'react-icons/ai'

export default {
  name: 'news',
  title: 'News',
  icon: NewsIcon,
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
      name: 'meta',
      title: 'Meta',
      type: 'meta',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'keyVisual',
      title: 'Key Visual',
      type: 'imageField',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'richTextExtended',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: {
        type: 'newsCategory',
      },
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag',
          },
        },
      ],
    },

    {
      name: 'contentModules',
      title: 'Content',
      type: 'contentModules',
    },
  ],
}

