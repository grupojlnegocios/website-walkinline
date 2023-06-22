import { Tabela, CabecaTabela, CorpoTabela, LinhaCabeca } from './style.styles'

import { AiFillCheckCircle } from 'react-icons/ai'
import { useState, useEffect } from 'react'

export const PlansTable = () => {
  const [tableVisible, setTableVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTable = 3055

      if (window.scrollY >= scrollTable) {
        setTableVisible(true)
      } else {
        setTableVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Tabela visible={tableVisible}>
      <CabecaTabela>
        <LinhaCabeca>
          <th>
            <h4>Recursos e Funcionalidades</h4>
          </th>

          <th>
            <h3>Walk in Line Basic</h3>
            <h4>Valor conforme negociação</h4>
          </th>

          <th>
            <h3>Walk in Line Select</h3>
            <h4>Valor conforme negociação</h4>
          </th>

          <th>
            <h3>Walk in Line Premium</h3>
            <h4>Valor conforme negociação</h4>
          </th>
        </LinhaCabeca>
      </CabecaTabela>

      <CorpoTabela>
        <tr>
          <td>
            <p>
              <strong>Monitoramento Online</strong>
            </p>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Enviar Comandos</strong>
            </p>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Alertas</strong>
            </p>
          </td>

          <td></td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>

          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Cadastros</strong>
            </p>
          </td>

          <td></td>

          <td></td>

          <td></td>
        </tr>

        <tr>
          <td>
            <p>Cliente</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Veiculo</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Dispositivo</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Usuário</p>
          </td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Administrador/Operador</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Cerca Eletrônica</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Pontos de Referência</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Rotas</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Relatórios</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>Comandos Enviados</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Percurso Simples</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Percurso Detalhado</p>
          </td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Deslocamento/Parada</p>
          </td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Status do Veiculo</p>
          </td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Km Percorrido</p>
          </td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Gasto de Combustivel</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Ponto-a-Ponto</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Periféricos</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Gráfico Velocidade</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Gráfico Temperatura</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Notificações</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Configuração</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>Alterar senha</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Personalizar Tela Inicial</p>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Configurações Gerais</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Utilitários</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>Roterização</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>Roterização Multiponto</td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Localizar Próximo</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Enviar Texto-Livre por SMS e E-mail</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Frota</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>Cadastro de Manutenção e Despesas</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Cadastro de Viagens</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Relatório de Despesas</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Relátorio de Viagens</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Central</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td>
            <p>Monitoramento de Eventos</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Tela de Atendimento</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Relatório de Eventos</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Log de Controle de Alterações</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Relatórios Financeiros</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>Gráficos de Gestão</p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Jornada de Motorista</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Módulo de Instalação</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>

        <tr>
          <td>
            <p>
              <strong>Telemetria</strong>
            </p>
          </td>
          <td></td>
          <td></td>
          <td>
            <AiFillCheckCircle size={16} color="#40B40E"></AiFillCheckCircle>
          </td>
        </tr>
      </CorpoTabela>
    </Tabela>
  )
}
