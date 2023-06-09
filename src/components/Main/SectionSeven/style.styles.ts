import styled from 'styled-components'

import Fundo from '../../assets/images/fundo-parte4.jpg'

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
export const Titulo = styled.h1`
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

export const ParagrafoPrincipal = styled.p`
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

export const Paragrafo = styled.p`
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
