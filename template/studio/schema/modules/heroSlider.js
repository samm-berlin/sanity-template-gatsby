export default {
  name: 'moduleHeroSlider',
  title: 'Hero Slider',
  type: 'object',

  fields: [
    {
      name: 'images',
      type: 'images',
      title: 'Images'
    },
    {
      name: 'titleOne',
      type: 'string',
      title: 'Titel Line 1'
    },
    {
      name: 'titleTwo',
      type: 'string',
      title: 'Titel Line 2'
    }
  ],

  preview: {
    select: {
      images: 'images',
      image: 'images.0',
    },
    prepare(selection) {
      const { images, image } = selection;

      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image.alt}`,
        media: image,
      };
    }
  }
}
