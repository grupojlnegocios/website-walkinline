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

export const SectionThree = () => {
  return (
    <SessaoTerceira id="nosso-diferencial">
      <Titulo>Diferencial</Titulo>

      <Paragrafo>
        A <strong>walk in line</strong> oferece as melhores opções do mercado
        para facilitar e desenvolver o seu negocio através do nosso{' '}
        <u>software inteligente</u>!
      </Paragrafo>

      <TextoLista>
        <ImagemRastreio src={Rastreio} alt="Rastreio" />

        <Listas>
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
