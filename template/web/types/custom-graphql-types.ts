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


// Video

export type MuxVideoAsset = {
  _key: string
  _type: string
  status: string
  assetId: string
  playbackId: string
  filename: string
  thumbTime: number
}

export type MuxVideo = {
  _key: string
  _type: string
  asset: MuxVideoAsset
}

export type AspectRatio = {
  _key: string
  _type: string
  x?: number
  y?: number
}

export type ScrollyModuleMuxVideo = {
  _key: string
  _type: string
  options: ScrollyModuleDefaultFields
  video: MuxVideo
  aspectRatio: AspectRatio
  autoplay: boolean
  muted: boolean
  controls: boolean
  loop: boolean
}
