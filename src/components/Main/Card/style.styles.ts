import styled from 'styled-components'

export const CardBackground = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.904);

  border: 1px solid black;
  border-radius: 8px;
  width: 20rem;
  height: 10rem;
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
