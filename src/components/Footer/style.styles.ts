import styled from 'styled-components'

export const FooterBarra = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SubFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['button-background']};
  height: 100px;
  width: 100%;
  gap: 25px;

  @media (max-width: 960px) {
    height: 85px;
  }
  @media (max-width: 785px) {
    height: 70px;
  }
`

export const TextoFooter = styled.a`
  color: ${(props) => props.theme.white};
  font-size: 1.5rem;
  text-decoration: none;
  white-space: nowrap;

  @media (max-width: 960px) {
    font-size: 0.55rem;
  }
  @media (max-width: 785px) {
    font-size: 0.5rem;
  }
`

export const FooterImg = styled.img`
  width: 7rem;
  height: auto;

  @media (max-width: 960px) {
    width: 5rem;
    height: auto;
  }
  @media (max-width: 785px) {
    width: 4rem;
    height: auto;
  }
  @media (max-width: 710px) {
    width: 3rem;
    height: auto;
  }
`

export const SubFooterDois = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 785px) {
    margin-top: 0.5rem;
  }
`

export const ParagrafoFooter = styled.p`
  font-size: 12px;
  margin-bottom: 1rem;

  @media (max-width: 785px) {
    margin-bottom: 0.5rem;
  }
`
