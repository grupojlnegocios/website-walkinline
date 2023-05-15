import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
interface HeaderProps {
  background: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  z-index: 4;
  background-color: ${(props) =>
    props.background === true ? '#1d3557de' : 'transparent'};
  position: fixed !important;
  padding: 1.25rem 0;
  max-width: 100%;
  width: 100%;
  transition: 0.5s ease;
  /* box-shadow: 0px 2px 11px 1px black; */
`

// export const paddingOnTop = styled.header<HeaderProps>`
//   padding: ${(props) =>
//     props.background === true ? 1rem };
//

export const HeaderDiv = styled.div`
  max-width: 90%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  height: 3rem;
`

export const HeaderImg = styled.img`
  height: 4rem;
  margin-top: -0.5rem;
`
export const Listas = styled.ul`
  display: flex;
  width: 100%;
  max-width: 42rem;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

export const ListaItens = styled.li``

export const ListaLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.white};
  font-family: Sans-serif;
  font-size: 15px;
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-decoration: none;
  font-size: 15px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme['button-text']};
  border: 1px solid ${(props) => props.theme['border-color-button']};
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme['button-background']};
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
  }
`
export const HamburgerMenuIcon = styled(GiHamburgerMenu)`
  width: 40px;
  height: auto;
  color: white;
  display: none;
  @media screen and (max-width: 950px) {
    display: block;
    ${ListaItens} :after {
      display: none;
    }
  }
`

export const CloseSharp = styled(IoCloseSharp)`
  color: white;
  display: none;
`
