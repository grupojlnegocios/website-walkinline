import {
  SessaoSetima,
  SubSessaoSetima,
  ParagrafoSetimaSec,
  SessaoFormulario,
  FormularioArea,
  SessaoFormularioInfo,
  Contatos,
  ParagrafoContato,
  TelefoneWpp,
  EmailContato,
  Titulo3,
} from './style.styles'

import { FaWhatsapp } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { Forms } from '../Forms'

export const SectionSeven = () => {
  return (
    <SessaoSetima id="contato">
      <SubSessaoSetima>
        <Titulo3>Contato</Titulo3>

        <ParagrafoContato>
          <strong>Preenchimento Obrigatório (*)</strong>
        </ParagrafoContato>
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
                <a
                  href="https://api.whatsapp.com/send?phone="
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  <strong>(11) 99999-9999</strong>
                </a>
                <FaWhatsapp size={0} color={'35C42C'}></FaWhatsapp>
              </TelefoneWpp>
            </Contatos>

            <EmailContato>
              <strong>contato@walkinline.com.br</strong>
              <GrMail size={0} color={'#1D3557'}></GrMail>
            </EmailContato>

            <ParagrafoSetimaSec>
              <strong>
                Av. das Nações Unidas, 18801 15° Andar - Santo Amaro, São Paulo
                - SP, 04753-100
              </strong>
            </ParagrafoSetimaSec>
          </SessaoFormularioInfo>

          <FormularioArea>
            <Forms />
          </FormularioArea>
        </SessaoFormulario>
      </SubSessaoSetima>
    </SessaoSetima>
  )
}
