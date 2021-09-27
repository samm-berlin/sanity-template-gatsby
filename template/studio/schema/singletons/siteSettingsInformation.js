export default {
  name: 'siteSettingsInformation',
  title: 'Information',
  type: 'document',

  fields: [
    {
      name: 'globalInfo',
      title: 'Global Information Text',
      type: 'richTextExtended',
      rows: 3,
    },

    {
      name: 'companyAddress',
      title: 'Company Address',
      type: 'text',
      rows: 3,
    },

    {
      name: 'privacyPolicyPage',
      title: 'Privacy Policy Page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
  ],
};
