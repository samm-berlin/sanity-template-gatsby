export default {
  name: 'imageTwoColumns',
  title: 'Image in Two Columns',
  type: 'array',
  of: [{ type: 'imageWithAlt' }],
  validation: Rule => Rule.min(2).max(2),
  options: {
    hotspot: true
  },
}
