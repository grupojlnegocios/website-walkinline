import styled from 'styled-components'

import { IoIosArrowUp } from 'react-icons/io'

interface HeaderProps {
  opacidade: boolean
  cursor: boolean
  subir: boolean
}

export const ParagrafoSecundario = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  text-align: center;
  float: left;
  padding: 0px 175px;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
  }
`
export const BotaoUp = styled.button<HeaderProps>`
  z-index: 20;
  border: 0;
  position: fixed;
  bottom: 5rem;
  left: 25px;

  transition: 0.3s ease;
  cursor: ${(props) => (props.cursor === true ? 'pointer' : 'default')};
  opacity: ${(props) => (props.opacidade === true ? '1' : '0')};
  display: ${(props) => (props.subir === true ? 'inline-block' : 'none')};
`
export const BotaoSobe = styled(IoIosArrowUp)`
  display: block;
  position: fixed;
  color: #1d3557;
  border-radius: 50%;
  border: 3px solid white;
  background-color: white;
  transition: 0.9s ease;

  &:hover {
    color: white;
    background-color: #1d3557;
    border: 3px solid #1d3557;
  }
`
