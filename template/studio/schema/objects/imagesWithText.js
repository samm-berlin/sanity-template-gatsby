export default {
  name: 'imagesWithText',
  title: 'Image',
  type: 'object',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt'
    },
    {
      name: 'introTitle',
      title: 'Title',
      type: 'richTextSimple',
    },
    {
      name: 'posX',
      title: 'Horizontal position of text within the image in percent from upper left corner.',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    },
    {
      name: 'posY',
      title: 'Vertical position of text within the image in percent from upper left corner.',
      type: 'number',
      validation: Rule => Rule.min(0).max(100),
    },
    {
      name: 'linkTo',
      title: 'Link to',
      type: 'reference',
      to: [{ type: 'post' }, { type: 'page' }],
    }
  ],
};
