import { Card } from '..'
import { CardGrid } from './style.styles'

import { useState, useEffect } from 'react'

export const CardMobile = () => {
  const [efectCard, setEfectCard] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollCard = 2100

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
    <CardGrid visible={efectCard}>
      <Card
        icon={'simcard'}
        title={'SimCard'}
        description={
          'Controle total da sua frota na gestão de simcards: segurança em suas mãos.'
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
        icon={'app'}
        title={'Aplicativo'}
        description={
          'Tenha o controle na palma da mão: acompanhe sua frota em tempo real com nosso aplicativo.'
        }
      />
    </CardGrid>
  )
}
