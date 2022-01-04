export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type SanityActivation = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['Boolean']>;
};

export type SanityAspectRatio = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<SanitySpan>>>;
  style?: Maybe<Scalars['String']>;
  list?: Maybe<Scalars['String']>;
  _rawChildren?: Maybe<Scalars['JSON']>;
};


export type SanityBlock_RawChildrenArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityBlockOrButton = SanityBlock | SanityButton;

export type SanityButton = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  properties?: Maybe<SanityButtonProperties>;
  link?: Maybe<SanityLink>;
  _rawProperties?: Maybe<Scalars['JSON']>;
  _rawLink?: Maybe<Scalars['JSON']>;
};


export type SanityButton_RawPropertiesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityButton_RawLinkArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityButtonProperties = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type SanityCard = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  image?: Maybe<SanityImage>;
  text?: Maybe<SanityRichTextExtended>;
  link?: Maybe<SanityLink>;
  _rawImage?: Maybe<Scalars['JSON']>;
  _rawText?: Maybe<Scalars['JSON']>;
  _rawLink?: Maybe<Scalars['JSON']>;
};


export type SanityCard_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCard_RawTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityCard_RawLinkArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityCardOrPageOrPostOrProduct = SanityCard | SanityPage | SanityPost | SanityProduct;

export type SanityCode = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  highlightedLines?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type SanityColor = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  hex?: Maybe<Scalars['String']>;
  alpha?: Maybe<Scalars['Float']>;
  hsl?: Maybe<SanityHslaColor>;
  hsv?: Maybe<SanityHsvaColor>;
  rgb?: Maybe<SanityRgbaColor>;
  _rawHsl?: Maybe<Scalars['JSON']>;
  _rawHsv?: Maybe<Scalars['JSON']>;
  _rawRgb?: Maybe<Scalars['JSON']>;
};


export type SanityColor_RawHslArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityColor_RawHsvArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityColor_RawRgbArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityColorlist = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SanityColorTheme = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  list?: Maybe<SanityColorlist>;
  _rawList?: Maybe<Scalars['JSON']>;
};


export type SanityColorTheme_RawListArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityContentModules = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  modules?: Maybe<Array<Maybe<SanityModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleRichTextOrModuleSpacerOrModuleTwoColumnOrModuleVideoEmbed>>>;
  _rawModules?: Maybe<Scalars['JSON']>;
};


export type SanityContentModules_RawModulesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityCookie = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityFile_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  alt?: Maybe<Scalars['Float']>;
};

export type SanityHslaColor = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  h?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
};

export type SanityHsvaColor = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  h?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
};

export type SanityImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImage_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImage_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageField = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  hotspot?: Maybe<SanityImageHotspot>;
  crop?: Maybe<SanityImageCrop>;
  alt?: Maybe<Scalars['String']>;
  _rawAsset?: Maybe<Scalars['JSON']>;
  _rawHotspot?: Maybe<Scalars['JSON']>;
  _rawCrop?: Maybe<Scalars['JSON']>;
};


export type SanityImageField_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageField_RawHotspotArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageField_RawCropArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageWithArtDirection = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  imageMobile?: Maybe<SanityImageField>;
  imageDesktop?: Maybe<SanityImageField>;
  alt?: Maybe<Scalars['String']>;
  _rawImageMobile?: Maybe<Scalars['JSON']>;
  _rawImageDesktop?: Maybe<Scalars['JSON']>;
};


export type SanityImageWithArtDirection_RawImageMobileArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageWithArtDirection_RawImageDesktopArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  internal?: Maybe<SanityPageOrPostOrProduct>;
  url?: Maybe<Scalars['String']>;
  targetBlank?: Maybe<Scalars['Boolean']>;
  _rawInternal?: Maybe<Scalars['JSON']>;
};


export type SanityLink_RawInternalArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMediaTag = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  name?: Maybe<SanitySlug>;
  _rawName?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityMediaTag_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityMediaTag_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityMediaTag_RawNameArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMenuLink = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<SanityLink>;
  _rawLink?: Maybe<Scalars['JSON']>;
};


export type SanityMenuLink_RawLinkArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMeta = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  ogImage?: Maybe<SanityImage>;
  robotsIndex?: Maybe<Scalars['Boolean']>;
  _rawOgImage?: Maybe<Scalars['JSON']>;
};


export type SanityMeta_RawOgImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleDefaultFields = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  activation?: Maybe<SanityActivation>;
  padding?: Maybe<SanityModulePadding>;
  theme?: Maybe<SanityColorTheme>;
  _rawActivation?: Maybe<Scalars['JSON']>;
  _rawPadding?: Maybe<Scalars['JSON']>;
  _rawTheme?: Maybe<Scalars['JSON']>;
};


export type SanityModuleDefaultFields_RawActivationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleDefaultFields_RawPaddingArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleDefaultFields_RawThemeArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleHero = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  heroImage?: Maybe<SanityImageField>;
  heroTitle?: Maybe<SanityRichTextExtended>;
  heroCta?: Maybe<SanityButton>;
  _rawOptions?: Maybe<Scalars['JSON']>;
  _rawHeroImage?: Maybe<Scalars['JSON']>;
  _rawHeroTitle?: Maybe<Scalars['JSON']>;
  _rawHeroCta?: Maybe<Scalars['JSON']>;
};


export type SanityModuleHero_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleHero_RawHeroImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleHero_RawHeroTitleArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleHero_RawHeroCtaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleRichTextOrModuleSpacerOrModuleTwoColumnOrModuleVideoEmbed = SanityModuleHero | SanityModuleImage | SanityModuleListing | SanityModuleMarquee | SanityModuleRichText | SanityModuleSpacer | SanityModuleTwoColumn | SanityModuleVideoEmbed;

export type SanityModuleImage = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  image?: Maybe<SanityImageField>;
  subtitle?: Maybe<Scalars['String']>;
  _rawOptions?: Maybe<Scalars['JSON']>;
  _rawImage?: Maybe<Scalars['JSON']>;
};


export type SanityModuleImage_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleImage_RawImageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleListing = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SanityCardOrPageOrPostOrProduct>>>;
  _rawItems?: Maybe<Scalars['JSON']>;
};


export type SanityModuleListing_RawItemsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleMarquee = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  text?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
  _rawOptions?: Maybe<Scalars['JSON']>;
};


export type SanityModuleMarquee_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModulePadding = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  container?: Maybe<Scalars['Boolean']>;
};

export type SanityModuleRichText = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  text?: Maybe<SanityRichTextExtended>;
  _rawOptions?: Maybe<Scalars['JSON']>;
  _rawText?: Maybe<Scalars['JSON']>;
};


export type SanityModuleRichText_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleRichText_RawTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleSpacer = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  height?: Maybe<Scalars['Float']>;
  _rawOptions?: Maybe<Scalars['JSON']>;
};


export type SanityModuleSpacer_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleTwoColumn = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  firstColumn?: Maybe<SanityContentModules>;
  secondColumn?: Maybe<SanityContentModules>;
  _rawOptions?: Maybe<Scalars['JSON']>;
  _rawFirstColumn?: Maybe<Scalars['JSON']>;
  _rawSecondColumn?: Maybe<Scalars['JSON']>;
};


export type SanityModuleTwoColumn_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleTwoColumn_RawFirstColumnArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleTwoColumn_RawSecondColumnArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityModuleVideoEmbed = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  options?: Maybe<SanityModuleDefaultFields>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<SanityVideoEmbed>;
  posterFrame?: Maybe<SanityImageField>;
  aspectRatio?: Maybe<SanityAspectRatio>;
  muted?: Maybe<Scalars['Boolean']>;
  controls?: Maybe<Scalars['Boolean']>;
  loop?: Maybe<Scalars['Boolean']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  _rawOptions?: Maybe<Scalars['JSON']>;
  _rawVideo?: Maybe<Scalars['JSON']>;
  _rawPosterFrame?: Maybe<Scalars['JSON']>;
  _rawAspectRatio?: Maybe<Scalars['JSON']>;
};


export type SanityModuleVideoEmbed_RawOptionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleVideoEmbed_RawVideoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleVideoEmbed_RawPosterFrameArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityModuleVideoEmbed_RawAspectRatioArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMuxVideo = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityMuxVideoAsset>;
  _rawAsset?: Maybe<Scalars['JSON']>;
};


