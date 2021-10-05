export default {
  name: 'imageWithArtDirection',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'imageMobile',
      title: 'Image (mobile)',
      type: 'imageField'
    },
    {
      name: 'imageDesktop',
      title: 'Image (desktop)',
      type: 'imageField',
      description:
        'Leave this field blank to use the same image for desktop and mobile.'
    },
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
