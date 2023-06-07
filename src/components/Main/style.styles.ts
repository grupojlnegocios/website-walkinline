import styled from 'styled-components'

import Fundo from '../assets/images/fundo-parte4.jpg'

import { IoIosArrowUp } from 'react-icons/io'

interface HeaderProps {
  opacidade: boolean
  cursor: boolean
  subir: boolean
}
// Primeira Sessão começa aqui !

// Chamando ao Elemento Sessão Principal
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
export const Titulo3 = styled.h1`
  display: flex;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => props.theme['current-title']};
  border-bottom: 2.5px solid ${(props) => props.theme['current-title']};
  margin-bottom: 1rem;
  margin-top: 1rem;
  @media (max-width: 960px) {
    font-size: 35px;
  }
  @media (max-width: 785px) {
    font-size: 30px;
  }
`
// Segunda Sessão começa aqui !

// Terceira Sessão começa aqui !

// Chamando ao Elemento Sessão Terceira

// Quarta Sessão começa aqui !

// Quinta Sessão começa aqui !

// Sexta Sessão começa aqui !

// Setima Sessão começa aqui !

export const SessaoSetima = styled.section`
  padding: 2rem;
  background: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubSessaoSetima = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (max-width: 710px) {
    gap: 0rem;
    align-items: center;
    justify-content: center;
  }
`
export const ParagrafoContato = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  float: left;
  padding: 0px 175px;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 15px;
  }
`

export const SessaoFormulario = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 960px) {
    align-items: center;
    flex-direction: column;
  }
`

export const FormularioArea = styled.div``

export const SessaoFormularioInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 960px) {
    gap: 0rem;
  }
`

export const ParagrafoSetimaSec = styled.p`
  align-items: start;
  padding: 1rem;
  max-width: 21.8rem;
  font-size: 1.12rem;

  @media (max-width: 960px) {
    max-width: 21rem;
    font-size: 1rem;
  }
`

export const Contatos = styled.div``

export const TelefoneWpp = styled.p`
  display: flex;
  font-size: 1.5rem;
  margin-left: 1rem;
  gap: 7px;
  a {
    color: black;
    text-decoration: none;
  }

  @media (max-width: 960px) {
    font-size: 1rem;
    margin-left: 1rem;
    margin-bottom: 10px;
  }
`

export const EmailContato = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 1rem;
  gap: 7px;

  @media (max-width: 960px) {
    font-size: 1rem;
    margin-left: 1rem;
  }
`

export const BotaoUp = styled.button<HeaderProps>`
  z-index: 20;
  border: 0;
  /* display: inline-block; */
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
