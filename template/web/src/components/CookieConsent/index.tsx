import React, { FC, useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Box from '@/atoms/Box'
import Text from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { useCookies } from 'react-cookie'
import styled from 'styled-components'
// import CheckBox from "@/atoms/CheckBox"

/*
const cookieCategories = [
  {
    name: "essential",
    label:" Essenziell",
  },
  {
    name: "statistics",
    label: "Statistiken",
  }
]
*/

const StyledBox = styled(Box)`
  ${(p) => (p.cookieProperty ? 'display: none;' : 'display: block;')}
`

const CookieConsent: FC = () => {
  const { data } = useStaticQuery(graphql`
    query {
      data: sanitySiteSettingsCookies {
        id
        title
        description
        cookies {
          _key
          _type
          name
          label
          category
        }
      }
    }
  `)

  const [cookies, setCookie, removeCookie] = useCookies([
    'cookieProperty',
    ...data.cookies.map((c) => c.name)
  ])
  // const [checkedCookies, setCheckedCookies] = useState<string[]>([])

  const [cookieProperty, setCookieProperty] = useState('unset')

  useEffect(() => {
    setCookieProperty(cookies.cookieProperty)
  }, [cookies])

  const acceptEssential = () => {
    setCookie('cookieProperty', 'essential', { expires: getExpirationDate() })
  }

  // const acceptSelected = () => {}

  const acceptAll = () => {
    setCookie('cookieProperty', 'all', { expires: getExpirationDate() })
    data.cookies?.map((cookie) => {
      setCookie(cookie.name, true, { expires: getExpirationDate() })
    })
  }

  const getExpirationDate = () => {
    const date = new Date()
    const expirationTime = 30 * 24 * 60 * 60 * 1000
    const dateTimeNow = date.getTime()
    date.setTime(dateTimeNow + expirationTime)
    return date
  }

  return (
    <StyledBox cookieProperty={cookieProperty}>
      <Box
        display="flex"
        position="fixed"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        zIndex={80}
        bg="rgba(0,0,0,0.9)"
      >
        <Box
          p="3rem"
          width="68rem"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          border="2px solid white"
          bg="grey"
        >
          <Text variant="head" color="white">
            {data.title}
          </Text>
          <Text mb="1em" color="white">
            {data.description}
          </Text>
          <Box className="contentButton" display="flex" pt="2rem">
            <Box px="1rem">
              <Button width="100%" variant="link" onClick={acceptAll}>
                accept all
              </Button>
            </Box>
            <Box ml="4rem">
              <Button width="100%" variant="link" onClick={acceptEssential}>
                accept essential
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </StyledBox>
  )
}

export default CookieConsent

/**
 <Box mb="1em">
    {cookieCategories.map(c => (
      <CheckBox
        name={c.name}
        label={c.label}
        checked={checkedCookies?.includes(c.name)}
        alwaysChecked={c.name === 'essential'}
        onChange={(label, checked) => {
          if (checked) setCheckedCookies(checkedCookies.filter((k) => !k.includes(c.name)))
          else setCheckedCookies([label, ...checkedCookies])
          console.log(checkedCookies)
        }}
      />
    ))}
  </Box>
 */
