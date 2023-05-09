import styled from 'styled-components'

export const Titulo = styled.div`
  font-size: 40px;
  text-align: center;
`
export const Paragrafo = styled.p`
  display: inline-block;
  text-align: justify;
  padding: 45px;
  max-width: 395px;
  color: ${(props) => props.theme['current-text']};
`

export const SessaoPrincipal = styled.section`
  display: flex;
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
