import styled from 'styled-components'

export const CardBackground = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255);
  border: 1px solid #121212bd;
  border-radius: 8px;
  width: 16rem;
  height: 8rem;
`

export const CardText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.5rem;
    text-decoration: underline;
    color: #1d3557;
  }
  p {
    padding: 5px 10px;
  }
`

export const Img = styled.div`
  color: #1d3557;
  margin: 1rem;
`
export const Titulo = styled.h1``

export const Paragrafo = styled.p`
  text-align: center;
`
