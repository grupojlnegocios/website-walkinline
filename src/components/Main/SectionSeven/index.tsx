import {
  SessaoSetima,
  SubSessaoSetima,
  Paragrafo,
  SessaoFormulario,
  FormularioArea,
  SessaoFormularioInfo,
  Contatos,
  ParagrafoPrincipal,
  TelefoneWpp,
  TelefoneFix,
  EmailContato,
  Titulo,
} from './style.styles'

import { FaWhatsapp } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Forms } from '../Forms'
import { AiFillPhone } from 'react-icons/ai'

import { useState, useEffect } from 'react'

export const SectionSeven = () => {
  const [scrollSection, setScrollSection] = useState(false)
  const [scrollForm, setScrollForm] = useState(false)
  const [scrollMobile, setScrollMobile] = useState(false)
  const [formsMobile, setFormsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // valores do scrollY no PC
      const scrollScreen = 5940
      const scrollFormSec = 6075

      // valores do scrollY na versão Mobile
      const screenMobile = 4338
      const infoFormsMobile = 4535
      const formMobile = 4898

      if (window.scrollY >= scrollScreen || window.scrollY >= screenMobile) {
        setScrollSection(true)
      } else {
        setScrollSection(false)
      }

      if (window.scrollY >= scrollFormSec) {
        setScrollForm(true)
      } else {
        setScrollForm(false)
      }

      // Para versão Mobile
      if (window.scrollY >= infoFormsMobile) {
        setScrollMobile(true)
      } else {
        setScrollMobile(false)
      }

      if (window.scrollY >= formMobile) {
        setFormsMobile(true)
      } else {
        setFormsMobile(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoSetima id="contato">
      <SubSessaoSetima visible={scrollSection}>
        <Titulo>Contato</Titulo>

        <ParagrafoPrincipal visible={scrollSection}>
          <strong>Preenchimento Obrigatório (*)</strong>
        </ParagrafoPrincipal>
        <SessaoFormulario visible={scrollForm}>
          <SessaoFormularioInfo visible={scrollMobile}>
            <Paragrafo>
              Preencha todos os campos e entraremos em contato para{' '}
              <strong>MONTAR</strong> a sua{' '}
              <strong>EMPRESA DE RASTREAMENTO.</strong>
            </Paragrafo>

            <Paragrafo>
              Entre em contato conosco através do formulário ou pelo telefone
              abaixo! Montaremos sua central em apenas alguns minutos!
            </Paragrafo>
            <Contatos>
              <TelefoneWpp>
                <a
                  href="https://api.whatsapp.com/send?phone=5511996634534"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <strong>(11) 99663-4534</strong>
                </a>
                <FaWhatsapp size={0} color={'35C42C'}></FaWhatsapp>
              </TelefoneWpp>

              <TelefoneFix>
                <strong>(11) 3294-1403</strong>
                <AiFillPhone size={0} color={'#1D3557'}></AiFillPhone>
              </TelefoneFix>
            </Contatos>

            <EmailContato>
              <strong>contato@walkinline.com.br</strong>
              <GrMail size={0} color={'#1D3557'}></GrMail>
            </EmailContato>

            <Paragrafo>
              <strong>
                Av. das Nações Unidas, 18801 15° Andar - Santo Amaro, São Paulo
                - SP, 04753-100
              </strong>
            </Paragrafo>
          </SessaoFormularioInfo>

          <FormularioArea visible={formsMobile}>
            <Forms />
          </FormularioArea>
        </SessaoFormulario>
      </SubSessaoSetima>
    </SessaoSetima>
  )
}
