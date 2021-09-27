export default {
  name: 'imageWithArtDirection',
  title: 'Image',
  type: 'object',
  fields: [
    {
      name: 'imageMobile',
      title: 'Image (mobile)',
      type: 'imageWithAlt',
      validation: Rule => Rule.required(),
    },
    {
      name: 'imageDesktop',
      title: 'Image (desktop)',
      type: 'imageWithAlt',
      description:
        'Leave this field blank to use the same image for desktop and mobile.',
    },
  ],
};
