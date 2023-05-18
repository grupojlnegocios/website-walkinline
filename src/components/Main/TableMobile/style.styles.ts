import styled from 'styled-components'

export const Tabela = styled.table`
  display: flex;
  background: #fff;
  width: 65%;
  border-collapse: collapse;

  div {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    /* border-top: 1px solid #ddd; */
  }

  tr td {
    display: flex;
    border-top: 1px solid #ddd;
    padding: 8px;
    flex-direction: column;
  }
`
