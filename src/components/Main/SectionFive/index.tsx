import {
  SessaoQuinta,
  SubSessaoQuinta,
  RodapeTabela,
  Titulo,
  Paragrafo,
} from './style.styles'
import { PlansTable } from '../PlansTable'
import { TableMobile } from '../TableMobile'
import { useState, useEffect } from 'react'

export const SectionFive = () => {
  const [infoSection, setInfoSection] = useState(false)
  const [paragrafoSection, setParagrafoSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = 2848
      const scrollValueP = 2851

      if (window.scrollY >= scrollValue) {
        setInfoSection(true)
      } else {
        setInfoSection(false)
      }

      if (window.scrollY >= scrollValueP) {
        setParagrafoSection(true)
      } else {
        setParagrafoSection(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoQuinta id="planos">
      <SubSessaoQuinta visible={infoSection}>
        <Titulo>Planos</Titulo>

        <Paragrafo visible={paragrafoSection}>
          Ofereça um serviço personalizado para seus clientes, de acordo com a
          necessidade de cada um, através dos planos do sistema{' '}
          <strong>Walk in Line</strong>.
        </Paragrafo>

        <TableMobile />
        <PlansTable />

        <RodapeTabela>
          * Valor condicional ao número total de veículos rastreados no
          sistema.*
        </RodapeTabela>
      </SubSessaoQuinta>
    </SessaoQuinta>
  )
}
