import {
  SessaoSecundaria,
  MainImg,
  SessaoSecundariaArea,
  Paragrafo,
  ParagrafoSecundario,
} from './style.styles'

import logo from '../../assets/images/logo-branca.png'

export const SectionTwo = () => {
  return (
    <SessaoSecundaria id="quem-somos">
      <SessaoSecundariaArea>
        <MainImg src={logo} alt="Logo" />

        <Paragrafo>
          <strong>Walk in Line</strong> é uma moderna plataforma de rastreamento
          veicular desenvolvida pelo <strong>Grupo JL</strong> que possibilita
          que sua empresa ofereça um serviço de qualidade pelo melhor custo
          benefício do mercado.
        </Paragrafo>

        <Paragrafo>
          O sistema permite que centrais de monitoramento e clientes finais
          acompanhem seus veículos e ativos rastreaveis em tempo real!
        </Paragrafo>
        <ParagrafoSecundario>
          Tudo isso via WEB / Aplicativo Mobile.<br></br>
          <u>
            <strong>
              <a
                href="https://api.whatsapp.com/send?phone=5511996634534"
                target="_blank"
                rel="noreferrer"
              >
                Entre em contato agora mesmo com nosso time de especialistas.
              </a>
            </strong>
          </u>
        </ParagrafoSecundario>
      </SessaoSecundariaArea>
    </SessaoSecundaria>
  )
}
