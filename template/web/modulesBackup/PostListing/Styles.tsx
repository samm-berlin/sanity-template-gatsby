import styled from 'styled-components'
import theme from '../../styles/MUItheme'

export const PostAnchor = styled.a`
  display: block;
  width: 100vw;
  text-decoration: none;
  & > div > div:nth-child(even) {
    background-color: ${theme.palette.secondary.main};
    p,
    h6 {
      color: ${theme.palette.background.paper};
    }
  }
`

export const PostTitle = styled.h6`
  color: white;
  font-size: 5.8rem;
  line-height: 6rem;
  margin: 0;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const PostDescription = styled.p`
  color: white;
  font-size: 2.18rem;
  line-height: 2.28rem;
  margin: 0;
  margin-top: 2.18rem;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

export const ColWrapper = styled.div`
  height: 0;
  width: 100%;
  padding-top: 68.75%;
  min-height: 6rem;
  position: relative;
`
export const ColContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

export const PostImage = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
`
