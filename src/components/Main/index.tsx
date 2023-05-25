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
  ParagrafoSetimaSec,
  SessaoFormulario,
  FormularioArea,
  SessaoFormularioInfo,
  Contatos,
  TelefoneWpp,
  EmailContato,
  Carousel,
  BotaoUp,
  BotaoSobe,
} from './style.styles'

import logo from '../assets/images/logo.png'
import Rastreio from '../assets/images/foto-veiculos.png'
import Plataforma from '../assets/images/foto-sistema.png'
import { PlansTable } from './PlansTable'
import { TableMobile } from './TableMobile'
import { Forms } from './Forms'

import { FaWhatsapp } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

import 'react-awesome-slider/dist/styles.css'

import CarrosselUm from '../assets/images/carousel-1.png'
import CarrosselDois from '../assets/images/carousel-2.png'
import CarrosselTres from '../assets/images/carousel-3.png'
import CarrosselQuatro from '../assets/images/carousel-4.png'

import { useState, useEffect } from 'react'

export const Main = () => {
  const [buttonOnTop, setButtonOnTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonOnTop(true)
      } else {
        setButtonOnTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <SessaoPrincipal>
        <SessaoPrincipalArea>
          <Titulo>
            <Parte1>Simplificamos a jornada de</Parte1>
            <Parte2>Rastreamento Veicular e Telemetria Avançada</Parte2>
          </Titulo>

          <Paragrafo>
            Disponibilizamos toda a infraestrutura e tecnologia necessária para
            que as empresas possam estabelecer suas próprias plataformas de
            rastreamento e telemetria de última geração, iniciando uma
            trajetória de crescimento nas vendas do mercado de proteção veicular
            e segurança patrimonial.
          </Paragrafo>

          <Button href="#monte-sua-central"> Monte sua Central ➝ </Button>
        </SessaoPrincipalArea>
      </SessaoPrincipal>

      <SessaoSecundaria id="quem-somos">
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

      <SessaoTerceira id="nosso-diferencial">
        <Titulo3>Diferencial</Titulo3>

        <Paragrafo>
          A <strong>JL</strong> oferece as melhores opções do mercado para
          facilitar e desenvolver o seu negócio através do sistema{' '}
          <strong>Walk in Line</strong>.
        </Paragrafo>

        <TextoLista>
          <ImagemRastreio src={Rastreio} alt="Rastreio" />

          <Listas>
            <Titulo4>Vantagens</Titulo4>
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

      <SessaoQuarta id="plataforma">
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

          <ParagrafoSecundario>
            <strong>Preenchimento Obrigatório (*)</strong>
          </ParagrafoSecundario>
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
                  <strong>(11) 99999-9999</strong>
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

      <BotaoUp>
        <BotaoSobe size={55} background={buttonOnTop} />
      </BotaoUp>
    </main>
  )
}
