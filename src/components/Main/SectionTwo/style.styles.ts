import styled from 'styled-components'

import Imagem from '../../assets/images/rodovia.jpg'

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
    background: ${(props) => props.theme['blur-background']};
    opacity: 0.6;
    content: '';
  }
`

// Chamando ao Elemento Sessão Secundaria

export const SessaoSecundariaArea = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  max-height: fit-content;
  margin-block: auto;
  gap: 2rem;
  @media (max-width: 770px) {
    gap: 2rem;
  }
`
// Imagem da Logo da Segunda Sessão

export const MainImg = styled.img`
  width: 16rem;
  margin-top: 1rem;
  height: auto;
  overflow: hidden;
  margin-bottom: 3rem;

  @media (max-width: 960px) {
    width: 13rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 785px) {
    width: 10rem;
    margin-bottom: 1rem;
  }
`

// Chamando ao Elemento Paragrafo

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

export const ParagrafoSecundario2 = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  text-align: center;
  float: left;
  padding: 0px 175px;

  a {
    text-decoration: none;
    color: black;
  }

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
  }
`
