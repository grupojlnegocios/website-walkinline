import styled from 'styled-components'

export const Tabela = styled.table`
  display: table;
  background: #fff;
  width: 65%;
  border-collapse: collapse;

  @media (max-width: 770px) {
    display: none;
  }
`

export const CabecaTabela = styled.thead`
  th {
    padding: 20px 20px;
  }

  @media (max-width: 960px) {
  }
  @media (max-width: 785px) {
  }
  @media (max-width: 710px) {
  }
`

export const LinhaCabeca = styled.tr``

export const CorpoTabela = styled.tbody`
  tr td {
    align-items: center;
    border-top: 1px solid #ddd;
    padding: 8px 68px;
    align-content: center;
  }

  @media (max-width: 960px) {
    padding: 6px 66px;
  }
  @media (max-width: 785px) {
    padding: 4px 63px;
  }
  @media (max-width: 710px) {
    padding: 2px 60px;
  }
`

export const LinhaTabela = styled.td``
