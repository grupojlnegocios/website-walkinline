import styled from 'styled-components'

interface CookieProps {
  cookie: boolean
  fechar?: boolean
}

export const CampoCookie = styled.div<CookieProps>`
  position: fixed;
  z-index: 50;
  display: ${(props) => (props.fechar === true ? 'none' : 'flex')};
  bottom: ${(props) => (props.cookie === true ? '0' : '-20%')};
  right: 0;
  left: 0;
  transition: bottom 0.6s ease;
`

export const SessaoCookie = styled.div`
  width: 100vw;
  height: 15vh;
  background-color: white;
  display: flex;

  @media (max-width: 500px) {
    height: 30vh;
  }
`

export const TextoCookie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 3rem;

  @media (max-width: 900px) {
    padding: 1rem;
  }
`

export const Paragrafo = styled.p`
  display: inline-table;
  color: black;
  font-size: 1rem;

  a {
    text-decoration: none;
    color: #1d3557;

    &:hover {
      text-decoration: revert;
    }
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }
`

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
  padding: 1rem 4rem;

  @media (max-width: 900px) {
    padding: 1rem;
  }
`

export const Button = styled.button`
  background-color: #1d3557;
  color: white;
  padding: 0.3rem;
  width: 8rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: 0.5s ease;

  &:hover {
    background-color: #183669;
    box-shadow: 1px 1px 5px 2px rgb(0 0 0 / 40%);
  }

  @media (max-width: 900px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    width: 6rem;
    font-size: 0.8rem;
  }
`
