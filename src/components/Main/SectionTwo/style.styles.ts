import styled from 'styled-components'

import Imagem from '../../assets/images/foto-section2.png'

interface VisibleSeProps {
  visible: boolean
}

export const SessaoSecundaria = styled.section`
  background-image: url(${Imagem});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &::before {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: #ffffff36;
    opacity: 0.6;
    content: '';
  }

  @media (max-width: 426px) {
    background-position: center;
  }
  @media (max-width: 376px) {
    background-position: center;
  }
  @media (max-width: 325px) {
    background-position: center;
  }
`

// Chamando ao Elemento Sessão Secundaria

export const SessaoSecundariaArea = styled.div<VisibleSeProps>`
  display: inline-table;
  max-width: 77%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  text-align: center;
  background-color: #000000ab;
  border-radius: 8px;
  text-decoration: none;
  z-index: 1;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.8s ease, visibility 0.8s ease, display 0.8s ease;

  @media (max-width: 710px) {
    max-width: 90%;
  }
`
// Imagem da Logo da Segunda Sessão

export const MainImg = styled.img<VisibleSeProps>`
  width: 16rem;
  margin-top: 1rem;
  height: auto;
  overflow: hidden;
  margin-left: ${(props) => (props.visible === true ? '0' : '25rem')};
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.8s ease, visibility 0.8s ease, margin-left 0.8s ease;

  @media (max-width: 960px) {
    width: 13rem;
    margin-bottom: 1rem;
    margin-left: ${(props) => (props.visible === true ? '0' : '10rem')};
  }
  @media (max-width: 785px) {
    width: 10rem;
    margin-bottom: 1rem;
  }
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  text-align: center;
  float: left;
  padding: 0px 55px;
  margin-top: 1.5rem;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
`

export const ParagrafoSecundario = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  margin-top: 14rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0px 55px;
  margin-bottom: 2rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
  }
`
