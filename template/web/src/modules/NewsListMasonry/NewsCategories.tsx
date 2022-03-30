import React, { FC, useState } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { NewsCategory } from './index'

const StyledText = styled(Text)`
  cursor: pointer;
  &.active {
    color: black;
  }
`

interface NewsCategoriesProps {
  categories?: NewsCategory[]
  filteredCategory?: string
  setFilteredCategory: React.Dispatch<React.SetStateAction<string | undefined>>
}

const NewsCategories: FC<NewsCategoriesProps> = (props) => {
  const { categories, filteredCategory, setFilteredCategory } = props

  return (
    <Box display="flex" px="2">
      <Box onClick={() => setFilteredCategory(undefined)}>
        <StyledText>Filter by category</StyledText>
      </Box>
      {categories?.map((cat, index) => (
        <Box
          key={cat._key}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setFilteredCategory(cat.title)}
        >
          <StyledText
            color="grey"
            className={filteredCategory === cat.title ? 'active' : ''}
            px="2"
          >
            {cat.title}
          </StyledText>
        </Box>
      ))}
    </Box>
  )
}

export default NewsCategories
