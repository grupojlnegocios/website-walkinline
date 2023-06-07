import styled from 'styled-components'

import Fundo from '../../assets/images/fundo-parte4.jpg'

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

export const SessaoQuarta = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url(${Fundo});
  background-size: cover;
  align-items: center;
`

export const SubSessaoQuarta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  width: 75%;
`

// Paragrafo da Quarta Section

export const Paragrafo4 = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 1.5rem;
  text-align: center;
  padding: 35px;

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 1rem 0rem;
  }
`
export const ImagemPlataforma = styled.img`
  width: 40rem;

  @media (max-width: 960px) {
    width: 32rem;
  }
  @media (max-width: 785px) {
    width: 23rem;
  }
  @media (max-width: 365px) {
    width: 19rem;
  }
  @media (max-width: 345px) {
    width: 15rem;
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

export const FundoSection = styled.img`
  margin: auto;
  width: 62.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;

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
export const FundoCarMobile = styled.img`
  display: none;

  @media (max-width: 770px) {
    display: flex;
    justify-content: center;
    width: 19rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
`

// Cards do que tem na plataforma

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 6rem 3rem;
  justify-items: center;
  justify-content: center;
  z-index: 5;
  position: absolute;

  @media (max-width: 1150px) {
    gap: 4rem 1rem;
  }

  @media (max-width: 770px) {
    display: none;
  }
`
