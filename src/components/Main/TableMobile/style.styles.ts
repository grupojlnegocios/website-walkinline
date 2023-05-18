import styled from 'styled-components'

export const Tabela = styled.table`
  display: flex;
  background: #fff;
  border-collapse: collapse;

  div {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    /* border-top: 1px solid #ddd; */
  }

  tr td {
    border-top: 1px solid #ddd;
    padding: 8px;
  }

  a {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: black;
  }

  td h4 {
    display: flex;
    justify-content: center;
  }
`
