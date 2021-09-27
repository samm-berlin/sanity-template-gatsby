import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { rem } from '@/styles/utils'
import { Box, Grid, InputBase, ButtonBase, Typography } from '@material-ui/core'
import Instagram from '@/assets/icons/Instagram.svg'
import InstagramHover from '@/assets/icons/InstagramHover.svg'
import Abonnement from '@/assets/icons/Abonnement.svg'
import AbonnementHover from '@/assets/icons/AbonnementHover.svg'
import Guide from '@/assets/icons/Guide.svg'
import GuideHover from '@/assets/icons/GuideHover.svg'
import Market from '@/assets/icons/Market.svg'
import MarketHover from '@/assets/icons/MarketHover.svg'
import { theme } from '@/styles/theme'

const FooterWrapper = styled(Box)`
  width: 100%;
  background-color: ${theme.background} !important;
`

const FooterGrid = styled(Grid)`
  ${p =>
    p.displayNone &&
    `
    display: none;
  `}
  max-width: 1440px;
  margin: 0 auto;
  background-color: ${theme.background} !important;
  padding-bottom: ${rem(11)};
`

const Button = styled(ButtonBase)`
  height: ${rem(36)};
  width: ${rem(79)};
  background: black;
  padding: ${rem(11)};
  border-radius: ${rem(22)};
  vertical-align: unset;
  margin-left: ${rem(22)};
  color: white;
`

const GridWithMargin = styled(Grid)`
  margin: auto 0;
`

const StyledTextField = styled(InputBase)`
  width calc(100% - ${rem(101)});
  height: ${rem(36)};
  input {
    color: black;
    background: white;
    padding: ${rem(6.125)};
    padding-left: ${rem(17)};
    border-radius: ${rem(22)};
    font-size: 1.5rem;
    font-weight: 500;
  }
  .MuiInputBase-input::placeholder {
    opacity: 1;
    font-size: 1.5rem;
    font-weight: 500;
    height: ${rem(36)};
    transform:translateX(5px);
  }
`

const FullDiv = styled.div`
  width: 100%;
`

const IconBox = styled(Box)`
  width: ${rem(180)};
  height: ${rem(180)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`

type FooterProps = {
  half?: boolean
  displayNone?: boolean
}

const Footer: FC<FooterProps> = props => {
  const { half, displayNone } = props

  const [abonnementHover, setAbonnementHover] = useState(false)
  const [instagramHover, setInstagramHover] = useState(false)
  const [marketHover, setMarketHover] = useState(false)
  const [guideHover, setGuideHover] = useState(false)

  return (
    <FooterWrapper>
      <FooterGrid
        container
        justify="center"
        direction="row"
        displayNone={displayNone}
      >
        <GridWithMargin
          item
          xs={half ? 12 : 6}
          alignItems="center"
          alignContent="center"
        >
          <Box pl={half ? 6 : 3} pr={half ? 7 : 3}>
            <div id="mc_embed_signup">
              <form
                action="https://nichtneu.us5.list-manage.com/subscribe/post?u=e9c159217d88dfee33912c0e5&amp;id=5aa32fd8bb"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate
              >
                <div id="mc_embed_signup_scroll">
                  <FullDiv className="mc-field-group">
                    <StyledTextField
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      placeholder="DEINE E-MAIL ADRESSE..."
                    ></StyledTextField>
                    <Button type="submit">
                      <Typography variant="body2">GO</Typography>
                    </Button>
                  </FullDiv>
                  <div id="mce-responses" className="clear">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: 'none' }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: 'none' }}
                    ></div>
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_e9c159217d88dfee33912c0e5_5aa32fd8bb"
                      tabIndex={-1}
                      value=""
                    ></input>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </GridWithMargin>
        <Grid item xs={half ? 12 : 6}>
          <Box pl={half ? 6 : 0} pr={half ? 14 : 0}>
            <Grid container direction="row">
              <Grid item xs={6} md={3}>
                <IconBox
                  onMouseEnter={() => {
                    setAbonnementHover(true)
                  }}
                  onMouseLeave={() => {
                    setAbonnementHover(false)
                  }}
                >
                  {abonnementHover ? <AbonnementHover /> : <Abonnement />}
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    component="h5"
                  >
                    Abonniere uns
                  </Typography>
                </IconBox>
              </Grid>
              <Grid item xs={6} lg={3}>
                <IconBox
                  onMouseEnter={() => {
                    setInstagramHover(true)
                  }}
                  onMouseLeave={() => {
                    setInstagramHover(false)
                  }}
                >
                  {instagramHover ? <InstagramHover /> : <Instagram />}
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    component="h5"
                  >
                    Instagram
                  </Typography>
                </IconBox>
              </Grid>

              <Grid item xs={6} lg={3}>
                <IconBox
                  onMouseEnter={() => {
                    setMarketHover(true)
                  }}
                  onMouseLeave={() => {
                    setMarketHover(false)
                  }}
                >
                  {marketHover ? <MarketHover /> : <Market />}
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    component="h5"
                  >
                    Markt
                  </Typography>
                </IconBox>
              </Grid>
              <Grid item xs={6} lg={3}>
                <IconBox
                  onMouseEnter={() => {
                    setGuideHover(true)
                  }}
                  onMouseLeave={() => {
                    setGuideHover(false)
                  }}
                >
                  {guideHover ? <GuideHover /> : <Guide />}
                  <Typography
                    color="textSecondary"
                    variant="h6"
                    component="h5"
                  >
                    Unser Guide
                  </Typography>
                </IconBox>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </FooterGrid>
    </FooterWrapper>
  )
}

export default Footer
