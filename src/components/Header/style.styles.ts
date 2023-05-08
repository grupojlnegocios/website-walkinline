import styled from 'styled-components'

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme['blue-300']};
`

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.white};
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 0;
  max-width: 90%;
  margin: auto;
`

export const HeaderImg = styled.img`
  height: 5rem;
  margin-left: 3%;
`
export const Listas = styled.ul`
  margin-right: 10%;
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
  color: ${(props) => props.theme['blue-400']};
  font-family: Sans-serif;
  font-size: 15px;
`

export const Button = styled.button`
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['blue-400']};
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${(props) => props.theme['blue-400']};
    color: ${(props) => props.theme.white};
  }
`
