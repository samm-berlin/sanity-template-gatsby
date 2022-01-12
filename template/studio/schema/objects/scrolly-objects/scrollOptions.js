export default {
  name: 'scrollOptions',
  title: 'Scroll Options',
  type: 'object',
  fields: [
    {
      name: 'flow',
      label: 'Select Flow',
      type: 'string',
      options: {
        list: [
          { value: 'regular', title: 'regular' },
          { value: 'pinned', title: 'pinned' },
        ],
      },
    },
    {
      name: 'pinnedDistance',
      label: 'Pinned Distance',
      type: 'number',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.flow !== 'pinned'
      },
    },
    {
      name: 'pinnedOffset',
      label: 'Pinned Offset',
      type: 'number',
      hidden: ({ parent }) => {
        if (!parent) return true
        return parent.flow !== 'pinned'
      },
    },
  ],
}
