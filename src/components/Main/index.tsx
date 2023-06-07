import {
  SessaoQuarta,
  SubSessaoQuarta,
  Paragrafo4,
  ImagemPlataforma,
  SegundaSessaoQuarta,
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
  FundoSection,
  CardGrid,
  FundoCarMobile,
  ParagrafoSecundario,
  Titulo3,
} from './style.styles'

import Plataforma from '../assets/images/foto-sistema.png'
import FundoCar from '../assets/images/carro-fundo.png'
import FundoCarmobile from '../assets/images/carro-fundo-mobile.png'
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

import { Card } from './Card'
import { CardMobile } from './Card/CardMobile'
import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import { SectionThree } from './SectionThree'

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

      <SessaoQuarta id="software">
        <SubSessaoQuarta>
          <Titulo3>Software</Titulo3>

          <Paragrafo4>
            O software da <strong>Walk in Line</strong> possui uma{' '}
            <strong>versão web</strong> e uma <strong>versão mobile</strong>,
            tanto <strong>iOS</strong> como <strong>Android</strong> para sua
            empresa de rastreamento, onde a central e o seu cliente final
            monitoram seus ativos rastreáveis de qualquer lugar e a qualquer
            momento.
          </Paragrafo4>
          <ImagemPlataforma src={Plataforma} alt="Rastreio" />
        </SubSessaoQuarta>

        <SegundaSessaoQuarta>
          <FundoSection src={FundoCar} alt="Fundo com carro" />
          <FundoCarMobile
            src={FundoCarmobile}
            alt="Fundo com carro pro mobile"
          />
          <CardGrid>
            <Card
              icon={'simcard'}
              title={'SimCard'}
              description={
                'Controle total da sua frota na gestão de simcards: segurança em suas mãos.'
              }
            />

            <Card
              icon={'veiculo'}
              title={'Veiculos'}
              description={
                'Maximize a produtividade da sua frota: impulsione seus resultados e garanta sua tranquilidade.'
              }
            />

            <Card
              icon={'os'}
              title={'Ordem de Serviço'}
              description={
                'Gerencie todas as etapas do rastreamento veicular de forma organizada e precisa.'
              }
            />

            <Card
              icon={'equipamento'}
              title={'Equipamentos'}
              description={
                'Aumente a eficiência operacional administrando e protegendo seus ativos.'
              }
            />

            <Card
              icon={'entidade'}
              title={'Entidades'}
              description={
                'Conecte e gerencie todas as pessoas relevantes em um só lugar.'
              }
            />

            <Card
              icon={'app'}
              title={'Aplicativo'}
              description={
                'Tenha o controle na palma da mão: acompanhe sua frota em tempo real com nosso aplicativo.'
              }
            />
          </CardGrid>
          <CardMobile />
        </SegundaSessaoQuarta>
        {/* Fim da div */}
      </SessaoQuarta>

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
