import styled from 'styled-components'

import Fundo from '../../assets/images/fundo-parte4.jpg'

interface VisibleProps {
  visible: boolean
  visibleMobile?: boolean
}

export const SessaoQuarta = styled.section<VisibleProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url(${Fundo});
  background-size: cover;
  align-items: center;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`

export const SubSessaoQuarta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  width: 75%;
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
  padding: 35px;
  position: relative;
  right: ${(props) => (props.visible === true ? '0%' : '98%')};
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  transition: right 0.5s ease, opacity 0.5s ease;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 1rem 0rem;
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    transition: right 0.5s ease, opacity 0.5s ease;
  }
`

export const ImagemPlataforma = styled.img<VisibleProps>`
  width: 40rem;
  position: relative;
  left: ${(props) => (props.visible === true ? '0' : '20%')};
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  transition: left 0.5s ease, opacity 0.5s ease;

  @media (max-width: 960px) {
    width: 32rem;
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    left: ${(props) => (props.visibleMobile === true ? '0' : '-30%')};
    transition: left 0.5s ease, opacity 0.5s ease;
  }
  @media (max-width: 785px) {
    width: 23rem;
  }
`

// Nova section do Software da Quarta Section

export const SegundaSessaoQuarta = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  flex-direction: column;
`

// imagem do carro andando pelos cards

export const FundoSection = styled.img<VisibleProps>`
  margin: auto;
  width: 62.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 1150px) {
    width: 59rem;
  }
  @media (max-width: 1050px) {
    width: 50rem;
  }
  @media (max-width: 770px) {
    display: none;
  }
`
export const FundoCarMobile = styled.img<VisibleProps>`
  display: none;

  @media (max-width: 770px) {
    display: flex;
    justify-content: center;
    width: 19rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    opacity: ${(props) => (props.visible === true ? '1' : '0')};
    visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
`

// Cards do que tem na plataforma

export const CardGrid = styled.div<VisibleProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.visible === true ? '33% 33% 33%' : '0% 0% 0%'};
  gap: ${(props) => (props.visible === true ? '6rem 3rem' : '0')};
  justify-items: center;
  justify-content: center;
  z-index: 5;
  position: absolute;
  transition: grid-template-columns 0.8s ease, gap 0.8s ease;

  @media (max-width: 1150px) {
    gap: 4rem 1rem;
  }

  @media (max-width: 770px) {
    display: none;
  }
`
