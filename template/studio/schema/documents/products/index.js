import {AiOutlineSkin as ProductIcon} from 'react-icons/ai'

export default {
  name: 'product',
  title: 'Product',
  icon: ProductIcon,
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
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category',
      to: {
        type: 'productCategory'
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
      name: 'shopifyProduct',
      title: 'Shopify Product',
      type: 'shopifyProductRelation',
      validation: Rule => Rule.required()
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
  ]
}
