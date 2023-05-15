import styled from 'styled-components'

export const Input = styled.input`
  width: 445px;
  height: 55px;
  margin: 4px;
  padding: 1rem;
`

export const InputMessage = styled.textarea`
  width: 445px;
  height: 160px;
  margin: 4px;
  padding: 1rem;
`

export const Button = styled.button`
  background-color: ${(props) => props.theme['button-background']};
  color: ${(props) => props.theme.white};
  margin: 35px 10px;
  margin-left: 21rem;
  margin-top: 20px;
  font-size: 20px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['border-color-button']};
  padding: 15px 25px;
  cursor: pointer;
  transition: background-color 0.8s ease;

  &:hover {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme['button-background']};
    border: 1px solid ${(props) => props.theme['button-background']};
  }
`