export type SanityMuxVideo_RawAssetArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityMuxVideoAsset = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  playbackId?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  thumbTime?: Maybe<Scalars['Float']>;
};

export type SanityPage = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  meta?: Maybe<SanityMeta>;
  contentModules?: Maybe<SanityContentModules>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawMeta?: Maybe<Scalars['JSON']>;
  _rawContentModules?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPage_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPage_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawMetaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPage_RawContentModulesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPageOrPostOrProduct = SanityPage | SanityPost | SanityProduct;

export type SanityPost = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  category?: Maybe<SanityPostCategory>;
  meta?: Maybe<SanityMeta>;
  contentModules?: Maybe<SanityContentModules>;
  order?: Maybe<Scalars['Float']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawCategory?: Maybe<Scalars['JSON']>;
  _rawMeta?: Maybe<Scalars['JSON']>;
  _rawContentModules?: Maybe<Scalars['JSON']>;
  isPublished: Scalars['Boolean'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPost_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPost_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawCategoryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawMetaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityPost_RawContentModulesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityPostCategory = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityPostCategory_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostCategory_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityPostCategory_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityProduct = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  category?: Maybe<SanityProductCategory>;
  meta?: Maybe<SanityMeta>;
  shopifyProduct?: Maybe<Scalars['String']>;
  contentModules?: Maybe<SanityContentModules>;
  order?: Maybe<Scalars['Float']>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  _rawCategory?: Maybe<Scalars['JSON']>;
  _rawMeta?: Maybe<Scalars['JSON']>;
  _rawContentModules?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProduct_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProduct_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProduct_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawCategoryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawMetaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityProduct_RawContentModulesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityProductCategory = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<SanitySlug>;
  _rawSlug?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityProductCategory_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProductCategory_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityProductCategory_RawSlugArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityRgbaColor = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  r?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  a?: Maybe<Scalars['Float']>;
};

export type SanityRichTextExtended = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  text?: Maybe<Array<Maybe<SanityBlock>>>;
  _rawText?: Maybe<Scalars['JSON']>;
};


export type SanityRichTextExtended_RawTextArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  source?: Maybe<SanityAssetSourceData>;
  _rawSource?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  altText?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  assetId?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  source?: Maybe<SanityAssetSourceData>;
  _rawMetadata?: Maybe<Scalars['JSON']>;
  _rawSource?: Maybe<Scalars['JSON']>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageAssetGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<SanityGatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  fit?: InputMaybe<SanityImageFit>;
};

export type SanityGatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'BLURRED'
  | 'NONE';

export type SanityImageFit =
  | 'CLIP'
  | 'CROP'
  | 'FILL'
  | 'FILLMAX'
  | 'MAX'
  | 'SCALE'
  | 'MIN';

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  top?: Maybe<Scalars['Float']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  location?: Maybe<SanityGeopoint>;
  dimensions?: Maybe<SanityImageDimensions>;
  palette?: Maybe<SanityImagePalette>;
  lqip?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  _rawLocation?: Maybe<Scalars['JSON']>;
  _rawDimensions?: Maybe<Scalars['JSON']>;
  _rawPalette?: Maybe<Scalars['JSON']>;
};


export type SanityImageMetadata_RawLocationArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawDimensionsArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImageMetadata_RawPaletteArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  _rawDarkMuted?: Maybe<Scalars['JSON']>;
  _rawLightVibrant?: Maybe<Scalars['JSON']>;
  _rawDarkVibrant?: Maybe<Scalars['JSON']>;
  _rawVibrant?: Maybe<Scalars['JSON']>;
  _rawDominant?: Maybe<Scalars['JSON']>;
  _rawLightMuted?: Maybe<Scalars['JSON']>;
  _rawMuted?: Maybe<Scalars['JSON']>;
};


export type SanityImagePalette_RawDarkMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDarkVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawVibrantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawDominantArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawLightMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanityImagePalette_RawMutedArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanitySiteSettingsCookies = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  cookies?: Maybe<Array<Maybe<SanityCookie>>>;
  _rawCookies?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteSettingsCookies_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsCookies_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsCookies_RawCookiesArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteSettingsInformation = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  globalInfo?: Maybe<SanityRichTextExtended>;
  companyAddress?: Maybe<Scalars['String']>;
  privacyPolicyPage?: Maybe<SanityPage>;
  _rawGlobalInfo?: Maybe<Scalars['JSON']>;
  _rawPrivacyPolicyPage?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteSettingsInformation_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsInformation_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsInformation_RawGlobalInfoArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsInformation_RawPrivacyPolicyPageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteSettingsMeta = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  meta?: Maybe<SanityMeta>;
  _rawMeta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteSettingsMeta_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsMeta_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsMeta_RawMetaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySiteSettingsNavigation = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['Date']>;
  _updatedAt?: Maybe<Scalars['Date']>;
  _rev?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  frontpage?: Maybe<SanityPage>;
  desktopMain?: Maybe<Array<Maybe<SanityMenuLink>>>;
  desktopSecondary?: Maybe<Array<Maybe<SanityMenuLink>>>;
  mobileMain?: Maybe<Array<Maybe<SanityMenuLink>>>;
  mobileSecondary?: Maybe<Array<Maybe<SanityMenuLink>>>;
  cta?: Maybe<SanityButton>;
  _rawFrontpage?: Maybe<Scalars['JSON']>;
  _rawDesktopMain?: Maybe<Scalars['JSON']>;
  _rawDesktopSecondary?: Maybe<Scalars['JSON']>;
  _rawMobileMain?: Maybe<Scalars['JSON']>;
  _rawMobileSecondary?: Maybe<Scalars['JSON']>;
  _rawCta?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SanitySiteSettingsNavigation_CreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsNavigation_UpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type SanitySiteSettingsNavigation_RawFrontpageArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsNavigation_RawDesktopMainArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsNavigation_RawDesktopSecondaryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsNavigation_RawMobileMainArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsNavigation_RawMobileSecondaryArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};


export type SanitySiteSettingsNavigation_RawCtaArgs = {
  resolveReferences?: InputMaybe<SanityResolveReferencesConfiguration>;
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type SanityTextAlignment = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
};

export type SanityVideoEmbed = {
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'];
};

