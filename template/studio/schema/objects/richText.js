import React from 'react'
import { IoIosColorPalette } from 'react-icons/io'
import textVariants from '../../../web/src/styles/textVariants'

const StyledBlock = (props, style) => (
  <span
    style={{
      ...textVariants[style],
      fontSize: `${textVariants[style].fontSize / 3}rem`,
    }}
  >
    {props.children}
  </span>
)

export default {
  name: 'richText',
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
            {
              title: 'Normal',
              value: 'normal',
              blockEditor: {
                render: (props) => StyledBlock(props, 'normal'),
              },
            },
            {
              title: 'Heading 1',
              value: 'h1',
              blockEditor: {
                render: (props) => StyledBlock(props, 'head'),
              },
            },
            {
              title: 'Heading 2',
              value: 'h2',
              blockEditor: {
                render: (props) => StyledBlock(props, 'head'),
              },
            },
            {
              title: 'Heading 3',
              value: 'h3',
              blockEditor: {
                render: (props) => StyledBlock(props, 'subhead'),
              },
            },
            {
              title: 'Heading 4',
              value: 'h4',
              blockEditor: {
                render: (props) => StyledBlock(props, 'subhead'),
              },
            },
            {
              title: 'Caption',
              value: 'caption',
              blockEditor: {
                render: (props) => StyledBlock(props, 'caption'),
              },
            },
          ],
          lists: [
            { title: 'Bullets', value: 'bullet' },
            { title: 'Numbered', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              { name: 'link', title: 'Link', type: 'link' },
              {
                name: 'colorSanity',
                title: 'Color',
                type: 'color',
                blockEditor: {
                  icon: IoIosColorPalette,
                  render: (props) => <span style={{ color: props.hex }}>{props.children}</span>,
                },
              },
            ],
          },
        },
        {
          type: 'button',
        },
      ],
    },
  ],
}
