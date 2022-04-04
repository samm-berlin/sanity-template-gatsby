import React from 'react'
import {IoIosColorPalette} from 'react-icons/io'
import textVariants from '../../../web/src/styles/textVariants'

const StyledBlock = (props, style) => (
  <span style={{
    ...textVariants[style],
    fontSize: `${textVariants[style].fontSize / 3}rem`
  }}>{props.children}</span>
)

export default {
  name: 'richTextExtended',
  title: 'Rich Text',
  type: 'object',
  fieldsets: [
    {
      name: 'alignment',
      title: 'Alignment',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Center', value: 'center' },
        ],
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'richText'
    }
  ],
  initialValue: {
    alignment: 'left',
  },
}
