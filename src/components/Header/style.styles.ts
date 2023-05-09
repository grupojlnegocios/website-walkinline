import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
  max-width: 90%;
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
  color: ${(props) => props.theme['background-nav-links']};
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
