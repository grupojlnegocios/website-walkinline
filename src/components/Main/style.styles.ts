import styled from 'styled-components'
import Imagem from '../assets/images/rodovia.jpg'
import Check from '../assets/images/check.svg'

// Chamando ao Elemento Titulo

export const Titulo = styled.div`
  font-size: 40px;
  text-align: center;
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  display: inline-block;
  text-align: justify;
  font-size: 20px;
  padding: 35px;
  max-width: 455px;
  color: ${(props) => props.theme['current-text']};
`

// Chamando ao Elemento Sessão Principal

export const SessaoPrincipal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

// Chamando ao Elemento Sessão Principal Area

export const SessaoPrincipalArea = styled.section`
  position: relative;
  max-width: 50%;
  text-align: center;
`

// Chamando ao Elemento Titulo parte 1

export const Parte1 = styled.h1`
  font-weight: 100;
  color: ${(props) => props.theme['first-part-principal-title']};
`

// Chamando ao Elemento Titulo parte 2

export const Parte2 = styled.h1`
  font-weight: 400;
  white-space: pre-wrap;
  color: ${(props) => props.theme['current-title']};
`

// Chamando ao Elemento Botão

export const Button = styled.button`
  background-color: ${(props) => props.theme['button-background']};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['border-color-button']};
  padding: 15px 25px;
  cursor: pointer;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['button-background']};
    border: 1px solid ${(props) => props.theme['button-background']};
  }
`
// Segunda Sessão começa aqui !

export const SessaoSecundaria = styled.section`
  background-image: url(${Imagem});
  justify-content: space-between;
  margin-top: 2%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  &::before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 85%;
    background: #fff;
    opacity: 0.6;
    content: '';
  }
`

// Chamando ao Elemento Sessão Secundaria

export const SessaoSecundariaArea = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -100px;
  width: 60%;
  gap: 2rem;
`

// Chamando ao Elemento Imagem

export const MainImg = styled.img`
  width: 250px;
  height: auto;
`

// Chamando ao Elemento Paragrafo

export const ParagrafoSecundario = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 20px;
  text-align: center;
`
// Chamando ao Elemento Sessão Terceira

export const SessaoTerceira = styled.section`
  justify-content: space-between;
  margin-top: 2%;
  background-size: cover;
  flex-direction: column;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Chamando ao Elemento Titulo 3

export const Titulo3 = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: ${(props) => props.theme['current-title']};
  border-bottom: 2.5px solid ${(props) => props.theme['current-title']};
`

// Chamando ao Elemento Lista

export const TextoLista = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  justify-content: space-between;
  margin: 0px;
  padding: 0px;
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  padding-left: 575px;
  font-size: 18px;
  font-weight: normal;
  color: #292d30;
  margin: 5px 0px;
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
  color: ${(props) => props.theme['current-title']};
  margin-bottom: 2rem;
`

// Chamando ao Elementos da Lista

export const ListaV = styled.ul`
  background: url(${Check});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  padding-left: 30px;
  font-size: 18px;
  font-weight: normal;
  margin: 5px 0px;
`

export const ImagemRastreio = styled.img`
  position: absolute;
  left: 60px;
  top: -2%;
  height: 315px;
  width: auto;
`
