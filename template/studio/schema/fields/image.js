export default {
  name: 'imageField',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers & SEO)',
      type: 'string',
      options: {
        isHighlighted: true,
        validation: Rule => Rule.required()
      }
    }
  ]
}
