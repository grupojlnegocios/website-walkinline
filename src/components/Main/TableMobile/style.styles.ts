import styled from 'styled-components'

interface Table1 {
  TableOpen: string
}

export const Tabela = styled.table`
  display: flex;
  background: #fff;
  border-collapse: collapse;

  div {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
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
export const Tabela1 = styled.table<Table1>`
  display: ${(props) => (props.TableOpen === 'opened' ? 'flex' : 'none')};
`

export const Tabela2 = styled.table``

export const Tabela3 = styled.table``
