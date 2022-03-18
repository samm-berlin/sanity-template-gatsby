export type ScrollyModuleDefaultFields = {
  _key?: string
  _type?: string
  scrollOptions: ScrollOptions
  layoutOptions: LayoutOptions
}

export type ScrollOptions = {
  _key?: string
  _type?: string
  flow?: 'regular' | 'pinned'
  pinned?: boolean
  pinnedDistance?: number
  pinnedPosition?: 'top' | 'center' | 'bottom'
  pinSpacing?: boolean
  fadeIn?: boolean
  markers?: boolean

}

export type LayoutOptions = {
  _key?: string
  _type?: string
  horizontalPosition?: 'flex-start' | 'center' | 'flex-end'
  height: string
  width: 'narrow' | 'regular' | 'wide'
}
