import React from 'react';

export default {
  title: 'SEO-Settings',
  name: 'seoSettings',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Page title, falls back to document title',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      description: 'Text that appears in search results',
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: (
        <>
          Image that appears when shared on social media
          <br />
          <code>~1200×630px</code>
        </>
      ),
    },
    {
      name: 'robotsIndex',
      title: 'Index Content',
      type: 'boolean',
      description: 'Tell search engines to list this content',
    },
  ],
}
