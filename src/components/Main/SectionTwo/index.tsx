import {
  SessaoSecundaria,
  MainImg,
  SessaoSecundariaArea,
  Paragrafo,
  ParagrafoSecundario,
} from './style.styles'

import { useState, useEffect } from 'react'

import logo from '../../assets/images/logo-branca.png'

export const SectionTwo = () => {
  const [infoSection, setInfoSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollDiv = 247

      if (window.scrollY >= scrollDiv) {
        setInfoSection(true)
      } else {
        setInfoSection(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoSecundaria id="quem-somos">
      <SessaoSecundariaArea visible={infoSection}>
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
