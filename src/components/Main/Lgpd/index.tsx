import {
  CampoCookie,
  SessaoCookie,
  TextoCookie,
  Paragrafo,
  ButtonArea,
  Button,
  Link,
} from './style.styles'

import axios from 'axios'
import { useState } from 'react'
// import { Privacy } from '../../../screens/Privacy'

interface Props {
  cookie: boolean
}
export const Lgpd = ({ cookie }: Props) => {
  const [fecharLgpd, setFecharLgpd] = useState(false)

  // Funções de dentro do onClick
  const fecharCookie = async () => {
    // Função que fecha o LGPD
    setFecharLgpd(true)

    // Função que pega o UUID
    const novaUuid = self.crypto.randomUUID()

    // Função que pega o Ip do usuario
    const dataIp = await axios.get('https://api.ipify.org/?format=json')
    const ip = dataIp.data.ip

    const data = {
      ip,
      uuid: novaUuid,
    }

    axios.post('https://api.walkinline.com.br/cookies/', data)

    localStorage.setItem('UUID', data.uuid)
    localStorage.setItem('IP', data.ip)
  }

  const newTab = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <CampoCookie fechar={fecharLgpd} cookie={cookie}>
      <SessaoCookie>
        <TextoCookie>
          <Paragrafo>
            Este site utiliza cookies para garantir a melhor experiência de
            navegação. Ao Aceitar, você concorda com o uso de cookies de acordo
            com nossa
            <Link onClick={() => newTab('/pt-br/privacy')}>
              <strong> política de privacidade</strong>
            </Link>
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
