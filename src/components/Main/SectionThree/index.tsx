import {
  SessaoTerceira,
  Titulo,
  TextoLista,
  Listas,
  ListaV,
  Titulo2,
  ImagemRastreio,
  Paragrafo,
} from './style.styles'

import Rastreio from '../../assets/images/foto-veiculos.png'
import { useState, useEffect } from 'react'

export const SectionThree = () => {
  const [infoSection, setInfoSection] = useState(false)
  const [elementVisible, setElementVisible] = useState(false)
  const [imgMobile, setImgMobile] = useState(false)
  const [listaMobile, setListaMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = 787

      const scrollElements = 1034
      const scrollImg = 1053
      const listaMobileScreen = 1177

      if (window.scrollY >= scrollValue) {
        setInfoSection(true)
      } else {
        setInfoSection(false)
      }

      if (window.scrollY >= scrollElements || window.scrollY >= scrollImg) {
        setElementVisible(true)
        setImgMobile(true)
      } else {
        setElementVisible(false)
        setImgMobile(false)
      }

      if (window.scrollY >= listaMobileScreen) {
        setListaMobile(true)
      } else {
        setListaMobile(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoTerceira visible={infoSection} id="nosso-diferencial">
      <Titulo>Diferencial</Titulo>

      <Paragrafo>
        A <strong>walk in line</strong> oferece as melhores opções do mercado
        para facilitar e desenvolver o seu negocio através do nosso{' '}
        <u>software inteligente</u>!
      </Paragrafo>

      <TextoLista visible={elementVisible}>
        <ImagemRastreio
          visibleMobile={imgMobile}
          visible={elementVisible}
          src={Rastreio}
          alt="Rastreio"
        />

        <Listas visibleMobile={listaMobile} visible={elementVisible}>
          <Titulo2>Vantagens</Titulo2>
          <ListaV>Mais de 70 rastreadores homologados</ListaV>
          <ListaV>Aceita customizações e integrações</ListaV>
          <ListaV>Equipe de suporte altamente qualificada</ListaV>
          <ListaV>
            Parceria com os melhores fabricantes do Brasil e do mundo
          </ListaV>
          <ListaV>Sistema web hospedado em datacenter de alto padrão</ListaV>
        </Listas>
      </TextoLista>
    </SessaoTerceira>
  )
}
