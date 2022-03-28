/* eslint-disable react/display-name */
import React, { FC } from 'react'
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

const modulesMap = {
  moduleRichText: (props: SanityModuleRichText) => <RichText {...props} />,
  moduleImage: (props: SanityModuleImage) => <ImageModule {...props} />,
  moduleVideoEmbed: (props: VideoEmbedModuleProps) => <VideoEmbedModule {...props} />,
  moduleSpacer: (props: SanityModuleSpacer) => <SpacerModule {...props} />,
  moduleTwoColumn: (props: SanityModuleTwoColumn) => <TwoColModule {...props} />,
  moduleMarquee: (props: SanityModuleMarquee) => <MarqueeModule {...props} />,
  moduleHero: (props: SanityModuleHero) => <HeroModule {...props} />,
  moduleRelationalGrid: (props: ModuleRelationalGrid) => <RelationalGridModule {...props} />,
  moduleScrollySection: (props: SanityModuleScrollySection) => <ScrollySectionModule {...props} />,
  fragment: <div />
}

const ModuleLoop: FC<SanityContentModules> = ({ modules, ...props }) => (
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

export default ModuleLoop

export const query = graphql`
  fragment ContentModules on SanityModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleRelationalGridOrModuleRichTextOrModuleScrollySectionOrModuleSpacerOrModuleTwoColumnOrModuleVideoEmbed {
    ... on SanityModuleRichText {
      _key
      _type
      ...moduleRichTextData
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
  }

  fragment ScrollyContentModule on SanityModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleRelationalGridOrModuleRichTextOrModuleScrollySectionOrModuleSpacerOrModuleTwoColumnOrModuleVideoEmbed {
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
