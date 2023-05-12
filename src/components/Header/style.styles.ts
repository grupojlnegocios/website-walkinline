import styled from 'styled-components'

export const HeaderContainer = styled.header`
  z-index: 4;
  background-color: #1d35578f;
  position: fixed !important;
  padding: 1.25rem 0;
  max-width: 100%;
  width: 100%;
`

export const HeaderDiv = styled.div`
  max-width: 90%;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
`

export const HeaderImg = styled.img`
  height: 5rem;
`
export const Listas = styled.ul`
  display: flex;
  width: 100%;
  max-width: 500px;
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

export const Button = styled.button`
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['border-color-button']};
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  color: ${(props) => props.theme['button-text']};

  &:hover {
    background-color: ${(props) => props.theme['button-background']};
    color: ${(props) => props.theme.white};
  }
`
