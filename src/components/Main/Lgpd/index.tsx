import {
  CampoCookie,
  SessaoCookie,
  TextoCookie,
  Paragrafo,
  ButtonArea,
  Button,
} from './style.styles'

interface Props {
  cookie: boolean
}
export const Lgpd = ({ cookie }: Props) => {
  return (
    <CampoCookie cookie={cookie}>
      <SessaoCookie>
        <TextoCookie>
          <Paragrafo>
            Este site utiliza cookies para garantir a melhor experiência de
            navegação. Ao continuar, você concorda com o uso de cookies de
            acordo com nossa{' '}
            <a href="#">
              <strong>política de privacidade</strong>
            </a>
            .
          </Paragrafo>
        </TextoCookie>

        <ButtonArea>
          <Button>Aceitar</Button>
        </ButtonArea>
      </SessaoCookie>
    </CampoCookie>
  )
}
