import {
  SessaoQuinta,
  SubSessaoQuinta,
  RodapeTabela,
  Titulo,
  Paragrafo,
} from './style.styles'
import { PlansTable } from '../PlansTable'
import { TableMobile } from '../TableMobile'

export const SectionFive = () => {
  return (
    <SessaoQuinta id="planos">
      <SubSessaoQuinta>
        <Titulo>Planos</Titulo>

        <Paragrafo>
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
