import styled from 'styled-components'

interface Table1 {
  TableOpen: string
}

export const Tabela = styled.table`
  display: none;
  background: #fff;
  border-collapse: collapse;
  justify-content: space-around;
  width: 320px;

  @media (max-width: 770px) {
    display: flex;
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
    cursor: pointer;
    gap: 2rem;

    width: 100%;
  }

  td h4 {
    display: flex;
    justify-content: center;
  }
`

export const CabecaTabela = styled.table`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  vertical-align: top;
  margin: 15px;

  div {
  }
`

export const Botao = styled.div`
  display: flex;
  justify-content: end;
`

export const Tabela1 = styled.table<Table1>`
  display: ${(props) => (props.TableOpen === 'opened' ? 'flex' : 'none')};
`

export const Tabela2 = styled.table<Table1>`
  display: ${(props) => (props.TableOpen === 'opened' ? 'flex' : 'none')};
`

export const Tabela3 = styled.table<Table1>`
  display: ${(props) => (props.TableOpen === 'opened' ? 'flex' : 'none')};
`
