import {
  FooterBarra,
  SubFooter,
  TextoFooter,
  FooterImg,
  SubFooterDois,
  ParagrafoFooter,
} from './style.styles'

import logoBranca from '../assets/images/logo-branca.png'
export const Footer = () => {
  return (
    <FooterBarra>
      <SubFooter>
        <TextoFooter href="#" target="_blanck">
          Desenvolvido por:
        </TextoFooter>
        <FooterImg src={logoBranca} alt="LogoTipo" />
      </SubFooter>

      <SubFooterDois>
        <ParagrafoFooter>
          <strong>Walk in Line</strong> © Copyright - Todos os direitos
          reservados
        </ParagrafoFooter>
      </SubFooterDois>
    </FooterBarra>
  )
}
