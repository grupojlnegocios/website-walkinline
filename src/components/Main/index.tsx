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
} from './style.styles'

import logo from '../assets/images/logo.png'
import Rastreio from '../assets/images/rastreio.png'

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
    </main>
  )
}
