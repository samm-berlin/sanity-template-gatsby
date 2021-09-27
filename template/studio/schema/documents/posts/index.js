import {AiOutlineFileText as PageIcon} from 'react-icons/ai'

export default {
  name: 'post',
  title: 'Blog post',
  icon: PageIcon,
  type: 'document',

  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],

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
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: {
        type: 'postCategory'
      }
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
    {
      name: 'contentModules',
      title: 'Content',
      type: 'contentModules'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      hidden: true
    }
  ],
  orderings: [
    {
      title: 'Manual order',
      name: 'manualOrder',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],

  initialValue: {
    meta: {_type: 'meta', robotsIndex: true}
  }
}
