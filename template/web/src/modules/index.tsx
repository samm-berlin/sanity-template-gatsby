/* eslint-disable react/display-name */
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import {
  SanityContentModules,
  SanityModuleImage,
  SanityModuleRichText,
  SanityModuleSpacer,
  SanityModuleTwoColumn,
} from 'web/types/graphql-types'
import Box from '@/atoms/Box'
import ImageModule from '@/modules/Image'
import RichText from '@/modules/RichText'
import VideoEmbedModule, { VideoEmbedModuleProps } from '@/modules/VideoEmbed'
import ModuleContainer from '../containers/ModuleContainer'
import SpacerModule from './Spacer'
import TwoColModule from './TwoColumns'

// missing: spacer and twocolumn

const modulesMap = {
  moduleRichText: (props: SanityModuleRichText) => <RichText {...props} />,
  moduleImage: (props: SanityModuleImage) => <ImageModule {...props} />,
  moduleVideoEmbed: (props: VideoEmbedModuleProps) => <VideoEmbedModule {...props} />,
  moduleSpacer: (props: SanityModuleSpacer) => <SpacerModule {...props} />,
  moduleTwoColumn: (props: SanityModuleTwoColumn) => <TwoColModule {...props} />,
  fragment: <div />
}

const ModuleLoop: FC<SanityContentModules> = ({ modules, ...props }) => (
  <Box height="100%" {...props}>
    {modules?.map(module => {
      if (module?._type && !module?.options?.activation?.hidden) {
        return <ModuleContainer options={module.options}>
          {modulesMap[module?._type]({ key: module?._key, ...module })}
        </ModuleContainer>
      } else return <div />
    })}
  </Box>
)

export default ModuleLoop

export const query = graphql`
  fragment ContentModules on SanityModuleHeroOrModuleImageOrModuleListingOrModuleMarqueeOrModuleRichTextOrModuleSpacerOrModuleTwoColumnOrModuleVideoEmbed
  {
    ... on SanityModuleRichText {
      _key
      _type
      ...moduleRichTextData
      options { ...ModuleOptions }
    }
    ... on SanityModuleImage {
      _key
      _type  
      ...moduleImageData
      options { ...ModuleOptions }
    }
    ... on SanityModuleVideoEmbed {
      _key
      _type
      ...moduleVideoEmbedData
      options { ...ModuleOptions }
    }
    ... on SanityModuleSpacer {
      _key
      _type
      ...moduleSpacerData
      options { ...ModuleOptions }
    }
  }

  fragment contentModulesData on SanityContentModules {
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
                          options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
                        }
                      }
                    }
                    options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
                        }
                      }
                    }
                    options { ...ModuleOptions }
                  }
                }
              }
              options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
                        }
                      }
                    }
                    options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
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
                          options { ...ModuleOptions }
                        }
                      }
                    }
                    options { ...ModuleOptions }
                  }
                }
              }
              options { ...ModuleOptions }
            }
          }
        }
        options { ...ModuleOptions }
      }
    }
  }
`