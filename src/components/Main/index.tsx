import {
  SessaoQuinta,
  SubSessaoQuinta,
  RodapeTabela,
  SessaoSexta,
  SubSessaoSexta,
  SessaoSetima,
  SubSessaoSetima,
  ParagrafoSetimaSec,
  SessaoFormulario,
  FormularioArea,
  SessaoFormularioInfo,
  Contatos,
  ParagrafoContato,
  TelefoneWpp,
  EmailContato,
  Carousel,
  BotaoUp,
  BotaoSobe,
  ParagrafoSecundario,
  Titulo3,
} from './style.styles'

import { PlansTable } from './PlansTable'
import { TableMobile } from './TableMobile'
import { Forms } from './Forms'

import { FaWhatsapp } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { useState, useEffect } from 'react'
import 'react-awesome-slider/dist/styles.css'

import CarrosselUm from '../assets/images/carousel-1.png'
import CarrosselDois from '../assets/images/carousel-2.png'
import CarrosselTres from '../assets/images/carousel-3.png'
import CarrosselQuatro from '../assets/images/carousel-4.png'

import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import { SectionThree } from './SectionThree'
import { SectionFour } from './SectionFour'

export const Main = () => {
  const [buttonOnTop, setButtonOnTop] = useState(false)
  const [cursor, setCursor] = useState(false)
  const [buttonUp, setButtonUp] = useState(false)
  const [oldScroll, setOldScroll] = useState<number>(window.scrollY)
  console.log(oldScroll)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonOnTop(true)
        setCursor(true)
      } else {
        setButtonOnTop(false)
        setCursor(false)
      }

      setOldScroll((e) => {
        if (e < window.scrollY) {
          console.log('descendo')
          setButtonUp(false)
        } else {
          setButtonUp(true)
          console.log('subindo')
        }

        return window.scrollY
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function subirTela() {
    document.documentElement.scrollTop = 0
  }

  return (
    <main>
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SessaoQuinta id="planos">
        <SubSessaoQuinta>
          <Titulo3>Planos</Titulo3>

          <ParagrafoSecundario>
            Ofereça um serviço personalizado para seus clientes, de acordo com a
            necessidade de cada um, através dos planos do sistema{' '}
            <strong>Walk in Line</strong>.
          </ParagrafoSecundario>
          <TableMobile />
          <PlansTable />

          <RodapeTabela>
            * Valor condicional ao número total de veículos rastreados no
            sistema.*
          </RodapeTabela>
        </SubSessaoQuinta>
      </SessaoQuinta>

      <SessaoSexta id="monte-sua-central">
        <SubSessaoSexta>
          <Titulo3>Monte sua Central</Titulo3>
          <ParagrafoSecundario>
            Tudo que você precisa para abrir sua empresa de forma rápida e
            fácil.
          </ParagrafoSecundario>
          <Carousel
            media={[
              {
                source: CarrosselUm,
              },
              {
                source: CarrosselDois,
              },
              {
                source: CarrosselTres,
              },
              {
                source: CarrosselQuatro,
              },
            ]}
          />
        </SubSessaoSexta>
      </SessaoSexta>

      <SessaoSetima id="contato">
        <SubSessaoSetima>
          <Titulo3>Contato</Titulo3>

          <ParagrafoContato>
            <strong>Preenchimento Obrigatório (*)</strong>
          </ParagrafoContato>
          <SessaoFormulario>
            <SessaoFormularioInfo>
              <ParagrafoSetimaSec>
                Preencha todos os campos e entraremos em contato para{' '}
                <strong>MONTAR</strong> a sua{' '}
                <strong>EMPRESA DE RASTREAMENTO.</strong>
              </ParagrafoSetimaSec>

              <ParagrafoSetimaSec>
                Entre em contato conosco através do formulário ou pelo telefone
                abaixo! Montaremos sua central em apenas alguns minutos!
              </ParagrafoSetimaSec>
              <Contatos>
                <TelefoneWpp>
                  <a
                    href="https://api.whatsapp.com/send?phone="
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <strong>(11) 99999-9999</strong>
                  </a>
                  <FaWhatsapp size={0} color={'35C42C'}></FaWhatsapp>
                </TelefoneWpp>
              </Contatos>

              <EmailContato>
                <strong>contato@walkinline.com.br</strong>
                <GrMail size={0} color={'#1D3557'}></GrMail>
              </EmailContato>

              <ParagrafoSetimaSec>
                <strong>
                  Av. das Nações Unidas, 18801 15° Andar - Santo Amaro, São
                  Paulo - SP, 04753-100
                </strong>
              </ParagrafoSetimaSec>
            </SessaoFormularioInfo>

            <FormularioArea>
              <Forms />
            </FormularioArea>
          </SessaoFormulario>
        </SubSessaoSetima>
      </SessaoSetima>

      <BotaoUp opacidade={buttonOnTop} cursor={cursor} subir={buttonUp}>
        <BotaoSobe size={45} onClick={subirTela} />
      </BotaoUp>
    </main>
  )
}
