import styled from 'styled-components'

export const CardBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255);
  border: 1px solid #121212bd;
  border-radius: 8px;
  width: 18rem;
  height: 8rem;
  box-shadow: 0px 11px 18px 1px rgb(0 0 0 / 55%);
  @media (max-width: 1150px) {
    width: 17rem;
    height: 8rem;
  }
  @media (max-width: 770px) {
    width: 18rem;
    height: 7rem;
  }
`

export const CardText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const Img = styled.div`
  color: ${(props) => props.theme['background-nav-links']};
  margin: 1rem;

  @media (max-width: 1150px) {
    margin: 0.5rem;
  }
`
export const Titulo = styled.h1`
  font-size: 1.3rem;
  text-decoration: underline;
  color: ${(props) => props.theme['background-nav-links']};

  @media (max-width: 1150px) {
    font-size: 1rem;
  }
`

export const Paragrafo = styled.p`
  text-align: center;
  padding: 5px 10px;
  font-size: 0.95rem;

  @media (max-width: 1150px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1050px) {
  }
`
