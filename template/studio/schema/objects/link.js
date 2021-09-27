import url from '../fields/url';

export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    url,
    {
      name: 'targetBlank',
      title: 'Open in new Tab',
      type: 'boolean',
    },
  ],
};
