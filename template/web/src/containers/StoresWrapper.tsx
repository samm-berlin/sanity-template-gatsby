import React, { FC, useState, useEffect, isValidElement } from 'react'
import styled from 'styled-components'
import Grid from '@/atoms/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Map from '@/components/Map'
import Layout from '@/containers/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import { SanityStore } from 'web/graphql-types'
import { mapEdgesToNodes, sortNodesByAlphabeticalOrder } from '@/utils/helpers'
import Footer from '@/components/Footer'

const StyledGrid = styled(Grid)`
  min-height: 100vh;
`

const StoresWrapper: FC = ({ children }) => {
  const { allSanityStore } = useStaticQuery(graphql`
    {
      allSanityStore {
        edges {
          node {
            id
            title
            slug {
              current
            }
            meta {
              _key
              _type
              metaTitle
              metaDescription
              robotsIndex
              _rawOgImage
              ogImage {
                asset {
                  url
                }
              }
            }
            tags {
              title
            }
            location {
              alt
              lat
              lng
            }
          }
        }
      }
    }
  `)

  const [allStores] = useState<SanityStore[]>(
    sortNodesByAlphabeticalOrder(mapEdgesToNodes(allSanityStore))
  )
  const [activeStores, setActiveStores] = useState<SanityStore[]>(allStores)
  const [currentStore, setCurrentStore] = useState<SanityStore | null>(null)
  const [focusedStore, setFocusedStore] = useState<SanityStore | null>(null)
  const [activeTags, setActiveTags] = useState<string[]>([])

  const [center, setCenter] = useState({
    lat: 52.52,
    lng: 13.4
  })

  const [zoom, setZoom] = useState(12)

  useEffect(() => {
    filterStoresByTags()
  }, [activeTags])

  const onTagChange = (tag: string) => {
    if (activeTags.includes(tag))
      setActiveTags(activeTags.filter(item => item !== tag))
    else setActiveTags(activeTags => [...activeTags, tag])
    filterStoresByTags()
  }

  const filterStoresByTags = () => {
    if (!activeTags.length) setActiveStores(allStores)
    else {
      setActiveStores(
        allStores.filter(store => {
          return activeTags.some(filter =>
            store?.tags?.map(tag => tag?.title).includes(filter)
          )
        })
      )
    }
  }

  const onCenterChange = (newCenter: any) => {
    if (newCenter === 'origin') {
      {
        setCenter({
          lat: 52.52,
          lng: 13.4
        })
        setZoom(12)
      }
    } else {
      setCenter({ lat: newCenter.lat, lng: newCenter.lng })
      setZoom(15)
    }
  }

  return (
    <Layout displayNone>
      <Container disableGutters maxWidth={false}>
        <Grid container direction="row">
          <Grid item xs={6}>
            <Map
              activeStores={activeStores}
              focusedStore={currentStore ?? focusedStore}
              setFocusedStore={setFocusedStore}
              center={center}
              zoom={zoom}
            ></Map>
          </Grid>
          <Grid item xs={6}>
            <StyledGrid container direction="column" justify="space-between">
              <Grid item>
                <Box pr={14} pb={14}>
                  {React.Children.map(children, child => {
                    if (isValidElement(child)) {
                      return React.cloneElement(child, {
                        activeStores,
                        setCurrentStore,
                        setFocusedStore,
                        activeTags,
                        onTagChange,
                        onCenterChange
                      })
                    }
                    return child
                  })}
                </Box>
              </Grid>

              <Grid item>
                <Footer half />
              </Grid>
            </StyledGrid>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default StoresWrapper
