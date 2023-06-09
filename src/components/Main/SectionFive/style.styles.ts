import styled from 'styled-components'

import Fundo from '../../assets/images/fundo-parte4.jpg'

export const SessaoQuinta = styled.section`
  background: url(${Fundo});
  background-size: cover;
  padding: 2rem;
  display: flex;
  justify-content: center;
`
export const SubSessaoQuinta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  gap: 2rem;
`
export const RodapeTabela = styled.p`
  font-size: 0.75rem;

  @media (max-width: 960px) {
    font-size: 0.7rem;
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
export const Paragrafo = styled.p`
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
