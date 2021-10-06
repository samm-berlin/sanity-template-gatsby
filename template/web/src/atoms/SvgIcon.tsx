/*
read: https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
use: https://jakearchibald.github.io/svgomg/
*/

import React, { FC } from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  box-sizing: content-box;
  fill: currentColor;
  ${props => props.mobile && media.lg`display:none;`}
  ${props => (props.hidden ? 'display: none;' : 'display: unset;')}
`

const SIZES = {
  default: 24,
  header: 40
}

const ICONS = {
  list:
    '<g id="textliste_icon_weiss" data-name="textliste icon weiss" transform="translate(3 3)"><g id="Gruppe_821" data-name="Gruppe 821" transform="translate(-1813.587 -436)"><path id="Pfad_226" data-name="Pfad 226" d="M1275.914,3532.466h37.052" transform="translate(548.014 -3096.466)" fill="none"  stroke-linecap="round" stroke-width="4.5"/><path id="Pfad_226-2" data-name="Pfad 226-2" d="M1267.907,3532.466h.007" transform="translate(545.68 -3096.466)" fill="none"  stroke-linecap="round" stroke-width="6"/><path id="Pfad_226-3" data-name="Pfad 226-3" d="M1275.914,3545.466h37.052" transform="translate(548.014 -3091.904)" fill="none"  stroke-linecap="round" stroke-width="4.5"/><path id="Pfad_226-4" data-name="Pfad 226-4" d="M1267.907,3545.466h.007" transform="translate(545.68 -3091.904)" fill="none"  stroke-linecap="round" stroke-width="6"/><path id="Pfad_226-5" data-name="Pfad 226-5" d="M1275.914,3558.466h37.052" transform="translate(548.014 -3087.344)" fill="none"  stroke-linecap="round" stroke-width="4.5"/><path id="Pfad_226-6" data-name="Pfad 226-6" d="M1267.907,3558.466h.007" transform="translate(545.68 -3087.344)" fill="none"  stroke-linecap="round" stroke-width="6"/></g>',
  image:
    '<path id="Pfad_364" data-name="Pfad 364" d="M842.808,2236.375l-8.485-6.36-10.135,7.6-18.836-15.4L791.9,2235.655" transform="translate(-790.828 -2202.797)" fill="none"  stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.5"/><circle id="Ellipse_79" data-name="Ellipse 79" cx="5.44" cy="5.44" r="5.44" transform="translate(30.855 8.534)" fill="none"  stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3.5"/><g id="Rechteck_404" data-name="Rechteck 404" fill="none"  stroke-linejoin="round" stroke-width="3.5"><rect width="53.439" height="43.057" stroke="none"/><rect x="1.75" y="1.75" width="49.939" height="39.557" fill="none"/></g>'
}

type SvgIconProps = {
  name: string
  stroke?: string
  size?: string
  width?: number
  height?: number
} & P

const SvgIcon: FC<SvgIconProps> = props => {
  const { name, stroke, size, width, height } = props

  return (
    <Svg
      viewBox={
        size == 'headerPlus'
          ? '0 0 53 51'
          : `0 0 ${SIZES[size ?? 'default']} ${SIZES[size ?? 'default']}`
      }
      stroke={stroke ?? '#FFF'}
      width={width || SIZES[size ?? 'default']}
      height={height || SIZES[size ?? 'default']}
      {...props}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }} // eslint-disable-line react/no-danger
    />
  )
}

export default SvgIcon
