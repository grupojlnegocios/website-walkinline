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
`

export const TextoFooter = styled.a`
  color: ${(props) => props.theme.white};
  font-size: 15px;
  text-decoration: none;
  white-space: nowrap;
`

export const FooterImg = styled.img`
  width: 95px;
  height: auto;
`

export const SubFooterDois = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`

export const ParagrafoFooter = styled.p`
  font-size: 12px;
  margin-bottom: 1rem;
`