export type ContentModule = Node & {
  joinedAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  sanityMediaTag?: Maybe<SanityMediaTag>;
  allSanityMediaTag: SanityMediaTagConnection;
  sanityPage?: Maybe<SanityPage>;
  allSanityPage: SanityPageConnection;
  sanityPost?: Maybe<SanityPost>;
  allSanityPost: SanityPostConnection;
  sanityPostCategory?: Maybe<SanityPostCategory>;
  allSanityPostCategory: SanityPostCategoryConnection;
  sanityProduct?: Maybe<SanityProduct>;
  allSanityProduct: SanityProductConnection;
  sanityProductCategory?: Maybe<SanityProductCategory>;
  allSanityProductCategory: SanityProductCategoryConnection;
  sanityFileAsset?: Maybe<SanityFileAsset>;
  allSanityFileAsset: SanityFileAssetConnection;
  sanityImageAsset?: Maybe<SanityImageAsset>;
  allSanityImageAsset: SanityImageAssetConnection;
  sanitySiteSettingsCookies?: Maybe<SanitySiteSettingsCookies>;
  allSanitySiteSettingsCookies: SanitySiteSettingsCookiesConnection;
  sanitySiteSettingsInformation?: Maybe<SanitySiteSettingsInformation>;
  allSanitySiteSettingsInformation: SanitySiteSettingsInformationConnection;
  sanitySiteSettingsMeta?: Maybe<SanitySiteSettingsMeta>;
  allSanitySiteSettingsMeta: SanitySiteSettingsMetaConnection;
  sanitySiteSettingsNavigation?: Maybe<SanitySiteSettingsNavigation>;
  allSanitySiteSettingsNavigation: SanitySiteSettingsNavigationConnection;
  contentModule?: Maybe<ContentModule>;
  allContentModule: ContentModuleConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityMediaTagArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<SanitySlugFilterInput>;
  _rawName?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityMediaTagArgs = {
  filter?: InputMaybe<SanityMediaTagFilterInput>;
  sort?: InputMaybe<SanityMediaTagSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPageArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPageArgs = {
  filter?: InputMaybe<SanityPageFilterInput>;
  sort?: InputMaybe<SanityPageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPostArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  category?: InputMaybe<SanityPostCategoryFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  order?: InputMaybe<FloatQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  isPublished?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPostArgs = {
  filter?: InputMaybe<SanityPostFilterInput>;
  sort?: InputMaybe<SanityPostSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityPostCategoryArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityPostCategoryArgs = {
  filter?: InputMaybe<SanityPostCategoryFilterInput>;
  sort?: InputMaybe<SanityPostCategorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityProductArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  category?: InputMaybe<SanityProductCategoryFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  shopifyProduct?: InputMaybe<StringQueryOperatorInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  order?: InputMaybe<FloatQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityProductArgs = {
  filter?: InputMaybe<SanityProductFilterInput>;
  sort?: InputMaybe<SanityProductSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityProductCategoryArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityProductCategoryArgs = {
  filter?: InputMaybe<SanityProductCategoryFilterInput>;
  sort?: InputMaybe<SanityProductCategorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityFileAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityFileAssetArgs = {
  filter?: InputMaybe<SanityFileAssetFilterInput>;
  sort?: InputMaybe<SanityFileAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanityImageAssetArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanityImageAssetArgs = {
  filter?: InputMaybe<SanityImageAssetFilterInput>;
  sort?: InputMaybe<SanityImageAssetSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteSettingsCookiesArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  cookies?: InputMaybe<SanityCookieFilterListInput>;
  _rawCookies?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteSettingsCookiesArgs = {
  filter?: InputMaybe<SanitySiteSettingsCookiesFilterInput>;
  sort?: InputMaybe<SanitySiteSettingsCookiesSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteSettingsInformationArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  globalInfo?: InputMaybe<SanityRichTextExtendedFilterInput>;
  companyAddress?: InputMaybe<StringQueryOperatorInput>;
  privacyPolicyPage?: InputMaybe<SanityPageFilterInput>;
  _rawGlobalInfo?: InputMaybe<JsonQueryOperatorInput>;
  _rawPrivacyPolicyPage?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteSettingsInformationArgs = {
  filter?: InputMaybe<SanitySiteSettingsInformationFilterInput>;
  sort?: InputMaybe<SanitySiteSettingsInformationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteSettingsMetaArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteSettingsMetaArgs = {
  filter?: InputMaybe<SanitySiteSettingsMetaFilterInput>;
  sort?: InputMaybe<SanitySiteSettingsMetaSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySanitySiteSettingsNavigationArgs = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  frontpage?: InputMaybe<SanityPageFilterInput>;
  desktopMain?: InputMaybe<SanityMenuLinkFilterListInput>;
  desktopSecondary?: InputMaybe<SanityMenuLinkFilterListInput>;
  mobileMain?: InputMaybe<SanityMenuLinkFilterListInput>;
  mobileSecondary?: InputMaybe<SanityMenuLinkFilterListInput>;
  cta?: InputMaybe<SanityButtonFilterInput>;
  _rawFrontpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawDesktopMain?: InputMaybe<JsonQueryOperatorInput>;
  _rawDesktopSecondary?: InputMaybe<JsonQueryOperatorInput>;
  _rawMobileMain?: InputMaybe<JsonQueryOperatorInput>;
  _rawMobileSecondary?: InputMaybe<JsonQueryOperatorInput>;
  _rawCta?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSanitySiteSettingsNavigationArgs = {
  filter?: InputMaybe<SanitySiteSettingsNavigationFilterInput>;
  sort?: InputMaybe<SanitySiteSettingsNavigationSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryContentModuleArgs = {
  joinedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllContentModuleArgs = {
  filter?: InputMaybe<ContentModuleFilterInput>;
  sort?: InputMaybe<ContentModuleSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySlugFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  current?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityMediaTagConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityMediaTagEdge>;
  nodes: Array<SanityMediaTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityMediaTagGroupConnection>;
};


export type SanityMediaTagConnectionDistinctArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagConnectionMaxArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagConnectionMinArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagConnectionSumArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityMediaTagFieldsEnum;
};

export type SanityMediaTagEdge = {
  next?: Maybe<SanityMediaTag>;
  node: SanityMediaTag;
  previous?: Maybe<SanityMediaTag>;
};

export type SanityMediaTagFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'name____key'
  | 'name____type'
  | 'name___current'
  | '_rawName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityMediaTagGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityMediaTagEdge>;
  nodes: Array<SanityMediaTag>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityMediaTagGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityMediaTagGroupConnectionDistinctArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagGroupConnectionMaxArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagGroupConnectionMinArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagGroupConnectionSumArgs = {
  field: SanityMediaTagFieldsEnum;
};


export type SanityMediaTagGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityMediaTagFieldsEnum;
};

export type SanityMediaTagFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<SanitySlugFilterInput>;
  _rawName?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityMediaTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityMediaTagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityMetaFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  metaTitle?: InputMaybe<StringQueryOperatorInput>;
  metaDescription?: InputMaybe<StringQueryOperatorInput>;
  ogImage?: InputMaybe<SanityImageFilterInput>;
  robotsIndex?: InputMaybe<BooleanQueryOperatorInput>;
  _rawOgImage?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  asset?: InputMaybe<SanityImageAssetFilterInput>;
  hotspot?: InputMaybe<SanityImageHotspotFilterInput>;
  crop?: InputMaybe<SanityImageCropFilterInput>;
  _rawAsset?: InputMaybe<JsonQueryOperatorInput>;
  _rawHotspot?: InputMaybe<JsonQueryOperatorInput>;
  _rawCrop?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImageAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  uploadId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  metadata?: InputMaybe<SanityImageMetadataFilterInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawMetadata?: InputMaybe<JsonQueryOperatorInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityImageMetadataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  location?: InputMaybe<SanityGeopointFilterInput>;
  dimensions?: InputMaybe<SanityImageDimensionsFilterInput>;
  palette?: InputMaybe<SanityImagePaletteFilterInput>;
  lqip?: InputMaybe<StringQueryOperatorInput>;
  blurHash?: InputMaybe<StringQueryOperatorInput>;
  hasAlpha?: InputMaybe<BooleanQueryOperatorInput>;
  isOpaque?: InputMaybe<BooleanQueryOperatorInput>;
  _rawLocation?: InputMaybe<JsonQueryOperatorInput>;
  _rawDimensions?: InputMaybe<JsonQueryOperatorInput>;
  _rawPalette?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityGeopointFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  lat?: InputMaybe<FloatQueryOperatorInput>;
  lng?: InputMaybe<FloatQueryOperatorInput>;
  alt?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageDimensionsFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImagePaletteFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilterInput>;
  _rawDarkMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDarkVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawVibrant?: InputMaybe<JsonQueryOperatorInput>;
  _rawDominant?: InputMaybe<JsonQueryOperatorInput>;
  _rawLightMuted?: InputMaybe<JsonQueryOperatorInput>;
  _rawMuted?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  background?: InputMaybe<StringQueryOperatorInput>;
  foreground?: InputMaybe<StringQueryOperatorInput>;
  population?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityAssetSourceDataFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type SanityImageHotspotFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  x?: InputMaybe<FloatQueryOperatorInput>;
  y?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityImageCropFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  top?: InputMaybe<FloatQueryOperatorInput>;
  bottom?: InputMaybe<FloatQueryOperatorInput>;
  left?: InputMaybe<FloatQueryOperatorInput>;
  right?: InputMaybe<FloatQueryOperatorInput>;
};

export type SanityContentModulesFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _rawModules?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityPageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
};


export type SanityPageConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageEdge = {
  next?: Maybe<SanityPage>;
  node: SanityPage;
  previous?: Maybe<SanityPage>;
};

export type SanityPageFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'meta____key'
  | 'meta____type'
  | 'meta___metaTitle'
  | 'meta___metaDescription'
  | 'meta___ogImage____key'
  | 'meta___ogImage____type'
  | 'meta___ogImage___asset____id'
  | 'meta___ogImage___asset____type'
  | 'meta___ogImage___asset____createdAt'
  | 'meta___ogImage___asset____updatedAt'
  | 'meta___ogImage___asset____rev'
  | 'meta___ogImage___asset____key'
  | 'meta___ogImage___asset___originalFilename'
  | 'meta___ogImage___asset___label'
  | 'meta___ogImage___asset___title'
  | 'meta___ogImage___asset___description'
  | 'meta___ogImage___asset___altText'
  | 'meta___ogImage___asset___sha1hash'
  | 'meta___ogImage___asset___extension'
  | 'meta___ogImage___asset___mimeType'
  | 'meta___ogImage___asset___size'
  | 'meta___ogImage___asset___assetId'
  | 'meta___ogImage___asset___uploadId'
  | 'meta___ogImage___asset___path'
  | 'meta___ogImage___asset___url'
  | 'meta___ogImage___asset____rawMetadata'
  | 'meta___ogImage___asset____rawSource'
  | 'meta___ogImage___asset___gatsbyImageData'
  | 'meta___ogImage___asset___id'
  | 'meta___ogImage___asset___children'
  | 'meta___ogImage___hotspot____key'
  | 'meta___ogImage___hotspot____type'
  | 'meta___ogImage___hotspot___x'
  | 'meta___ogImage___hotspot___y'
  | 'meta___ogImage___hotspot___height'
  | 'meta___ogImage___hotspot___width'
  | 'meta___ogImage___crop____key'
  | 'meta___ogImage___crop____type'
  | 'meta___ogImage___crop___top'
  | 'meta___ogImage___crop___bottom'
  | 'meta___ogImage___crop___left'
  | 'meta___ogImage___crop___right'
  | 'meta___ogImage____rawAsset'
  | 'meta___ogImage____rawHotspot'
  | 'meta___ogImage____rawCrop'
  | 'meta___robotsIndex'
  | 'meta____rawOgImage'
  | 'contentModules____key'
  | 'contentModules____type'
  | 'contentModules____rawModules'
  | '_rawSlug'
  | '_rawMeta'
  | '_rawContentModules'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPageEdge>;
  nodes: Array<SanityPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPageGroupConnectionDistinctArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMaxArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionMinArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionSumArgs = {
  field: SanityPageFieldsEnum;
};


export type SanityPageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPageFieldsEnum;
};

export type SanityPageFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPostCategoryFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPostConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
};


export type SanityPostConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostEdge = {
  next?: Maybe<SanityPost>;
  node: SanityPost;
  previous?: Maybe<SanityPost>;
};

export type SanityPostFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'category____id'
  | 'category____type'
  | 'category____createdAt'
  | 'category____updatedAt'
  | 'category____rev'
  | 'category____key'
  | 'category___title'
  | 'category___slug____key'
  | 'category___slug____type'
  | 'category___slug___current'
  | 'category____rawSlug'
  | 'category___id'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'meta____key'
  | 'meta____type'
  | 'meta___metaTitle'
  | 'meta___metaDescription'
  | 'meta___ogImage____key'
  | 'meta___ogImage____type'
  | 'meta___ogImage___asset____id'
  | 'meta___ogImage___asset____type'
  | 'meta___ogImage___asset____createdAt'
  | 'meta___ogImage___asset____updatedAt'
  | 'meta___ogImage___asset____rev'
  | 'meta___ogImage___asset____key'
  | 'meta___ogImage___asset___originalFilename'
  | 'meta___ogImage___asset___label'
  | 'meta___ogImage___asset___title'
  | 'meta___ogImage___asset___description'
  | 'meta___ogImage___asset___altText'
  | 'meta___ogImage___asset___sha1hash'
  | 'meta___ogImage___asset___extension'
  | 'meta___ogImage___asset___mimeType'
  | 'meta___ogImage___asset___size'
  | 'meta___ogImage___asset___assetId'
  | 'meta___ogImage___asset___uploadId'
  | 'meta___ogImage___asset___path'
  | 'meta___ogImage___asset___url'
  | 'meta___ogImage___asset____rawMetadata'
  | 'meta___ogImage___asset____rawSource'
  | 'meta___ogImage___asset___gatsbyImageData'
  | 'meta___ogImage___asset___id'
  | 'meta___ogImage___asset___children'
  | 'meta___ogImage___hotspot____key'
  | 'meta___ogImage___hotspot____type'
  | 'meta___ogImage___hotspot___x'
  | 'meta___ogImage___hotspot___y'
  | 'meta___ogImage___hotspot___height'
  | 'meta___ogImage___hotspot___width'
  | 'meta___ogImage___crop____key'
  | 'meta___ogImage___crop____type'
  | 'meta___ogImage___crop___top'
  | 'meta___ogImage___crop___bottom'
  | 'meta___ogImage___crop___left'
  | 'meta___ogImage___crop___right'
  | 'meta___ogImage____rawAsset'
  | 'meta___ogImage____rawHotspot'
  | 'meta___ogImage____rawCrop'
  | 'meta___robotsIndex'
  | 'meta____rawOgImage'
  | 'contentModules____key'
  | 'contentModules____type'
  | 'contentModules____rawModules'
  | 'order'
  | '_rawSlug'
  | '_rawCategory'
  | '_rawMeta'
  | '_rawContentModules'
  | 'isPublished'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPostGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostEdge>;
  nodes: Array<SanityPost>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPostGroupConnectionDistinctArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMaxArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionMinArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionSumArgs = {
  field: SanityPostFieldsEnum;
};


export type SanityPostGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostFieldsEnum;
};

export type SanityPostFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  category?: InputMaybe<SanityPostCategoryFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  order?: InputMaybe<FloatQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  isPublished?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityPostCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostCategoryEdge>;
  nodes: Array<SanityPostCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostCategoryGroupConnection>;
};


export type SanityPostCategoryConnectionDistinctArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryConnectionMaxArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryConnectionMinArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryConnectionSumArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostCategoryFieldsEnum;
};

export type SanityPostCategoryEdge = {
  next?: Maybe<SanityPostCategory>;
  node: SanityPostCategory;
  previous?: Maybe<SanityPostCategory>;
};

export type SanityPostCategoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | '_rawSlug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityPostCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityPostCategoryEdge>;
  nodes: Array<SanityPostCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityPostCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityPostCategoryGroupConnectionDistinctArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryGroupConnectionMaxArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryGroupConnectionMinArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryGroupConnectionSumArgs = {
  field: SanityPostCategoryFieldsEnum;
};


export type SanityPostCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityPostCategoryFieldsEnum;
};

export type SanityPostCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityPostCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityProductCategoryFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
};


export type SanityProductConnectionDistinctArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionMaxArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionMinArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionSumArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldsEnum;
};

export type SanityProductEdge = {
  next?: Maybe<SanityProduct>;
  node: SanityProduct;
  previous?: Maybe<SanityProduct>;
};

export type SanityProductFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | 'category____id'
  | 'category____type'
  | 'category____createdAt'
  | 'category____updatedAt'
  | 'category____rev'
  | 'category____key'
  | 'category___title'
  | 'category___slug____key'
  | 'category___slug____type'
  | 'category___slug___current'
  | 'category____rawSlug'
  | 'category___id'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'meta____key'
  | 'meta____type'
  | 'meta___metaTitle'
  | 'meta___metaDescription'
  | 'meta___ogImage____key'
  | 'meta___ogImage____type'
  | 'meta___ogImage___asset____id'
  | 'meta___ogImage___asset____type'
  | 'meta___ogImage___asset____createdAt'
  | 'meta___ogImage___asset____updatedAt'
  | 'meta___ogImage___asset____rev'
  | 'meta___ogImage___asset____key'
  | 'meta___ogImage___asset___originalFilename'
  | 'meta___ogImage___asset___label'
  | 'meta___ogImage___asset___title'
  | 'meta___ogImage___asset___description'
  | 'meta___ogImage___asset___altText'
  | 'meta___ogImage___asset___sha1hash'
  | 'meta___ogImage___asset___extension'
  | 'meta___ogImage___asset___mimeType'
  | 'meta___ogImage___asset___size'
  | 'meta___ogImage___asset___assetId'
  | 'meta___ogImage___asset___uploadId'
  | 'meta___ogImage___asset___path'
  | 'meta___ogImage___asset___url'
  | 'meta___ogImage___asset____rawMetadata'
  | 'meta___ogImage___asset____rawSource'
  | 'meta___ogImage___asset___gatsbyImageData'
  | 'meta___ogImage___asset___id'
  | 'meta___ogImage___asset___children'
  | 'meta___ogImage___hotspot____key'
  | 'meta___ogImage___hotspot____type'
  | 'meta___ogImage___hotspot___x'
  | 'meta___ogImage___hotspot___y'
  | 'meta___ogImage___hotspot___height'
  | 'meta___ogImage___hotspot___width'
  | 'meta___ogImage___crop____key'
  | 'meta___ogImage___crop____type'
  | 'meta___ogImage___crop___top'
  | 'meta___ogImage___crop___bottom'
  | 'meta___ogImage___crop___left'
  | 'meta___ogImage___crop___right'
  | 'meta___ogImage____rawAsset'
  | 'meta___ogImage____rawHotspot'
  | 'meta___ogImage____rawCrop'
  | 'meta___robotsIndex'
  | 'meta____rawOgImage'
  | 'shopifyProduct'
  | 'contentModules____key'
  | 'contentModules____type'
  | 'contentModules____rawModules'
  | 'order'
  | '_rawSlug'
  | '_rawCategory'
  | '_rawMeta'
  | '_rawContentModules'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductEdge>;
  nodes: Array<SanityProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityProductGroupConnectionDistinctArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionMaxArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionMinArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionSumArgs = {
  field: SanityProductFieldsEnum;
};


export type SanityProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductFieldsEnum;
};

export type SanityProductFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<SanitySlugFilterInput>;
  category?: InputMaybe<SanityProductCategoryFilterInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  shopifyProduct?: InputMaybe<StringQueryOperatorInput>;
  contentModules?: InputMaybe<SanityContentModulesFilterInput>;
  order?: InputMaybe<FloatQueryOperatorInput>;
  _rawSlug?: InputMaybe<JsonQueryOperatorInput>;
  _rawCategory?: InputMaybe<JsonQueryOperatorInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  _rawContentModules?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityProductSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityProductFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityProductCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductCategoryEdge>;
  nodes: Array<SanityProductCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductCategoryGroupConnection>;
};


export type SanityProductCategoryConnectionDistinctArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryConnectionMaxArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryConnectionMinArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryConnectionSumArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductCategoryFieldsEnum;
};

export type SanityProductCategoryEdge = {
  next?: Maybe<SanityProductCategory>;
  node: SanityProductCategory;
  previous?: Maybe<SanityProductCategory>;
};

export type SanityProductCategoryFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'slug____key'
  | 'slug____type'
  | 'slug___current'
  | '_rawSlug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityProductCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityProductCategoryEdge>;
  nodes: Array<SanityProductCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityProductCategoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityProductCategoryGroupConnectionDistinctArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryGroupConnectionMaxArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryGroupConnectionMinArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryGroupConnectionSumArgs = {
  field: SanityProductCategoryFieldsEnum;
};


export type SanityProductCategoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityProductCategoryFieldsEnum;
};

export type SanityProductCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityProductCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>;
  node: SanityFileAsset;
  previous?: Maybe<SanityFileAsset>;
};

export type SanityFileAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'path'
  | 'url'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawSource'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityFileAssetEdge>;
  nodes: Array<SanityFileAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityFileAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityFileAssetGroupConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMaxArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionMinArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionSumArgs = {
  field: SanityFileAssetFieldsEnum;
};


