import styled from 'styled-components'
import Imagem from '../assets/images/rodovia.jpg'
import Check from '../assets/images/check.svg'
import Fundo from '../assets/images/fundo-parte4.jpg'
import FundoInicio from '../assets/images/foto-sitewalkinline.png'

// Primeira Sessão começa aqui !

// Chamando ao Elemento Titulo

export const Titulo = styled.div`
  font-size: 35px;
  text-align: center;
  margin-top: 1rem;

  @media (max-width: 960px) {
    font-size: 28px;
  }
  @media (max-width: 785px) {
    font-size: 25px;
  }
  @media (max-width: 710px) {
    font-size: 22px;
  }
`

// Chamando ao Elemento Paragrafo

export const Paragrafo = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 19px;
  padding: 10px;
  max-width: 27rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme['current-text']};

  @media (max-width: 960px) {
    font-size: 15px;
  }
  @media (max-width: 785px) {
    font-size: 10px;
  }
  @media (max-width: 785px) {
    font-size: 8px;
  }
`

// Chamando ao Elemento Sessão Principal

export const SessaoPrincipal = styled.section`
  background-image: url(${FundoInicio});
  padding: 2rem;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

// Chamando ao Elemento Sessão Principal Area

export const SessaoPrincipalArea = styled.div`
  z-index: 1;
  max-width: 70%;
  margin-top: 5rem;
  text-align: center;
  background-color: rgb(255 255 255 / 60%);
  border-radius: 8px;
  text-decoration: none;
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
  font-size: 20px;
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
`
// Segunda Sessão começa aqui !

export const SessaoSecundaria = styled.section`
  background-image: url(${Imagem});
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;

  &::before {
    position: absolute;
    background-size: cover;
    z-index: 1;
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
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -25px;
  width: 60%;
  gap: 2rem;
`

// Chamando ao Elemento Imagem

export const MainImg = styled.img`
  width: 16rem;
  height: auto;

  @media (max-width: 960px) {
    width: 13rem;
  }
  @media (max-width: 785px) {
    width: 10rem;
  }
  @media (max-width: 785px) {
    width: 8rem;
  }
`

// Chamando ao Elemento Paragrafo

export const ParagrafoSecundario = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 20px;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 960px) {
    font-size: 15px;
  }
  @media (max-width: 785px) {
    font-size: 10px;
  }
  @media (max-width: 785px) {
    font-size: 8px;
  }
`

// Terceira Sessão começa aqui !

// Chamando ao Elemento Sessão Terceira

export const SessaoTerceira = styled.section`
  justify-content: space-between;
  background-size: cover;
  margin-top: 2%;
  margin-bottom: 10%;
  flex-direction: column;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 69vh;
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
`

// Chamando ao Elemento Lista

export const TextoLista = styled.div`
  position: relative;
  justify-content: space-between;
  padding: 0px;
  list-style: none;
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  padding-left: 35rem;
  font-size: 18px;
  font-weight: normal;
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
  font-weight: 400;
  margin-bottom: 1rem;
`

// Chamando ao Elementos da Lista

export const ListaV = styled.ul`
  background: url(${Check});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 20px;
  padding-left: 2rem;
  font-size: 18px;
  font-weight: normal;
  margin: 5px 0px;
`
// Chamando a imagem da lista

export const ImagemRastreio = styled.img`
  position: absolute;
  width: 28rem;
  left: 4rem;
  top: -2%;
  height: auto;
`

// Quarta Sessão começa aqui !

export const SessaoQuarta = styled.section`
  background: url(${Fundo});
  padding: 2rem;
  background-size: cover;
  margin-top: 2%;
  display: flex;
  justify-content: center;
`

export const SubSessaoQuarta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
  width: 75%;
`

export const Paragrafo4 = styled.p`
  color: ${(props) => props.theme['current-text']};
  font-size: 20px;
  text-align: center;
  padding: 35px;
`
export const ImagemPlataforma = styled.img`
  width: 47rem;
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
  margin-top: 35px;
  width: 75%;
  gap: 2rem;
`
export const RodapeTabela = styled.p`
  font-size: 12px;
`

// Sexta Sessão começa aqui !

export const SessaoSexta = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
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
  margin-top: 60px;
  gap: 2rem;
`

export const SessaoFormulario = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`

export const FormularioArea = styled.div``

export const SessaoFormularioInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`

export const ParagrafoSetimaSec = styled.p`
  align-items: start;
  padding: 1rem;
  max-width: 545px;
  font-size: 18px;
`

export const Contatos = styled.div``

export const TelefoneWpp = styled.p`
  display: flex;
  font-size: 25px;
  margin-left: 1rem;
  gap: 7px;
`

export const EmailContato = styled.p`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-left: 1rem;
  gap: 7px;
`
