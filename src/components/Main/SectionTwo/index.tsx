import {
  SessaoSecundaria,
  MainImg,
  SessaoSecundariaArea,
  ParagrafoSecundario,
  ParagrafoSecundario2,
} from './style.styles'

import logo from '../../assets/images/logo.png'

export const SectionTwo = () => {
  return (
    <SessaoSecundaria id="quem-somos">
      <SessaoSecundariaArea>
        <MainImg src={logo} alt="Logo" />

        <ParagrafoSecundario>
          <strong>Walk in Line</strong> é uma moderna plataforma de rastreamento
          veicular desenvolvida pelo <strong>Grupo JL</strong> que possibilita
          que sua empresa ofereça um serviço de qualidade pelo melhor custo
          benefício do mercado.
        </ParagrafoSecundario>

        <ParagrafoSecundario>
          O sistema permite que centrais de monitoramento e clientes finais
          acompanhem seus veículos e ativos rastreaveis em tempo real!
        </ParagrafoSecundario>
        <ParagrafoSecundario2>
          Tudo isso via WEB / Aplicativos Mobiles.<br></br>
          <u>
            <strong>
              <a
                href="https://api.whatsapp.com/send?phone="
                target="_blank"
                rel="noreferrer"
              >
                Entre em contato agora mesmo com nosso time de especialistas.
              </a>
            </strong>
          </u>
        </ParagrafoSecundario2>
      </SessaoSecundariaArea>
    </SessaoSecundaria>
  )
}
