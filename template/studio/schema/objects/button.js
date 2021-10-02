export default {
  name: 'button',
  title: 'Button',
  type: 'object',
  options: {
    columns: 2
  },
  fields: [
    {
      name: 'properties',
      type: 'buttonProperties'
    },
    {
      name: 'link',
      type: 'link'
    }
  ],

  preview: {
    select: {
      title: 'properties.label',
      subtitle: 'properties.style'
    },
    prepare ({title, subtitle}) {
      return {title, subtitle}
    }
  }
}

export const buttonProperties = {
  name: 'buttonProperties',
  type: 'object',
  fields: [
    {
      name: 'label',
      type: 'string'
    },
    {
      name: 'style',
      type: 'string',
      options: {
        list: ['primary', 'secondary', 'outline']
      }
    }
  ]
}
