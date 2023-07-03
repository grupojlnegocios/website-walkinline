import axios from 'axios'
import {
  CampoCookie,
  SessaoCookie,
  TextoCookie,
  Paragrafo,
  ButtonArea,
  Button,
} from './style.styles'

import { useState } from 'react'

interface Props {
  cookie: boolean
}
export const Lgpd = ({ cookie }: Props) => {
  const [fecharLgpd, setFecharLgpd] = useState(false)

  // função para fechar o LGPD
  const closeCookie = () => {
    setFecharLgpd(true)
  }

  // armazena mais de uma função dentro do onClick
  const fecharCookie = async () => {
    // Função que fecha o LGPD
    closeCookie()

    // Função que pega o UUID
    const novaUuid = self.crypto.randomUUID()
    console.log(novaUuid)

    // Função que pega o Ip do usuario
    const data = await axios.get('https://api.ipify.org/?format=json')
    const ip = data.data.ip
    console.log(ip)
  }

  return (
    <CampoCookie fechar={fecharLgpd} cookie={cookie}>
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
          <Button onClick={fecharCookie}>Aceitar</Button>
        </ButtonArea>
      </SessaoCookie>
    </CampoCookie>
  )
}
