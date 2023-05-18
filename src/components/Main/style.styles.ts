import styled from 'styled-components'
import Imagem from '../assets/images/rodovia.jpg'
import Check from '../assets/images/check.svg'
import Fundo from '../assets/images/fundo-parte4.jpg'
import FundoInicio from '../assets/images/foto-sitewalkinline.png'

// Primeira Sessão começa aqui !

// Chamando ao Elemento Sessão Principal

export const SessaoPrincipal = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${FundoInicio});
  padding: 1rem;
  background-size: cover;
`

// Chamando ao Elemento Sessão Principal Area

export const SessaoPrincipalArea = styled.div`
  display: inline-table;
  max-width: 70%;
  margin-top: 5rem;
  text-align: center;
  background-color: rgb(255 255 255 / 60%);
  border-radius: 8px;
  text-decoration: none;

  @media (max-width: 710px) {
    max-width: 95%;
  }
`

// Chamando ao Elemento Titulo

export const Titulo = styled.div`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 960px) {
    font-size: 1.75rem;
  }
  @media (max-width: 785px) {
    font-size: 1.5prem;
  }
  @media (max-width: 710px) {
    font-size: 1.3rem;
  }
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 1.18rem;
  padding: 10px;
  max-width: 27rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['current-text']};

  @media (max-width: 960px) {
    font-size: 1.15rem;
    padding: 1rem 2rem;
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
// Segunda Sessão começa aqui !

export const SessaoSecundaria = styled.section`
  background-image: url(${Imagem});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  &::before {
    position: absolute;
    width: 100%;
    height: 85%;
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
  gap: 2rem;

  @media (max-width: 960px) {
    gap: 1rem;
  }
`

// Imagem da Logo da Segunda Sessão

export const MainImg = styled.img`
  width: 16rem;
  height: auto;
  overflow: hidden;

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
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2rem;
  float: left;

  @media (max-width: 960px) {
    font-size: 0.93rem;
    padding: 0px 30px;
  }
  @media (max-width: 785px) {
    font-size: 0.85rem;
    margin-bottom: 0rem;
    padding: 0px 30px;
  }
`

// Terceira Sessão começa aqui !

// Chamando ao Elemento Sessão Terceira

export const SessaoTerceira = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`

// Chamando ao Elemento Titulo 3

export const Titulo3 = styled.h1`
  display: flex;
  font-size: 40px;
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

// Chamando ao Elemento Lista

export const TextoLista = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`

// Chamando a imagem da lista

export const ImagemRastreio = styled.img`
  width: 28rem;

  @media (max-width: 960px) {
    width: 24rem;
  }
  @media (max-width: 785px) {
    width: 20rem;
  }
  @media (max-width: 500px) {
    width: 15rem;
  }
`

// Chamando ao Elemento Listas

export const Listas = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  width: 100%;
  display: block;
`

// Chamando ao Titulo da Lista

export const Titulo4 = styled.h1`
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

// Quarta Sessão começa aqui !

export const SessaoQuarta = styled.section`
  display: flex;
  justify-content: center;
  background: url(${Fundo});
  background-size: cover;
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
  font-size: 1.18rem;
  text-align: center;
  padding: 35px;

  @media (max-width: 960px) {
    font-size: 0.93rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 785px) {
    font-size: 0.62rem;
    padding: 1rem 2rem;
  }
  @media (max-width: 710px) {
    font-size: 0.5rem;
    padding: 1rem 2rem;
  }
`
export const ImagemPlataforma = styled.img`
  width: 38rem;

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

// Quinta Sessão começa aqui !

export const SessaoQuinta = styled.section`
  background: url(${Fundo});
  background-size: cover;
  padding: 2rem;
  height: 1005;
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

// Sexta Sessão começa aqui !

export const SessaoSexta = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubSessaoSexta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`
// Setima Sessão começa aqui !

export const SessaoSetima = styled.section`
  padding: 2rem;
  background: url(${Fundo});
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
  @media (max-width: 785px) {
    max-width: 20.5rem;
    font-size: 0.5rem;
  }
  @media (max-width: 710px) {
    max-width: 20rem;
    font-size: 0.5rem;
  }
`

export const Contatos = styled.div``

export const TelefoneWpp = styled.p`
  display: flex;
  font-size: 1.5rem;
  margin-left: 1rem;
  gap: 7px;

  @media (max-width: 960px) {
    font-size: 1rem;
    margin-left: 1rem;
  }
  @media (max-width: 785px) {
    font-size: 0.5rem;
    margin-left: 1rem;
  }
  @media (max-width: 710px) {
    font-size: 0.25rem;
    margin-left: 1rem;
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
  @media (max-width: 785px) {
    font-size: 0.5rem;
    margin-left: 1rem;
  }
  @media (max-width: 710px) {
    font-size: 0.25rem;
    margin-left: 1rem;
  }
`
