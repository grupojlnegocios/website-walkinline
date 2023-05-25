import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

interface HeaderProps {
  background: boolean
}

export const HeaderContainer = styled.header<HeaderProps>`
  z-index: 11;
  background-color: ${(props) =>
    props.background === true ? '#1d3557de' : 'transparent'};
  position: fixed !important;
  padding: 1.25rem 0;
  max-width: 100%;
  width: 100%;
  transition: 0.5s ease;
`

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
  line-height: 1.6;
`

export const ListaItens = styled.li`
  @media (max-width: 950px) {
    display: none;
  }
`

export const ListaLink = styled.a`
  text-decoration: none;
  color: #d2d2d2;
  font-family: Sans-serif;
  font-size: 17px;
  line-height: 1.6;
  transition: color 0.5s ease;

  &:hover {
    text-decoration: underline;
    display: block;
    color: white;
  }
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
  display: none;
  width: 40px;
  height: auto;
  color: #cdcdcd;
  cursor: pointer;
  @media (max-width: 950px) {
    display: ${(props) => (props.isVisible === true ? 'none' : 'block')};
  }

  &:hover {
    color: white;
    width: 46px;
    height: auto;
    transition: color 0.4s ease-in;
  }
`
export const BotaoAbrirNavBar = styled.button`
  background-color: transparent;
  border: 0px;
  display: none;

  @media (max-width: 950px) {
    display: flex;
  }
`
