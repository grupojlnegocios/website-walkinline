import styled from 'styled-components'
import Check from '../../assets/images/check.svg'

interface VisibleProps {
  visible: boolean
  visibleMobile?: boolean
}

export const SessaoTerceira = styled.section<VisibleProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;
`

// Chamando ao Elemento Titulo 3

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

export const Titulo2 = styled.h1`
  display: flex;
  font-size: 2rem;
  color: ${(props) => props.theme['current-title']};
  font-weight: 400;
  margin-bottom: 1rem;

  @media (max-width: 960px) {
    font-size: 1.5rem;
    justify-content: center;
    margin-top: 1rem;
  }
`

// Chamando ao Elemento Lista

export const TextoLista = styled.div<VisibleProps>`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.visible === true ? '1.5rem' : '20rem')};
  transition: gap 0.5s ease;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

// Chamando a imagem da lista

export const ImagemRastreio = styled.img<VisibleProps>`
  width: 28rem;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 960px) {
    width: 24rem;
    position: relative;
    right: ${(props) => (props.visibleMobile === true ? '0' : '50%')};
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease, visibility 0.5s ease, right 0.5s ease;
  }
  @media (max-width: 785px) {
    width: 20rem;
  }
  @media (max-width: 500px) {
    width: 15rem;
  }
`

// Chamando ao Elemento Listas

export const Listas = styled.ul<VisibleProps>`
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 100%;
  display: block;
  opacity: ${(props) => (props.visible === true ? '1' : '0')};
  visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease, visibility 0.5s ease;

  @media (max-width: 960px) {
    opacity: ${(props) => (props.visibleMobile === true ? '1' : '0')};
    visibility: ${(props) =>
      props.visibleMobile === true ? 'visible' : 'hidden'};
    transition: opacity 0.5s ease, visibility 0.5s ease;
  }
`

// Chamando ao Elementos da Lista

export const ListaV = styled.ul`
  background: url(${Check});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 1.25rem;
  padding-left: 2rem;
  font-size: 1.18rem;
  font-weight: normal;
  margin: 5px 0px;

  @media (max-width: 960px) {
    font-size: 0.93rem;
    background-size: 1rem;
    margin: 6px 15px;
  }
`
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
