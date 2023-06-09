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

import { Card } from '../Card'
import { CardMobile } from '../Card/CardMobile'

export const SectionFour = () => {
  return (
    <SessaoQuarta id="software">
      <SubSessaoQuarta>
        <Titulo>Software</Titulo>

        <Paragrafo>
          O software da <strong>Walk in Line</strong> possui uma{' '}
          <strong>versão web</strong> e uma <strong>versão mobile</strong>,
          tanto <strong>iOS</strong> como <strong>Android</strong> para sua
          empresa de rastreamento, onde a central e o seu cliente final
          monitoram seus ativos rastreáveis de qualquer lugar e a qualquer
          momento.
        </Paragrafo>
        <ImagemPlataforma src={Plataforma} alt="Rastreio" />
      </SubSessaoQuarta>

      <SegundaSessaoQuarta>
        <FundoSection src={FundoCar} alt="Fundo com carro" />
        <FundoCarMobile src={FundoCarmobile} alt="Fundo com carro pro mobile" />
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
  )
}
