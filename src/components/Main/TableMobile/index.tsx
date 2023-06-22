import {
  Tabela,
  Tabela1,
  Tabela2,
  Tabela3,
  CabecaTabela,
  Botao,
} from './style.styles'

import { AiFillCheckCircle } from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'

import { useState, useEffect } from 'react'

export const TableMobile = () => {
  const [TableOpen1, setTableOpen1] = useState('closed')
  const [TableOpen2, setTableOpen2] = useState('closed')
  const [TableOpen3, setTableOpen3] = useState('closed')
  const [tableMobile, setTableMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTable = 3300

      if (window.scrollY >= scrollTable) {
        setTableMobile(true)
      } else {
        setTableMobile(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  function AbrirTabela(tabela: number) {
    if (tabela === 1) {
      if (TableOpen1 === 'closed') {
        setTableOpen1('opened')
      } else {
        setTableOpen1('closed')
      }
    }

    if (tabela === 2) {
      if (TableOpen2 === 'closed') {
        setTableOpen2('opened')
      } else {
        setTableOpen2('closed')
      }
    }

    if (tabela === 3) {
      if (TableOpen3 === 'closed') {
        setTableOpen3('opened')
      } else {
        setTableOpen3('closed')
      }
    }
  }

  return (
    <Tabela visible={tableMobile}>
      <tbody>
        <CabecaTabela>
          <td>
            <a onClick={() => AbrirTabela(1)}>
              <div>
                <h3>Walk in line Basic</h3>
                <h4>Valor conforme negociação</h4>
              </div>
              <Botao>
                <CgMoreO size={30}></CgMoreO>
              </Botao>
            </a>
          </td>
        </CabecaTabela>

        <Tabela1 TableOpen={TableOpen1}>
          <td>
            <h4>Recursos e </h4>
            <h4>Funcionalidades</h4>

            <table>
              <tbody>
                <tr></tr>
                <tr>
                  <td>
                    <p>
                      <strong>Monitoramento Online </strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Enviar Comandos</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Alertas</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Cadastros</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cliente</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Veículo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Dispositivo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Usuário</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Administrador/Operador</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cerca Eletrônica</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Pontos de Referência</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Rotas</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Relatórios</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Comandos enviados</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso simples (com mapa)</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso detalhado</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Deslocamento/Parada</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Status do Veículo</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Km Percorridos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gasto de Combustível</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Ponto-a-Ponto</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Periféricos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Velocidade</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Temperatura</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Notificações</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Configuração</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Alterar senha</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Personalizar Tela Inicial</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Configurações gerais</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Utilitários</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização Multiponto</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Localizar Próximo</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Enviar Texto-livre por SMS e E-mail</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Frota</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Manutenção e Despesas</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Viagens</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Despesas</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Viagens</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Central</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Monitoramento de Eventos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Tela de Atendimento</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Eventos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Log de Controle e Alterações</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório Finaceiros</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráficos de Gestão</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Jornada de Motorista</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Módulo de Instalação</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Telemetria</strong>
                    </p>
                  </td>
                </tr>{' '}
              </tbody>
            </table>
          </td>
        </Tabela1>

        <CabecaTabela>
          <td>
            <a onClick={() => AbrirTabela(2)}>
              <div>
                <h3>Walk in Line Select</h3>
                <h4>Valor conforme negociação</h4>
              </div>
              <Botao>
                <CgMoreO size={30}></CgMoreO>
              </Botao>
            </a>
          </td>
        </CabecaTabela>

        <Tabela2 TableOpen={TableOpen2}>
          <td>
            <h4>Recursos e</h4>
            <h4>Funcionalidades</h4>
            <table>
              <tbody>
                <tr></tr>
                <tr>
                  <td>
                    <p>
                      <strong>Monitoramento Online</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Enviar Comandos</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Alertas</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Cadastros</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cliente</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Veículo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Dispositivo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Usuário</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Administrador/Operador</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cerca Eletrônica</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Pontos de Referência</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Rotas</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Relatórios</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Comandos enviados</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso simples (com mapa)</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso detalhado</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Deslocamento/Parada</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Status do Veículo</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Km Percorridos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gasto de Combustível</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Ponto-a-Ponto</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Periféricos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Velocidade</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Temperatura</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Notificações</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Configuração</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Alterar senha</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Personalizar Tela Inicial</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Configurações gerais</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Utilitários</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização Multiponto</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Localizar Próximo</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Enviar Texto-livre por SMS e E-mail</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Frota</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Manutenção e Despesas</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Viagens</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Despesas</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Viagens</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Central</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Monitoramento de Eventos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Tela de Atendimento</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Eventos</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Log de Controle e Alterações</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório Finaceiros</p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráficos de Gestão</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Jornada de Motorista</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Módulo de Instalação</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Telemetria</strong>
                    </p>
                  </td>
                </tr>{' '}
              </tbody>
            </table>
          </td>
        </Tabela2>

        <CabecaTabela>
          <td>
            <a onClick={() => AbrirTabela(3)}>
              <div>
                <h3>Walk in Line Premium</h3>
                <h4>Valor conforme negociação</h4>
              </div>
              <Botao>
                <CgMoreO size={30}></CgMoreO>
              </Botao>
            </a>
          </td>
        </CabecaTabela>

        <Tabela3 TableOpen={TableOpen3}>
          <td>
            <h4>Recursos e</h4>
            <h4>Funcionalidades</h4>
            <table>
              <tbody>
                <tr></tr>
                <tr>
                  <td>
                    <p>
                      <strong>Monitoramento Online</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Enviar Comandos</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Alertas</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Cadastros</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cliente</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Veículo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Dispositivo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Usuário</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Administrador/Operador</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cerca Eletrônica</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Pontos de Referência</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Rotas</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Relatórios</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Comandos enviados</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso simples (com mapa)</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Percurso detalhado</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Deslocamento/Parada</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Status do Veículo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Km Percorridos</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gasto de Combustível</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Ponto-a-Ponto</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Periféricos</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Velocidade</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráfico Temperatura</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Notificações</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Configuração</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Alterar senha</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Personalizar Tela Inicial</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Configurações gerais</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Utilitários</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Roteirização Multiponto</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Localizar Próximo</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Enviar Texto-livre por SMS e E-mail</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Frota</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Manutenção e Despesas</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Cadastro de Viagens</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Despesas</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Viagens</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Central</strong>
                    </p>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Monitoramento de Eventos</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Tela de Atendimento</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório de Eventos</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Log de Controle e Alterações</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Relatório Finaceiros</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr className="sub">
                  <td>
                    <p>Gráficos de Gestão</p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Jornada de Motorista</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Módulo de Instalação</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      <strong>Telemetria</strong>
                    </p>
                  </td>
                  <td>
                    <AiFillCheckCircle
                      size={16}
                      color="#40B40E"
                    ></AiFillCheckCircle>
                  </td>
                </tr>{' '}
              </tbody>
            </table>
          </td>
        </Tabela3>
      </tbody>
    </Tabela>
  )
}
