import {
  Titulo,
  Paragrafo,
  SessaoPrincipal,
  SessaoPrincipalArea,
  Parte1,
  Parte2,
  Button,
} from './style.styles'

export const SectionOne = () => {
  return (
    <SessaoPrincipal>
      <SessaoPrincipalArea>
        <Titulo>
          <Parte1>Simplificamos a jornada de</Parte1>
          <Parte2>Rastreamento Veicular e Telemetria Avançada</Parte2>
        </Titulo>

        <Paragrafo>
          Disponibilizamos toda a infraestrutura e tecnologia necessária para
          que as empresas possam estabelecer suas próprias plataformas de
          rastreamento e telemetria de última geração, iniciando uma trajetória
          de crescimento nas vendas do mercado de proteção veicular e segurança
          patrimonial.
        </Paragrafo>

        <Button href="#monte-sua-central"> Monte sua Central ➝ </Button>
      </SessaoPrincipalArea>
    </SessaoPrincipal>
  )
}
