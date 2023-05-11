import {
  Titulo,
  Paragrafo,
  SessaoPrincipal,
  SessaoPrincipalArea,
  Parte1,
  Parte2,
  Button,
  SessaoSecundaria,
  MainImg,
  SessaoSecundariaArea,
  ParagrafoSecundario,
  SessaoTerceira,
  Titulo3,
  TextoLista,
  Listas,
  ListaV,
  Titulo4,
  ImagemRastreio,
  SessaoQuarta,
  SubSessaoQuarta,
  Paragrafo4,
  ImagemPlataforma,
  SessaoQuinta,
  SubSessaoQuinta,
  RodapeTabela,
  SessaoSexta,
  SubSessaoSexta,
  SessaoSetima,
  SubSessaoSetima,
} from './style.styles'

import logo from '../assets/images/logo.png'
import Rastreio from '../assets/images/rastreio.png'
import Plataforma from '../assets/images/Plataforma.png'
import { PlansTable } from './PlansTable'

import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import CarrosselUm from '../assets/images/carousel-1.png'
import CarrosselDois from '../assets/images/carousel-2.png'
import CarrosselTres from '../assets/images/carousel-3.png'
import CarrosselQuatro from '../assets/images/carousel-4.png'

export const Main = () => {
  return (
    <main>
      <SessaoPrincipal>
        <SessaoPrincipalArea>
          <Titulo>
            <Parte1>Simplificamos a jornada de</Parte1>
            <Parte2>Rastreamento Veicular e Telemetria Avançada</Parte2>
          </Titulo>

          <Paragrafo>
            Oferecemos toda a estrutura e tecnologia para que empresas montem
            suas centrais de rastreamento e telemetria avançada, comecem a
            escalar vendas no mercado de proteção veicular e segurança
            patrimonial.
          </Paragrafo>

          <Button> Monte sua Central ➝ </Button>
        </SessaoPrincipalArea>
      </SessaoPrincipal>
      <SessaoSecundaria>
        <SessaoSecundariaArea>
          <MainImg src={logo} alt="Logo" />

          <ParagrafoSecundario>
            O <strong>Walk in Line</strong> é uma moderna plataforma de
            rastreamento veicular desenvolvida pela JL que possibilita que sua
            empresa ofereça um serviço de qualidade pelo melhor custo benefício
            do mercado.
          </ParagrafoSecundario>

          <ParagrafoSecundario>
            O sistema permite as centrais e aos clientes finais acompanharem
            seus veículos e demais objetos rastreáveis em tempo real através de
            sistema WEB ou por aplicativo em seus smartphones.{' '}
            <strong>Entre em contato e conheça mais.</strong>
          </ParagrafoSecundario>
        </SessaoSecundariaArea>
      </SessaoSecundaria>
      <SessaoTerceira>
        <Titulo3>Diferencial</Titulo3>

        <Paragrafo>
          A <strong>JL</strong> oferece as melhores opções do mercado para
          facilitar e desenvolver o seu negócio através do sistema{' '}
          <strong>Walk in Line</strong>.
        </Paragrafo>

        <TextoLista>
          <ImagemRastreio src={Rastreio} alt="Rastreio" />
          <Titulo4>Vantagens</Titulo4>

          <Listas>
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
      <SessaoQuarta>
        <SubSessaoQuarta>
          <Titulo3>Plataformas</Titulo3>

          <Paragrafo4>
            O sistema <strong>Walk in Line</strong> possui uma{' '}
            <strong>versão web</strong> e uma <strong>versão mobile</strong> com
            aplicativos para <strong>iOS</strong> e <strong>Android</strong>{' '}
            para sua empresa de rastreamento, onde a Central e o seu cliente
            final monitoram seus veículos e objetos rastreáveis de qualquer
            lugar e a qualquer momento.
          </Paragrafo4>
          <ImagemPlataforma src={Plataforma} alt="Rastreio" />
        </SubSessaoQuarta>
      </SessaoQuarta>
      <SessaoQuinta>
        <SubSessaoQuinta>
          <Titulo3>Planos</Titulo3>

          <ParagrafoSecundario>
            Ofereça um serviço personalizado para seus clientes, de acordo com a
            necessidade de cada um, através dos planos do sistema{' '}
            <strong>Walk in Line</strong>.
          </ParagrafoSecundario>

          <PlansTable />
          <RodapeTabela>
            * Valor condicional ao número total de veículos rastreados no
            sistema.*
          </RodapeTabela>
        </SubSessaoQuinta>
      </SessaoQuinta>
      <SessaoSexta>
        <SubSessaoSexta>
          <Titulo3>Monte sua Central</Titulo3>
          <ParagrafoSecundario>
            Tudo que você precisa para abrir sua empresa de forma rápida e
            fácil.
          </ParagrafoSecundario>
          <AwesomeSlider
            // cssModule = {
            //   --slider-height-porcentagem : 55% ;
            //   --slider-transition-duration : 262ms ;
            //   --espessura da seta orgânica : 10px ;
            //   --organic-arrow-border-radius : 25px ;
            //   --organic-arrow-height : 50px ;
            //   --organic-arrow-color : #000000 ;
            //   --largura do botão de controle : 10% ;
            //   --altura do botão de controle : 25% ;
            //   --control-button-background : transparente ;
            //   --control-bullet-color : #000000 ;
            //   --control-bullet-active-color : #000000 ;
            //   --loader-bar-color : #000000 ;
            //   --loader-bar-height : 5px ;

            // }
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
      <SessaoSetima>
        <SubSessaoSetima>
          <Titulo3>Contato</Titulo3>
          <ParagrafoSecundario>
            Preenchimento Obrigatório (*)
          </ParagrafoSecundario>
        </SubSessaoSetima>
      </SessaoSetima>
    </main>
  )
}