export type SanityFileAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityFileAssetFieldsEnum;
};

export type SanityFileAssetFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  originalFilename?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  sha1hash?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<FloatQueryOperatorInput>;
  assetId?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  source?: InputMaybe<SanityAssetSourceDataFilterInput>;
  _rawSource?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanityFileAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityFileAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>;
  node: SanityImageAsset;
  previous?: Maybe<SanityImageAsset>;
};

export type SanityImageAssetFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'originalFilename'
  | 'label'
  | 'title'
  | 'description'
  | 'altText'
  | 'sha1hash'
  | 'extension'
  | 'mimeType'
  | 'size'
  | 'assetId'
  | 'uploadId'
  | 'path'
  | 'url'
  | 'metadata____key'
  | 'metadata____type'
  | 'metadata___location____key'
  | 'metadata___location____type'
  | 'metadata___location___lat'
  | 'metadata___location___lng'
  | 'metadata___location___alt'
  | 'metadata___dimensions____key'
  | 'metadata___dimensions____type'
  | 'metadata___dimensions___height'
  | 'metadata___dimensions___width'
  | 'metadata___dimensions___aspectRatio'
  | 'metadata___palette____key'
  | 'metadata___palette____type'
  | 'metadata___palette___darkMuted____key'
  | 'metadata___palette___darkMuted____type'
  | 'metadata___palette___darkMuted___background'
  | 'metadata___palette___darkMuted___foreground'
  | 'metadata___palette___darkMuted___population'
  | 'metadata___palette___darkMuted___title'
  | 'metadata___palette___lightVibrant____key'
  | 'metadata___palette___lightVibrant____type'
  | 'metadata___palette___lightVibrant___background'
  | 'metadata___palette___lightVibrant___foreground'
  | 'metadata___palette___lightVibrant___population'
  | 'metadata___palette___lightVibrant___title'
  | 'metadata___palette___darkVibrant____key'
  | 'metadata___palette___darkVibrant____type'
  | 'metadata___palette___darkVibrant___background'
  | 'metadata___palette___darkVibrant___foreground'
  | 'metadata___palette___darkVibrant___population'
  | 'metadata___palette___darkVibrant___title'
  | 'metadata___palette___vibrant____key'
  | 'metadata___palette___vibrant____type'
  | 'metadata___palette___vibrant___background'
  | 'metadata___palette___vibrant___foreground'
  | 'metadata___palette___vibrant___population'
  | 'metadata___palette___vibrant___title'
  | 'metadata___palette___dominant____key'
  | 'metadata___palette___dominant____type'
  | 'metadata___palette___dominant___background'
  | 'metadata___palette___dominant___foreground'
  | 'metadata___palette___dominant___population'
  | 'metadata___palette___dominant___title'
  | 'metadata___palette___lightMuted____key'
  | 'metadata___palette___lightMuted____type'
  | 'metadata___palette___lightMuted___background'
  | 'metadata___palette___lightMuted___foreground'
  | 'metadata___palette___lightMuted___population'
  | 'metadata___palette___lightMuted___title'
  | 'metadata___palette___muted____key'
  | 'metadata___palette___muted____type'
  | 'metadata___palette___muted___background'
  | 'metadata___palette___muted___foreground'
  | 'metadata___palette___muted___population'
  | 'metadata___palette___muted___title'
  | 'metadata___palette____rawDarkMuted'
  | 'metadata___palette____rawLightVibrant'
  | 'metadata___palette____rawDarkVibrant'
  | 'metadata___palette____rawVibrant'
  | 'metadata___palette____rawDominant'
  | 'metadata___palette____rawLightMuted'
  | 'metadata___palette____rawMuted'
  | 'metadata___lqip'
  | 'metadata___blurHash'
  | 'metadata___hasAlpha'
  | 'metadata___isOpaque'
  | 'metadata____rawLocation'
  | 'metadata____rawDimensions'
  | 'metadata____rawPalette'
  | 'source____key'
  | 'source____type'
  | 'source___name'
  | 'source___id'
  | 'source___url'
  | '_rawMetadata'
  | '_rawSource'
  | 'gatsbyImageData'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanityImageAssetEdge>;
  nodes: Array<SanityImageAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanityImageAssetGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanityImageAssetGroupConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMaxArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionMinArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionSumArgs = {
  field: SanityImageAssetFieldsEnum;
};


export type SanityImageAssetGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanityImageAssetFieldsEnum;
};

export type SanityImageAssetSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanityImageAssetFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityCookieFilterListInput = {
  elemMatch?: InputMaybe<SanityCookieFilterInput>;
};

export type SanityCookieFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  category?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySiteSettingsCookiesConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsCookiesEdge>;
  nodes: Array<SanitySiteSettingsCookies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsCookiesGroupConnection>;
};


export type SanitySiteSettingsCookiesConnectionDistinctArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesConnectionMaxArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesConnectionMinArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesConnectionSumArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsCookiesFieldsEnum;
};

export type SanitySiteSettingsCookiesEdge = {
  next?: Maybe<SanitySiteSettingsCookies>;
  node: SanitySiteSettingsCookies;
  previous?: Maybe<SanitySiteSettingsCookies>;
};

export type SanitySiteSettingsCookiesFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'title'
  | 'description'
  | 'cookies'
  | 'cookies____key'
  | 'cookies____type'
  | 'cookies___name'
  | 'cookies___label'
  | 'cookies___category'
  | '_rawCookies'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteSettingsCookiesGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsCookiesEdge>;
  nodes: Array<SanitySiteSettingsCookies>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsCookiesGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteSettingsCookiesGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesGroupConnectionMaxArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesGroupConnectionMinArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesGroupConnectionSumArgs = {
  field: SanitySiteSettingsCookiesFieldsEnum;
};


export type SanitySiteSettingsCookiesGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsCookiesFieldsEnum;
};

export type SanitySiteSettingsCookiesFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  cookies?: InputMaybe<SanityCookieFilterListInput>;
  _rawCookies?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteSettingsCookiesSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsCookiesFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityRichTextExtendedFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  alignment?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<SanityBlockFilterListInput>;
  _rawText?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityBlockFilterListInput = {
  elemMatch?: InputMaybe<SanityBlockFilterInput>;
};

export type SanityBlockFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<SanitySpanFilterListInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
  list?: InputMaybe<StringQueryOperatorInput>;
  _rawChildren?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanitySpanFilterListInput = {
  elemMatch?: InputMaybe<SanitySpanFilterInput>;
};

export type SanitySpanFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  marks?: InputMaybe<StringQueryOperatorInput>;
  text?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySiteSettingsInformationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsInformationEdge>;
  nodes: Array<SanitySiteSettingsInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsInformationGroupConnection>;
};


export type SanitySiteSettingsInformationConnectionDistinctArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationConnectionMaxArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationConnectionMinArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationConnectionSumArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsInformationFieldsEnum;
};

export type SanitySiteSettingsInformationEdge = {
  next?: Maybe<SanitySiteSettingsInformation>;
  node: SanitySiteSettingsInformation;
  previous?: Maybe<SanitySiteSettingsInformation>;
};

export type SanitySiteSettingsInformationFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'globalInfo____key'
  | 'globalInfo____type'
  | 'globalInfo___alignment'
  | 'globalInfo___text'
  | 'globalInfo___text____key'
  | 'globalInfo___text____type'
  | 'globalInfo___text___children'
  | 'globalInfo___text___children____key'
  | 'globalInfo___text___children____type'
  | 'globalInfo___text___children___marks'
  | 'globalInfo___text___children___text'
  | 'globalInfo___text___style'
  | 'globalInfo___text___list'
  | 'globalInfo___text____rawChildren'
  | 'globalInfo____rawText'
  | 'companyAddress'
  | 'privacyPolicyPage____id'
  | 'privacyPolicyPage____type'
  | 'privacyPolicyPage____createdAt'
  | 'privacyPolicyPage____updatedAt'
  | 'privacyPolicyPage____rev'
  | 'privacyPolicyPage____key'
  | 'privacyPolicyPage___title'
  | 'privacyPolicyPage___slug____key'
  | 'privacyPolicyPage___slug____type'
  | 'privacyPolicyPage___slug___current'
  | 'privacyPolicyPage___meta____key'
  | 'privacyPolicyPage___meta____type'
  | 'privacyPolicyPage___meta___metaTitle'
  | 'privacyPolicyPage___meta___metaDescription'
  | 'privacyPolicyPage___meta___ogImage____key'
  | 'privacyPolicyPage___meta___ogImage____type'
  | 'privacyPolicyPage___meta___ogImage____rawAsset'
  | 'privacyPolicyPage___meta___ogImage____rawHotspot'
  | 'privacyPolicyPage___meta___ogImage____rawCrop'
  | 'privacyPolicyPage___meta___robotsIndex'
  | 'privacyPolicyPage___meta____rawOgImage'
  | 'privacyPolicyPage___contentModules____key'
  | 'privacyPolicyPage___contentModules____type'
  | 'privacyPolicyPage___contentModules____rawModules'
  | 'privacyPolicyPage____rawSlug'
  | 'privacyPolicyPage____rawMeta'
  | 'privacyPolicyPage____rawContentModules'
  | 'privacyPolicyPage___id'
  | 'privacyPolicyPage___parent___id'
  | 'privacyPolicyPage___parent___parent___id'
  | 'privacyPolicyPage___parent___parent___children'
  | 'privacyPolicyPage___parent___children'
  | 'privacyPolicyPage___parent___children___id'
  | 'privacyPolicyPage___parent___children___children'
  | 'privacyPolicyPage___parent___internal___content'
  | 'privacyPolicyPage___parent___internal___contentDigest'
  | 'privacyPolicyPage___parent___internal___description'
  | 'privacyPolicyPage___parent___internal___fieldOwners'
  | 'privacyPolicyPage___parent___internal___ignoreType'
  | 'privacyPolicyPage___parent___internal___mediaType'
  | 'privacyPolicyPage___parent___internal___owner'
  | 'privacyPolicyPage___parent___internal___type'
  | 'privacyPolicyPage___children'
  | 'privacyPolicyPage___children___id'
  | 'privacyPolicyPage___children___parent___id'
  | 'privacyPolicyPage___children___parent___children'
  | 'privacyPolicyPage___children___children'
  | 'privacyPolicyPage___children___children___id'
  | 'privacyPolicyPage___children___children___children'
  | 'privacyPolicyPage___children___internal___content'
  | 'privacyPolicyPage___children___internal___contentDigest'
  | 'privacyPolicyPage___children___internal___description'
  | 'privacyPolicyPage___children___internal___fieldOwners'
  | 'privacyPolicyPage___children___internal___ignoreType'
  | 'privacyPolicyPage___children___internal___mediaType'
  | 'privacyPolicyPage___children___internal___owner'
  | 'privacyPolicyPage___children___internal___type'
  | 'privacyPolicyPage___internal___content'
  | 'privacyPolicyPage___internal___contentDigest'
  | 'privacyPolicyPage___internal___description'
  | 'privacyPolicyPage___internal___fieldOwners'
  | 'privacyPolicyPage___internal___ignoreType'
  | 'privacyPolicyPage___internal___mediaType'
  | 'privacyPolicyPage___internal___owner'
  | 'privacyPolicyPage___internal___type'
  | '_rawGlobalInfo'
  | '_rawPrivacyPolicyPage'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteSettingsInformationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsInformationEdge>;
  nodes: Array<SanitySiteSettingsInformation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsInformationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteSettingsInformationGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationGroupConnectionMaxArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationGroupConnectionMinArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationGroupConnectionSumArgs = {
  field: SanitySiteSettingsInformationFieldsEnum;
};


export type SanitySiteSettingsInformationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsInformationFieldsEnum;
};

export type SanitySiteSettingsInformationFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  globalInfo?: InputMaybe<SanityRichTextExtendedFilterInput>;
  companyAddress?: InputMaybe<StringQueryOperatorInput>;
  privacyPolicyPage?: InputMaybe<SanityPageFilterInput>;
  _rawGlobalInfo?: InputMaybe<JsonQueryOperatorInput>;
  _rawPrivacyPolicyPage?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteSettingsInformationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsInformationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanitySiteSettingsMetaConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsMetaEdge>;
  nodes: Array<SanitySiteSettingsMeta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsMetaGroupConnection>;
};


export type SanitySiteSettingsMetaConnectionDistinctArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaConnectionMaxArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaConnectionMinArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaConnectionSumArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsMetaFieldsEnum;
};

export type SanitySiteSettingsMetaEdge = {
  next?: Maybe<SanitySiteSettingsMeta>;
  node: SanitySiteSettingsMeta;
  previous?: Maybe<SanitySiteSettingsMeta>;
};

export type SanitySiteSettingsMetaFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'meta____key'
  | 'meta____type'
  | 'meta___metaTitle'
  | 'meta___metaDescription'
  | 'meta___ogImage____key'
  | 'meta___ogImage____type'
  | 'meta___ogImage___asset____id'
  | 'meta___ogImage___asset____type'
  | 'meta___ogImage___asset____createdAt'
  | 'meta___ogImage___asset____updatedAt'
  | 'meta___ogImage___asset____rev'
  | 'meta___ogImage___asset____key'
  | 'meta___ogImage___asset___originalFilename'
  | 'meta___ogImage___asset___label'
  | 'meta___ogImage___asset___title'
  | 'meta___ogImage___asset___description'
  | 'meta___ogImage___asset___altText'
  | 'meta___ogImage___asset___sha1hash'
  | 'meta___ogImage___asset___extension'
  | 'meta___ogImage___asset___mimeType'
  | 'meta___ogImage___asset___size'
  | 'meta___ogImage___asset___assetId'
  | 'meta___ogImage___asset___uploadId'
  | 'meta___ogImage___asset___path'
  | 'meta___ogImage___asset___url'
  | 'meta___ogImage___asset____rawMetadata'
  | 'meta___ogImage___asset____rawSource'
  | 'meta___ogImage___asset___gatsbyImageData'
  | 'meta___ogImage___asset___id'
  | 'meta___ogImage___asset___children'
  | 'meta___ogImage___hotspot____key'
  | 'meta___ogImage___hotspot____type'
  | 'meta___ogImage___hotspot___x'
  | 'meta___ogImage___hotspot___y'
  | 'meta___ogImage___hotspot___height'
  | 'meta___ogImage___hotspot___width'
  | 'meta___ogImage___crop____key'
  | 'meta___ogImage___crop____type'
  | 'meta___ogImage___crop___top'
  | 'meta___ogImage___crop___bottom'
  | 'meta___ogImage___crop___left'
  | 'meta___ogImage___crop___right'
  | 'meta___ogImage____rawAsset'
  | 'meta___ogImage____rawHotspot'
  | 'meta___ogImage____rawCrop'
  | 'meta___robotsIndex'
  | 'meta____rawOgImage'
  | '_rawMeta'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteSettingsMetaGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsMetaEdge>;
  nodes: Array<SanitySiteSettingsMeta>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsMetaGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteSettingsMetaGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaGroupConnectionMaxArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaGroupConnectionMinArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaGroupConnectionSumArgs = {
  field: SanitySiteSettingsMetaFieldsEnum;
};


export type SanitySiteSettingsMetaGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsMetaFieldsEnum;
};

export type SanitySiteSettingsMetaFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  meta?: InputMaybe<SanityMetaFilterInput>;
  _rawMeta?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteSettingsMetaSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsMetaFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SanityMenuLinkFilterListInput = {
  elemMatch?: InputMaybe<SanityMenuLinkFilterInput>;
};

export type SanityMenuLinkFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<SanityLinkFilterInput>;
  _rawLink?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityLinkFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  targetBlank?: InputMaybe<BooleanQueryOperatorInput>;
  _rawInternal?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityButtonFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  properties?: InputMaybe<SanityButtonPropertiesFilterInput>;
  link?: InputMaybe<SanityLinkFilterInput>;
  _rawProperties?: InputMaybe<JsonQueryOperatorInput>;
  _rawLink?: InputMaybe<JsonQueryOperatorInput>;
};

export type SanityButtonPropertiesFilterInput = {
  _key?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  style?: InputMaybe<StringQueryOperatorInput>;
};

export type SanitySiteSettingsNavigationConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsNavigationEdge>;
  nodes: Array<SanitySiteSettingsNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsNavigationGroupConnection>;
};


export type SanitySiteSettingsNavigationConnectionDistinctArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationConnectionMaxArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationConnectionMinArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationConnectionSumArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsNavigationFieldsEnum;
};

export type SanitySiteSettingsNavigationEdge = {
  next?: Maybe<SanitySiteSettingsNavigation>;
  node: SanitySiteSettingsNavigation;
  previous?: Maybe<SanitySiteSettingsNavigation>;
};

export type SanitySiteSettingsNavigationFieldsEnum =
  | '_id'
  | '_type'
  | '_createdAt'
  | '_updatedAt'
  | '_rev'
  | '_key'
  | 'frontpage____id'
  | 'frontpage____type'
  | 'frontpage____createdAt'
  | 'frontpage____updatedAt'
  | 'frontpage____rev'
  | 'frontpage____key'
  | 'frontpage___title'
  | 'frontpage___slug____key'
  | 'frontpage___slug____type'
  | 'frontpage___slug___current'
  | 'frontpage___meta____key'
  | 'frontpage___meta____type'
  | 'frontpage___meta___metaTitle'
  | 'frontpage___meta___metaDescription'
  | 'frontpage___meta___ogImage____key'
  | 'frontpage___meta___ogImage____type'
  | 'frontpage___meta___ogImage____rawAsset'
  | 'frontpage___meta___ogImage____rawHotspot'
  | 'frontpage___meta___ogImage____rawCrop'
  | 'frontpage___meta___robotsIndex'
  | 'frontpage___meta____rawOgImage'
  | 'frontpage___contentModules____key'
  | 'frontpage___contentModules____type'
  | 'frontpage___contentModules____rawModules'
  | 'frontpage____rawSlug'
  | 'frontpage____rawMeta'
  | 'frontpage____rawContentModules'
  | 'frontpage___id'
  | 'frontpage___parent___id'
  | 'frontpage___parent___parent___id'
  | 'frontpage___parent___parent___children'
  | 'frontpage___parent___children'
  | 'frontpage___parent___children___id'
  | 'frontpage___parent___children___children'
  | 'frontpage___parent___internal___content'
  | 'frontpage___parent___internal___contentDigest'
  | 'frontpage___parent___internal___description'
  | 'frontpage___parent___internal___fieldOwners'
  | 'frontpage___parent___internal___ignoreType'
  | 'frontpage___parent___internal___mediaType'
  | 'frontpage___parent___internal___owner'
  | 'frontpage___parent___internal___type'
  | 'frontpage___children'
  | 'frontpage___children___id'
  | 'frontpage___children___parent___id'
  | 'frontpage___children___parent___children'
  | 'frontpage___children___children'
  | 'frontpage___children___children___id'
  | 'frontpage___children___children___children'
  | 'frontpage___children___internal___content'
  | 'frontpage___children___internal___contentDigest'
  | 'frontpage___children___internal___description'
  | 'frontpage___children___internal___fieldOwners'
  | 'frontpage___children___internal___ignoreType'
  | 'frontpage___children___internal___mediaType'
  | 'frontpage___children___internal___owner'
  | 'frontpage___children___internal___type'
  | 'frontpage___internal___content'
  | 'frontpage___internal___contentDigest'
  | 'frontpage___internal___description'
  | 'frontpage___internal___fieldOwners'
  | 'frontpage___internal___ignoreType'
  | 'frontpage___internal___mediaType'
  | 'frontpage___internal___owner'
  | 'frontpage___internal___type'
  | 'desktopMain'
  | 'desktopMain____key'
  | 'desktopMain____type'
  | 'desktopMain___label'
  | 'desktopMain___link____key'
  | 'desktopMain___link____type'
  | 'desktopMain___link___type'
  | 'desktopMain___link___url'
  | 'desktopMain___link___targetBlank'
  | 'desktopMain___link____rawInternal'
  | 'desktopMain____rawLink'
  | 'desktopSecondary'
  | 'desktopSecondary____key'
  | 'desktopSecondary____type'
  | 'desktopSecondary___label'
  | 'desktopSecondary___link____key'
  | 'desktopSecondary___link____type'
  | 'desktopSecondary___link___type'
  | 'desktopSecondary___link___url'
  | 'desktopSecondary___link___targetBlank'
  | 'desktopSecondary___link____rawInternal'
  | 'desktopSecondary____rawLink'
  | 'mobileMain'
  | 'mobileMain____key'
  | 'mobileMain____type'
  | 'mobileMain___label'
  | 'mobileMain___link____key'
  | 'mobileMain___link____type'
  | 'mobileMain___link___type'
  | 'mobileMain___link___url'
  | 'mobileMain___link___targetBlank'
  | 'mobileMain___link____rawInternal'
  | 'mobileMain____rawLink'
  | 'mobileSecondary'
  | 'mobileSecondary____key'
  | 'mobileSecondary____type'
  | 'mobileSecondary___label'
  | 'mobileSecondary___link____key'
  | 'mobileSecondary___link____type'
  | 'mobileSecondary___link___type'
  | 'mobileSecondary___link___url'
  | 'mobileSecondary___link___targetBlank'
  | 'mobileSecondary___link____rawInternal'
  | 'mobileSecondary____rawLink'
  | 'cta____key'
  | 'cta____type'
  | 'cta___properties____key'
  | 'cta___properties____type'
  | 'cta___properties___label'
  | 'cta___properties___style'
  | 'cta___link____key'
  | 'cta___link____type'
  | 'cta___link___type'
  | 'cta___link___url'
  | 'cta___link___targetBlank'
  | 'cta___link____rawInternal'
  | 'cta____rawProperties'
  | 'cta____rawLink'
  | '_rawFrontpage'
  | '_rawDesktopMain'
  | '_rawDesktopSecondary'
  | '_rawMobileMain'
  | '_rawMobileSecondary'
  | '_rawCta'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SanitySiteSettingsNavigationGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SanitySiteSettingsNavigationEdge>;
  nodes: Array<SanitySiteSettingsNavigation>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SanitySiteSettingsNavigationGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SanitySiteSettingsNavigationGroupConnectionDistinctArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationGroupConnectionMaxArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationGroupConnectionMinArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationGroupConnectionSumArgs = {
  field: SanitySiteSettingsNavigationFieldsEnum;
};


export type SanitySiteSettingsNavigationGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SanitySiteSettingsNavigationFieldsEnum;
};

export type SanitySiteSettingsNavigationFilterInput = {
  _id?: InputMaybe<StringQueryOperatorInput>;
  _type?: InputMaybe<StringQueryOperatorInput>;
  _createdAt?: InputMaybe<DateQueryOperatorInput>;
  _updatedAt?: InputMaybe<DateQueryOperatorInput>;
  _rev?: InputMaybe<StringQueryOperatorInput>;
  _key?: InputMaybe<StringQueryOperatorInput>;
  frontpage?: InputMaybe<SanityPageFilterInput>;
  desktopMain?: InputMaybe<SanityMenuLinkFilterListInput>;
  desktopSecondary?: InputMaybe<SanityMenuLinkFilterListInput>;
  mobileMain?: InputMaybe<SanityMenuLinkFilterListInput>;
  mobileSecondary?: InputMaybe<SanityMenuLinkFilterListInput>;
  cta?: InputMaybe<SanityButtonFilterInput>;
  _rawFrontpage?: InputMaybe<JsonQueryOperatorInput>;
  _rawDesktopMain?: InputMaybe<JsonQueryOperatorInput>;
  _rawDesktopSecondary?: InputMaybe<JsonQueryOperatorInput>;
  _rawMobileMain?: InputMaybe<JsonQueryOperatorInput>;
  _rawMobileSecondary?: InputMaybe<JsonQueryOperatorInput>;
  _rawCta?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SanitySiteSettingsNavigationSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SanitySiteSettingsNavigationFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ContentModuleConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentModuleEdge>;
  nodes: Array<ContentModule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentModuleGroupConnection>;
};


export type ContentModuleConnectionDistinctArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleConnectionMaxArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleConnectionMinArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleConnectionSumArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentModuleFieldsEnum;
};

export type ContentModuleEdge = {
  next?: Maybe<ContentModule>;
  node: ContentModule;
  previous?: Maybe<ContentModule>;
};

export type ContentModuleFieldsEnum =
  | 'joinedAt'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentModuleGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentModuleEdge>;
  nodes: Array<ContentModule>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ContentModuleGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ContentModuleGroupConnectionDistinctArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleGroupConnectionMaxArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleGroupConnectionMinArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleGroupConnectionSumArgs = {
  field: ContentModuleFieldsEnum;
};


export type ContentModuleGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ContentModuleFieldsEnum;
};

export type ContentModuleFilterInput = {
  joinedAt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ContentModuleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ContentModuleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type LinkFragment = { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined };

export type ImageFragment = { crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined, asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ImageWithPreviewFragment = { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined };

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { data?: { id: string, title?: string | null | undefined, description?: string | null | undefined, cookies?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, name?: string | null | undefined, label?: string | null | undefined, category?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { data?: { desktopSecondary?: Array<{ label?: string | null | undefined, link?: { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { data?: { desktopMain?: Array<{ label?: string | null | undefined, link?: { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, mobileMain?: Array<{ label?: string | null | undefined, link?: { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined, mobileSecondary?: Array<{ label?: string | null | undefined, link?: { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type MenuLinkFragment = { label?: string | null | undefined, link?: { url?: string | null | undefined, type?: string | null | undefined, internal?: { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | { _type?: string | null | undefined, slug?: { current?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { data: { edges: Array<{ node: { meta?: { robotsIndex?: boolean | null | undefined, metaTitle?: string | null | undefined, metaDescription?: string | null | undefined, ogImage?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } }> } };

export type MetaDataFragment = { robotsIndex?: boolean | null | undefined, metaTitle?: string | null | undefined, metaDescription?: string | null | undefined, ogImage?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined };

export type ModuleOptionsFragment = { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined };

export type ModuleHeroDataFragment = { _type?: string | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined };

export type ModuleImageDataFragment = { subtitle?: string | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined };

export type ModuleMarqueeDataFragment = { marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined };

export type RichTextDataFragment = { alignment?: string | null | undefined, textRaw?: any | null | undefined };

export type ModuleRichTextDataFragment = { text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined };

export type ModuleSpacerDataFragment = { height?: number | null | undefined };

export type ModuleVideoEmbedDataFragment = { autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined };

export type ContentModules_SanityModuleHero_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined };

export type ContentModules_SanityModuleImage_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined };

export type ContentModules_SanityModuleListing_Fragment = {};

export type ContentModules_SanityModuleMarquee_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ContentModules_SanityModuleRichText_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined };

export type ContentModules_SanityModuleSpacer_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type ContentModules_SanityModuleTwoColumn_Fragment = {};

export type ContentModules_SanityModuleVideoEmbed_Fragment = { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined };

export type ContentModulesFragment = ContentModules_SanityModuleHero_Fragment | ContentModules_SanityModuleImage_Fragment | ContentModules_SanityModuleListing_Fragment | ContentModules_SanityModuleMarquee_Fragment | ContentModules_SanityModuleRichText_Fragment | ContentModules_SanityModuleSpacer_Fragment | ContentModules_SanityModuleTwoColumn_Fragment | ContentModules_SanityModuleVideoEmbed_Fragment;

export type ContentModulesDataFragment = { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined };

export type Unnamed_5_QueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type Unnamed_5_Query = { page?: { title?: string | null | undefined, meta?: { robotsIndex?: boolean | null | undefined, metaTitle?: string | null | undefined, metaDescription?: string | null | undefined, ogImage?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, contentModules?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type Unnamed_6_QueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type Unnamed_6_Query = { page?: { title?: string | null | undefined, meta?: { robotsIndex?: boolean | null | undefined, metaTitle?: string | null | undefined, metaDescription?: string | null | undefined, ogImage?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, contentModules?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type Unnamed_7_QueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type Unnamed_7_Query = { page?: { title?: string | null | undefined, meta?: { robotsIndex?: boolean | null | undefined, metaTitle?: string | null | undefined, metaDescription?: string | null | undefined, ogImage?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, contentModules?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, firstColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, secondColumn?: { modules?: Array<{ _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, heroTitle?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined, heroImage?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, subtitle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, image?: { asset?: { _id?: string | null | undefined, altText?: string | null | undefined, metadata?: { lqip?: string | null | undefined, preview?: string | null | undefined, dimensions?: { aspectRatio?: number | null | undefined, width?: number | null | undefined, height?: number | null | undefined } | null | undefined } | null | undefined } | null | undefined, crop?: { _key?: string | null | undefined, _type?: string | null | undefined, top?: number | null | undefined, bottom?: number | null | undefined, left?: number | null | undefined, right?: number | null | undefined } | null | undefined, hotspot?: { _key?: string | null | undefined, _type?: string | null | undefined, x?: number | null | undefined, y?: number | null | undefined, height?: number | null | undefined, width?: number | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, marqueetext?: string | null | undefined, marqueestyle?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, text?: { alignment?: string | null | undefined, textRaw?: any | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, height?: number | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined } | { _key?: string | null | undefined, _type?: string | null | undefined, autoplay?: boolean | null | undefined, controls?: boolean | null | undefined, loop?: boolean | null | undefined, muted?: boolean | null | undefined, title?: string | null | undefined, options?: { activation?: { hidden?: boolean | null | undefined } | null | undefined, padding?: { container?: boolean | null | undefined, x?: number | null | undefined, y?: number | null | undefined } | null | undefined, theme?: { theme?: string | null | undefined, list?: { value?: string | null | undefined, title?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined, video?: { url?: string | null | undefined } | null | undefined, aspectRatio?: { x?: number | null | undefined, y?: number | null | undefined } | null | undefined, posterFrame?: { asset?: { url?: string | null | undefined } | null | undefined } | null | undefined } | {} | null | undefined> | null | undefined } | null | undefined } | null | undefined };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
