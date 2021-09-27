import React from 'react'
import {IoIosColorPalette} from 'react-icons/io'

export default {
  name: 'richTextExtended',
  title: 'Rich Text',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'body1'},
            {title: 'Heading 1', value: 'h1'},
            {title: 'Heading 2', value: 'h2'},
            {title: 'Heading 3', value: 'h3'},
            {title: 'Font XXL', value: 'h2'},
            {title: 'Font XL', value: 'h3'},
            {title: 'Font L', value: 'h4'},
            {title: 'Font M Bold', value: 'h5'},
            {title: 'Font M', value: 'body1'},
            {title: 'Font S', value: 'body2'}
          ],
          lists: [
            {title: 'Bullets', value: 'bullet'},
            {title: 'Numbered', value: 'number'}
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {name: 'link', title: 'Link', type: 'link'},
              {
                name: 'colorSanity',
                title: 'Color',
                type: 'color',
                blockEditor: {
                  icon: IoIosColorPalette,
                  render: props => <span style={{color: props.hex}}>{props.children}</span>
                }
              }
            ]
          }
        }
      ]
    }
  ]
}
