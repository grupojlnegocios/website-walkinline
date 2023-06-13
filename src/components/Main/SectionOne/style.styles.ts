import styled from 'styled-components'
import FundoInicio from '../../assets/images/foto-section.png'

// Parte Principal da Section

export const SessaoPrincipal = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FundoInicio});
  background-size: 100% auto;
  padding: 1rem;
  background-size: cover;
  height: 100vh;

  @media (max-width: 770px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 426px) {
    height: 100vh;
    width: 100%;
  }
  @media (max-width: 376px) {
    height: 110vh;
    width: 100%;
  }
  @media (max-width: 325px) {
    height: 130vh;
    width: 100%;
  }
`

// Chamando ao Elemento Sessão Principal Area

export const SessaoPrincipalArea = styled.div`
  display: inline-table;
  max-width: 78%;
  margin-top: 6.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background-color: rgb(255 255 255 / 70%);
  border-radius: 8px;
  text-decoration: none;

  @media (max-width: 710px) {
    max-width: 100%;
  }
`

// Chamando ao Elemento Titulo

export const Titulo = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  padding: 5px 35px;

  @media (max-width: 960px) {
    font-size: 1.75rem;
    padding: 2px 17px;
  }
  @media (max-width: 785px) {
    font-size: 1.5prem;
    padding: 0px 10px;
  }
  @media (max-width: 710px) {
    font-size: 1.3rem;
  }
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 1.5rem;
  padding: 7px;
  max-width: 41rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['current-text']};

  @media (max-width: 960px) {
    font-size: 1.05rem;
    padding: 0rem 2rem;
  }
`

// Chamando ao Elemento Titulo parte 1

export const Parte1 = styled.h1`
  font-weight: 100;
  color: ${(props) => props.theme['current-title']};
`

// Chamando ao Elemento Titulo parte 2

export const Parte2 = styled.h1`
  font-weight: 400;
  white-space: pre-wrap;
  color: ${(props) => props.theme['current-title']};
`

// Chamando ao Elemento Botão

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  border-radius: 8px;
  text-decoration: none;
  background-color: ${(props) => props.theme['button-background']};
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme['border-color-button']};
  padding: 16px 0;
  width: 15rem;
  cursor: pointer;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['button-background']};
    border: 1px solid ${(props) => props.theme['button-background']};
  }

  @media (max-width: 960px) {
    font-size: 1rem;
    padding: 15px 0;
    width: 13rem;
    border-radius: 8px;
  }
  @media (max-width: 785px) {
    font-size: 1rem;
    padding: 13px 0;
    width: 11rem;
    border-radius: 6px;
  }
`
