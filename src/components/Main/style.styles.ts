import styled from 'styled-components'

export const Titulo = styled.div`
  font-size: 40px;
  text-align: center;
`
export const Paragrafo = styled.p`
  display: inline-block;
  text-align: center;
  padding: 45px;
  max-width: 395px;
  color: ${(props) => props.theme['current-text']};
`

export const SessaoPrincipal = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`

export const SessaoPrincipalArea = styled.section`
  position: relative;
  max-width: 50%;
  text-align: center;
`

export const Parte1 = styled.h1`
  font-weight: 100;
  color: ${(props) => props.theme['first-part-principal-title']};
`

export const Parte2 = styled.h1`
  font-weight: 400;
  white-space: pre-wrap;
  color: ${(props) => props.theme['current-title']};
`
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
