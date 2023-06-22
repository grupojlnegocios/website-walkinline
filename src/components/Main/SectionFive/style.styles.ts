import styled from 'styled-components'

import Fundo from '../../assets/images/fundo-parte4.jpg'

interface VisibleProps {
  visible: boolean
}

export const SessaoQuinta = styled.section`
  background: url(${Fundo});
  background-size: cover;
  padding: 2rem;
  display: flex;
  justify-content: center;
`
export const SubSessaoQuinta = styled.div<VisibleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  gap: 2rem;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
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
export const Paragrafo = styled.p<VisibleProps>`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  text-align: center;
  float: left;
  padding: 0px 175px;
  position: relative;
  right: ${(props) => (props.visible === true ? '0%' : '98%')};
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  transition: right 0.5s ease, opacity 0.5s ease;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 0px 10px;
  }
`
