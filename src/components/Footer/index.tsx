import {
  FooterBarra,
  SubFooter,
  TextoFooter,
  FooterImg,
  SubFooterDois,
  ParagrafoFooter,
  ButtonImg,
} from './style.styles'

import logoBranca from '../assets/images/logo-branca.png'
export const Footer = () => {
  return (
    <FooterBarra>
      <SubFooter>
        <TextoFooter>Desenvolvido por:</TextoFooter>
        <ButtonImg onClick={() => (window.location.href = '/pt-br')}>
          <FooterImg src={logoBranca} alt="LogoTipo" />
        </ButtonImg>
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
