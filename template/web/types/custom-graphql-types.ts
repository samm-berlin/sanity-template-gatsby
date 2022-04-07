import { SanityContentModules } from "./graphql-types"

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

export type Slug = {
  _key?: string
  _type?: string
  current: string
}

export type Category = {
  _key?: string
  _type?: string
  title: string
}

export type Tag = {
  title: string
}

export type SeoSettings = {
  _key?: string
  _type?: string
  seoTitle?: string
  seoDescription?: string
  ogImage?: any
  robotsIndex?: boolean
}

export type News = {
  _id?:string
  _type?: string
  _createdAt?: string
  _key?: string
  title: string
  slug: Slug
  seoSettings?: SeoSettings
  category?: Category
  tags?: Tag[]
  excerpt?: string
  featuredImage?: any
  keyVisual?: any
  contentModules?: SanityContentModules
}
