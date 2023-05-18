import { Tabela, Tabela1, Tabela2, Tabela3 } from './style.styles'

import { AiFillCheckCircle } from 'react-icons/ai'
import { CgMoreO } from 'react-icons/cg'

import { useState } from 'react'

export const TableMobile = () => {
  const [TableOpen, setTableOpen] = useState('closed')

  function AbrirTabela() {
    setTableOpen('opened')
  }

  return (
    <Tabela>
      <tbody>
        <tr>
          <td>
            <a>
              <button onClick={AbrirTabela}>
                <div>
                  <h3>Walk in line Basico</h3>
                  <h4>R$2,50*/Veículo</h4>
                </div>
                <div>
                  <CgMoreO size={30}></CgMoreO>
                </div>
              </button>
            </a>
          </td>
        </tr>
        <Tabela1 TableOpen={TableOpen}>
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

        <tr>
          <td>
            <a href="#">
              <div>
                <h3>Walk in Line Médio</h3>
                <h4>R$2,50*/Veículo</h4>
              </div>
              <div>
                <CgMoreO size={30}></CgMoreO>
              </div>
            </a>
          </td>
        </tr>
        <Tabela2>
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

        <tr>
          <td>
            <a href="#">
              <div>
                <h3>Walk in Line Full</h3>
                <h4>R$5,00*/Veículo</h4>
              </div>
              <div>
                <CgMoreO size={30}></CgMoreO>
              </div>
            </a>
          </td>
        </tr>
        <Tabela3>
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
