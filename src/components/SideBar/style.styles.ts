import styled from 'styled-components'
import { IoCloseSharp } from 'react-icons/io5'

export const BarraLateralArea = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['blur-background-sidebar']};
  z-index: 5;
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.5s ease;
`

export const Listas = styled.ul`
  width: 100%;
  /* @media screen and (min-width: 950px) {
    display: none;
    background-color: ${(props) => props.theme['button-background']};
    background-color: blue;
  } */
`

export const ListaItens = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  list-style: none;
  padding: 1rem;
  border: 1px solid transparent;
`

export const ListaLink = styled.a`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  font-size: 15px;
  padding: 1rem 0;
  color: #9d9d9d;

  &:hover {
    color: white;
    padding: 1rem 0;
    transition: color 0.5s ease;
  }
`

export const Button = styled.a`
  display: flex;
  align-items: center;
  text-align: center;
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

export const CloseSharp = styled(IoCloseSharp)`
  display: flex;
  color: white;
  width: auto;
  height: 2rem;
  margin-left: 12rem;

  &:hover {
    cursor: pointer;
    color: #bb1b1b;
    transition: color 0.5s ease;
  }
`
