import {
  CampoCookie,
  SessaoCookie,
  TextoCookie,
  Paragrafo,
  ButtonArea,
  Button,
} from './style.styles'
import { Link } from 'react-router-dom'

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

    // Variavel que pega o UUID
    const novaUuid = self.crypto.randomUUID()

    // Variavel que pega o Ip do usuario
    const dataIp = await axios.get('https://api.ipify.org/?format=json')
    const ip = dataIp.data.ip

    // Variavel que armazena o valor do Uuid e do IP
    const data = {
      ip,
      uuid: novaUuid,
    }
    // Faz requisição na api
    axios.post('https://api.walkinline.com.br/cookies/', data)

    //  Adiciona um Uuid e um IP no localStorage quando clicar em Aceitar
    localStorage.setItem('UUID', data.uuid)
    localStorage.setItem('IP', data.ip)
  }

  // Variavel que adiciona o target:_blak no onclick para abrir uma nova tela usando routes
  // const newTab = (url: string) => {
  //   window.open(url, '_blank')
  // }

  return (
    <CampoCookie fechar={fecharLgpd} cookie={cookie}>
      <SessaoCookie>
        <TextoCookie>
          <Paragrafo>
            Este site utiliza cookies para garantir a melhor experiência de
            navegação. Ao Aceitar, você concorda com o uso de cookies de acordo
            com nossa
            <Link to="privacy">
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
