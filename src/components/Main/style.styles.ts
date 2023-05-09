import styled from 'styled-components'
import Imagem from '../assets/images/rodovia.jpg'

// Chamando ao Elemento Titulo

export const Titulo = styled.div`
  font-size: 40px;
  text-align: center;
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  display: inline-block;
  text-align: center;
  padding: 45px;
  max-width: 395px;
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
  padding: 18px 25px;
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
  display: flex;
  justify-content: space-between;
  margin-top: 2%;
  background-size: cover;
  background-repeat: no-repeat;

  height: 100vh;

  &::before {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: 0.5;
    content: '';
  }
`
export const SessaoSecundariaArea = styled.section``

export const MainImg = styled.img`
  height: 100%;
`
