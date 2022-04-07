import React, { FC } from 'react'
import styled from 'styled-components'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { NewsCategory } from './index'
import theme from '@/styles/theme'

const StyledText = styled(Text)`
  cursor: pointer;
  &.active {
    color: ${theme.colors.black};
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
    <Box display="flex" px="2" flexWrap="wrap" justifyContent={['space-evenly', 'unset']}>
      <Box display={['none', 'unset']} onClick={() => setFilteredCategory(undefined)}>
        <StyledText>Filter by category</StyledText>
      </Box>
      {categories?.map((cat) => (
        <Box
          key={cat._key}
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() =>
            filteredCategory === cat.title
              ? setFilteredCategory(undefined)
              : setFilteredCategory(cat.title)
          }
          pb={[1, 0]}
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
