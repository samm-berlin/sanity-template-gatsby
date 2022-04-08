import React, { FC, useState } from 'react'
import styled from 'styled-components'
import theme from '@/styles/theme'
import Box from '@/atoms/Box'
import Input from '@/atoms/Input'
import Text from '@/atoms/Text'
import XButton from '@/assets/icons/X.svg'
import textVariants from '@/styles/textVariants'
import TagList from '@/components/TagList'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, connectSearchBox, connectHits } from 'react-instantsearch-dom'
import ListItemCard from '@/components/ListItemCard.tsx'

const searchClient = algoliasearch('71VEX14UR3', 'e5ba4d816b7b3195f7f63548de4c7b12')

const IconBox = styled(Box)`
  background-image: url(${XButton});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`

const iconBoxSize = [
  theme.fontSizes[textVariants.head.fontSize[0]],
  theme.fontSizes[textVariants.head.fontSize[1]]
]

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <Box borderBottom="1px solid black" pb="1" display="inline-flex">
    <form noValidate action="" role="search">
      <Input
        variant="head"
        width="100%"
        placeholder="for anything"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </form>
    <IconBox
      width={iconBoxSize}
      height={iconBoxSize}
      cursor="pointer"
      alignSelf="center"
      onClick={() => refine('')}
    />
    {isSearchStalled ? 'My search is stalled' : ''}
  </Box>
)

const CustomSearchBox = connectSearchBox(SearchBox)

const Hits = ({ hits }) => {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {hits.map((hit) => (
        <Box width="calc(100% / 3)" key={hit._key}>
          <ListItemCard {...hit} />
        </Box>
      ))}
    </Box>
  )
}

const CustomHits = connectHits(Hits)

interface SearchProps {}

const SearchContainer: FC<SearchProps> = (props) => {
  return (
    <Box py="12rem" px="2">
      <InstantSearch indexName="samm-boiler-index" searchClient={searchClient}>
        <Text component="h1" variant="head">
          Search
        </Text>
        <CustomSearchBox reset={() => <></>} />
        <TagList />
        <CustomHits />
      </InstantSearch>
    </Box>
  )
}

export default SearchContainer
