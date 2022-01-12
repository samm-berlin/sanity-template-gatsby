import { AiOutlineLayout as PageIcon } from 'react-icons/ai'

export default {
  name: 'scrollySection',
  title: 'Scrolly Sections',
  icon: PageIcon,
  type: 'document',

  fieldsets: [
    {
      name: 'settings',
      title: 'Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'backgroundOptions',
      title: 'Background Options',
      type: 'sectionBackgroundOptions'
    },
    {
      name: 'scrollyContentModules',
      title: 'Scrolly Content',
      type: 'scrollyContentModules',
    }
  ],
}
