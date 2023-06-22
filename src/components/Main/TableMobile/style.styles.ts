import styled from 'styled-components'

interface Table1 {
  TableOpen: string
}

interface VisibleProps {
  visible: boolean
}

export const Tabela = styled.table<VisibleProps>`
  display: none;
  background: #fff;
  border-collapse: collapse;
  justify-content: space-around;
  width: 20rem;

  @media (max-width: 770px) {
    display: flex;
    opacity: ${(props) => (props.visible === true ? '1' : '0')};
    visibility: ${(props) => (props.visible === true ? 'visible' : 'hidden')};
    transition: opacity 0.5s ease, visibility 0.5s ease;
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
    gap: 5rem;

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
