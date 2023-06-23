import {
  SessaoQuarta,
  SubSessaoQuarta,
  Paragrafo,
  ImagemPlataforma,
  SegundaSessaoQuarta,
  FundoSection,
  CardGrid,
  FundoCarMobile,
  Titulo,
} from './style.styles'

import Plataforma from '../../assets/images/foto-sistema.png'
import FundoCar from '../../assets/images/carro-fundo.png'
import FundoCarmobile from '../../assets/images/carro-fundo-mobile.png'

import { useState, useEffect } from 'react'

import { Card } from '../Card'
import { CardMobile } from '../Card/CardMobile'

export const SectionFour = () => {
  const [infoSection, setInfoSection] = useState(false)
  const [textDecore, setTextDecore] = useState(false)
  const [imgDecore, setImgDecore] = useState(false)
  const [cardDecore, setCardDecore] = useState(false)
  const [efectCard, setEfectCard] = useState(false)
  const [imgMobile, setImgMobile] = useState(false)
  const [textMobile, setTextMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // valores do scrollY no PC
      const scrollValue = 1457
      const textVisible = 1480
      const imgVisible = 1668
      const cardVisible = 2300
      const scrollCard = 2050

      //  valores do scrollY no Mobile
      const imgMobile = 1833
      const textMobile = 1560

      if (window.scrollY >= scrollValue) {
        setInfoSection(true)
      } else {
        setInfoSection(false)
      }

      if (window.scrollY >= textVisible) {
        setTextDecore(true)
      } else {
        setTextDecore(false)
      }

      if (window.scrollY >= textMobile) {
        setTextMobile(true)
      } else {
        setTextMobile(false)
      }

      if (window.scrollY >= imgVisible) {
        setImgDecore(true)
      } else {
        setImgDecore(false)
      }

      if (window.scrollY >= imgMobile) {
        setImgMobile(true)
      } else {
        setImgMobile(false)
      }

      if (window.scrollY >= cardVisible) {
        setCardDecore(true)
      } else {
        setCardDecore(false)
      }

      if (window.scrollY >= scrollCard) {
        setEfectCard(true)
      } else {
        setEfectCard(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoQuarta visible={infoSection} id="software">
      <SubSessaoQuarta>
        <Titulo>Software</Titulo>

        <Paragrafo visibleMobile={textMobile} visible={textDecore}>
          O software da <strong>Walk in Line</strong> possui uma{' '}
          <strong>versão web</strong> e uma <strong>versão mobile</strong>,
          tanto <strong>iOS</strong> como <strong>Android</strong> para sua
          empresa de rastreamento, onde a central e o seu cliente final
          monitoram seus ativos rastreáveis de qualquer lugar e a qualquer
          momento.
        </Paragrafo>
        <ImagemPlataforma
          visibleMobile={imgMobile}
          visible={imgDecore}
          src={Plataforma}
          alt="Rastreio"
        />
      </SubSessaoQuarta>

      <SegundaSessaoQuarta>
        <FundoSection
          visible={cardDecore}
          src={FundoCar}
          alt="Fundo com carro"
        />
        <FundoCarMobile
          visible={efectCard}
          src={FundoCarmobile}
          alt="Fundo com carro pro mobile"
        />
        <CardGrid visible={cardDecore}>
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
  )
}
