import textVariants from '../../../web/src/styles/textVariants'

export default {
  name: 'moduleMarquee',
  title: 'Marquee',
  type: 'object',
  initialValue: {
    variant: 'head'
  },
  fieldsets: [
    {name: 'options'}
  ],
  fields: [
    {
      title: 'Module Options',
      type: 'moduleDefaultFields',
      name: 'options',
      fieldset: 'options'
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string'
    },
    {
      name: 'variant',
      title: 'Text Style',
      type: 'string',
      options: {
        list: Object.keys(textVariants)
      }
    }
  ],

  preview: {
    select: {
      title: 'text'
    },
    prepare ({title}) {
      return {title, subtitle: 'Marquee'}
    }
  }
}
