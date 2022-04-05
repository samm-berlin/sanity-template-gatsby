/* eslint-disable react/display-name */
import React, { FC, useEffect } from 'react'
import { graphql } from 'gatsby'
import {
  SanityContentModules,
  SanityModuleImage,
  SanityModuleMarquee,
  SanityModuleRichText,
  SanityModuleSpacer,
  SanityModuleTwoColumn,
  SanityModuleHero,
  SanityModuleScrollySection
} from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import ImageModule from '@/modules/Image'
import RichText from '@/modules/RichText'
import VideoEmbedModule, { VideoEmbedModuleProps } from '@/modules/VideoEmbed'
import ModuleContainer from '../containers/ModuleContainer'
import SpacerModule from './Spacer'
import TwoColModule from './TwoColumns'
import MarqueeModule from './Marquee'
import HeroModule from './Hero'
import ScrollySectionModule from './Scrolly/ScrollySection'
import RelationalGridModule, { ModuleRelationalGrid } from './RelationalGrid'
import RelatedListModule, { ModuleRelatedList } from './RelatedList'
import NewsListMasonry from './NewsListMasonry'
import FourPathGrid, { ModuleFourPathGrid } from './FourPathGrid'
import Listing, { ModuleListing } from './Listing'
import TwoTextColumnsModule, { ModuleTwoTextColumns } from './TwoTextColumns'

const modulesMap = {
  moduleRichText: (props: SanityModuleRichText) => <RichText {...props} />,
  moduleImage: (props: SanityModuleImage) => <ImageModule {...props} />,
  moduleVideoEmbed: (props: VideoEmbedModuleProps) => <VideoEmbedModule {...props} />,
  moduleSpacer: (props: SanityModuleSpacer) => <SpacerModule {...props} />,
  moduleTwoColumn: (props: SanityModuleTwoColumn) => <TwoColModule {...props} />,
  moduleTwoTextColumns: (props: ModuleTwoTextColumns) => <TwoTextColumnsModule {...props} />,
  moduleMarquee: (props: SanityModuleMarquee) => <MarqueeModule {...props} />,
  moduleHero: (props: SanityModuleHero) => <HeroModule {...props} />,
  moduleRelationalGrid: (props: ModuleRelationalGrid) => <RelationalGridModule {...props} />,
  moduleRelatedList: (props: ModuleRelatedList) => <RelatedListModule {...props} />,
  moduleNewsListMasonry: () => <NewsListMasonry />,
  moduleFourPathGrid: (props: ModuleFourPathGrid) => <FourPathGrid {...props} />,
  moduleListing: (props: ModuleListing) => <Listing {...props} />,
  moduleScrollySection: (props: SanityModuleScrollySection) => <ScrollySectionModule {...props} />,
  fragment: <div />
}

const ModuleLoop: FC<SanityContentModules> = ({ modules, ...props }) => {
  // useEffect(() => {
  //   console.log(modules)
  // }, [])

  return (
    <Box height="100%" {...props}>
      {modules?.map((module) => {
        if (module?._type && !module?.options?.activation?.hidden) {
          return (
            <ModuleContainer options={module.options}>
              {modulesMap[module?._type]({ key: module?._key, ...module })}
            </ModuleContainer>
          )
        } else return <div />
      })}
    </Box>
  )
}

export default ModuleLoop

export const query = graphql`
  fragment ContentModules on SanityModuleFourPathGridOrModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleNewsListMasonryOrModuleRelatedListOrModuleRelationalGridOrModuleRichTextOrModuleScrollySectionOrModuleSpacerOrModuleTwoColumnOrModuleTwoTextColumnsOrModuleVideoEmbed {
    ... on SanityModuleRichText {
      _key
      _type
      ...moduleRichTextData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleTwoTextColumns {
      _key
      _type
      ...moduleTwoTextColumnsData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleImage {
      _key
      _type
      ...moduleImageData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleVideoEmbed {
      _key
      _type
      ...moduleVideoEmbedData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleSpacer {
      _key
      _type
      ...moduleSpacerData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleMarquee {
      _key
      _type
      ...moduleMarqueeData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleHero {
      _key
      _type
      ...moduleHeroData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleRelationalGrid {
      _key
      _type
      ...moduleRelationalGridData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleRelatedList {
      _key
      _type
      ...moduleRelatedListData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleNewsListMasonry {
      _key
      _type
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleFourPathGrid {
      _key
      _type
      ...moduleFourPathGridData
      options {
        ...ModuleOptions
      }
    }
    ... on SanityModuleListing {
      _key
      _type
      ...moduleListingData
      options {
        ...ModuleOptions
      }
    }
  }

  fragment ScrollyContentModule on SanityModuleFourPathGridOrModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleNewsListMasonryOrModuleRelatedListOrModuleRelationalGridOrModuleRichTextOrModuleScrollySectionOrModuleSpacerOrModuleTwoColumnOrModuleTwoTextColumnsOrModuleVideoEmbed {
    ... on SanityModuleScrollySection {
      _key
      _type
      ...moduleScrollySection
    }
  }

  fragment contentModulesData on SanityContentModules {
    modules {
      ...ContentModules
      ...ScrollyContentModule
      ... on SanityModuleTwoColumn {
        _key
        _type
        firstColumn {
          modules {
            ...ContentModules
            ... on SanityModuleTwoColumn {
              _key
              _type
              firstColumn {
                modules {
                  ...ContentModules
                  ... on SanityModuleTwoColumn {
                    _key
                    _type
                    firstColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    secondColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    options {
                      ...ModuleOptions
                    }
                  }
                }
              }
              secondColumn {
                modules {
                  ...ContentModules
                  ... on SanityModuleTwoColumn {
                    _key
                    _type
                    firstColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    secondColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    options {
                      ...ModuleOptions
                    }
                  }
                }
              }
              options {
                ...ModuleOptions
              }
            }
          }
        }
        secondColumn {
          modules {
            ...ContentModules
            ... on SanityModuleTwoColumn {
              _key
              _type
              firstColumn {
                modules {
                  ...ContentModules
                  ... on SanityModuleTwoColumn {
                    _key
                    _type
                    firstColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    secondColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    options {
                      ...ModuleOptions
                    }
                  }
                }
              }
              secondColumn {
                modules {
                  ...ContentModules
                  ... on SanityModuleTwoColumn {
                    _key
                    _type
                    firstColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    secondColumn {
                      modules {
                        ...ContentModules
                        ... on SanityModuleTwoColumn {
                          _key
                          _type
                          firstColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          secondColumn {
                            modules {
                              ...ContentModules
                            }
                          }
                          options {
                            ...ModuleOptions
                          }
                        }
                      }
                    }
                    options {
                      ...ModuleOptions
                    }
                  }
                }
              }
              options {
                ...ModuleOptions
              }
            }
          }
        }
        options {
          ...ModuleOptions
        }
      }
    }
  }
`
