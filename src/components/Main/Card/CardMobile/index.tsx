import { Card } from '..'
import { CardGrid } from './style.styles'

export const CardMobile = () => {
  return (
    <CardGrid>
      <Card
        icon={'simcard'}
        title={'SimCard'}
        description={'Esse é um Paragrafo'}
      />

      <Card
        icon={'equipamento'}
        title={'Equipamentos'}
        description={'Esse é um Paragrafo'}
      />

      <Card
        icon={'entidade'}
        title={'Entidades'}
        description={'Esse é um Paragrafo'}
      />

      <Card
        icon={'veiculo'}
        title={'Veiculos'}
        description={'Esse é um Paragrafo'}
      />

      <Card
        icon={'os'}
        title={'Ordem de Serviço'}
        description={'Esse é um Paragrafo'}
      />

      <Card
        icon={'app'}
        title={'Aplicativo'}
        description={'Esse é um Paragrafo'}
      />
    </CardGrid>
  )
}
