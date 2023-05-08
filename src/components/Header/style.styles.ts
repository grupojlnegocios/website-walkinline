import styled from 'styled-components'

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme['blue-300']};
`

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['blue-100']};
  display: flex;
  padding: 1.25rem 0;
`

export const HeaderImg = styled.img`
  height: 5rem;
  margin-left: 5%;
  margin-top: -1%;
`
