import styled from 'styled-components'
import FundoImg from '../../components/assets/images/fundo-parte4.jpg'

export const CampoPrincipal = styled.section`
  background: url(${FundoImg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`

export const Img = styled.img`
  width: 10rem;
  height: auto;
`

export const CampoTitulo = styled.div`
  width: 100vw;
  padding: 1rem 2rem 3rem 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const Titulo = styled.h1`
  font-size: 3rem;
  color: #1d3557;
  text-decoration: underline;
  font-family: 'Roboto', sans-serif;
`

export const CampoTexto = styled.div`
  display: flex;
  gap: 0.4rem;
  flex-direction: column;
  padding: 2rem;
  align-items: flex-start;
  width: 95vw;
`

export const Paragrafo = styled.p`
  font-size: 1rem;
  padding: 1rem;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
`
export const ParagrafoDois = styled.p`
  font-size: 1rem;
  padding: 0.3rem 1rem;
  font-family: 'Roboto', sans-serif;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
`
export const ParagrafoP = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1rem;
  text-align: justify;
  font-family: 'Roboto', sans-serif;
`
