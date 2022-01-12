import { AiOutlineLayout as PageIcon } from 'react-icons/ai'

export default {
  name: 'scrollySection',
  title: 'Scrolly Sections',
  icon: PageIcon,
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'backgroundOptions',
      title: 'Background Options',
      type: 'sectionBackgroundOptions',
      options: {
        collapsible: true,
        collapsed: false
      }
    },
    {
      name: 'scrollyContentModules',
      title: 'Scrolly Content',
      type: 'scrollyContentModules',
    },
  ],
}
