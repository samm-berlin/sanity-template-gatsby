export default {
  name: 'scrollOptions',
  title: 'Scroll Options',
  type: 'object',
  fields: [
    {
      name: 'pinned',
      label: 'Pin Element',
      type: 'boolean',
      description:
        'When set to true, the element will be pinned at a slected position for a number of pixels',
    },
    {
      name: 'pinnedDistance',
      label: 'Pinned Distance',
      type: 'number',
      hidden: ({ parent }) => {
        if (!parent) return true
        return !parent.pinned
      },
    },
    {
      name: 'pinnedPosition',
      label: 'Vertical Pinned Position',
      type: 'string',
      options: {
        list: [
          { value: 'center', title: 'Center' },
          { value: 'top', title: 'Top' },
          { value: 'bottom', title: 'Bottom' },
        ],
      },
      hidden: ({ parent }) => {
        if (!parent) return true
        return !parent.pinned
      },
    },
    {
      name: 'pinSpacing',
      label: 'Pin Spacing',
      type: 'boolean',
      description: 'Turn on Pin Spacing to add a padding which is as big as your Pinned Distance.',
      hidden: ({ parent }) => {
        if (!parent) return true
        return !parent.pinned
      },
    },
    {
      name: 'fadeIn',
      label: 'Fade In',
      type: 'boolean',
      description:
        'If set to true, the element will fade in when it arrives hat its pinned position and fade out when it leaves its pinned position.',
      hidden: ({ parent }) => {
        if (!parent) return true
        return !parent.pinned
      },
    },
    {
      name: 'markers',
      label: 'Markers',
      type: 'boolean',
      description: 'Set to true to display Markers to identify how the marker works.',
      hidden: ({ parent }) => {
        if (!parent) return true
        return !parent.pinned
      },
    },
  ],
}
