import { AiOutlineProject as Icon } from 'react-icons/ai'

export default {
  name: 'projects',
  title: 'Projects',
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
    {
      name: 'metaInfo',
      title: 'Meta Info',
      options: {
        collapsible: true,
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
      title: 'SEO Settings',
      type: 'meta',
      options: {
        collapsible: true,
        collapsed: true,
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
      fieldset: 'metaInfo',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      fieldset: 'metaInfo',
    },
    {
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageField',
      validation: (Rule) => Rule.required(),
      fieldset: 'metaInfo',
    },
    {
      name: 'keyVisual',
      title: 'Key Visual (optional)',
      type: 'imageField',
    },
    {
      name: 'contentModules',
      title: 'Content',
      type: 'contentModules',
    },
  ],
}
