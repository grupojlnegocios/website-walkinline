import styled from 'styled-components'

export const Input = styled.input`
  font-size: 1rem;
  width: 27.8rem;
  height: 3.4rem;
  margin: 0.25rem;
  padding: 1rem;

  @media (max-width: 960px) {
    font-size: 0.7rem;
    width: 23.8rem;
    height: 2.4rem;
    margin: 0.18rem;
  }
  @media (max-width: 785px) {
    width: 20.8rem;
    height: 2rem;
    margin: 0.15rem;
  }
  @media (max-width: 710px) {
    width: 15rem;
    height: 1rem;
  }
`

export const InputMessage = styled.textarea`
  font-size: 1rem;
  width: 27.8rem;
  height: 10rem;
  margin: 0.25rem;
  padding: 1rem;

  @media (max-width: 960px) {
    font-size: 0.7rem;
    width: 23.8rem;
    height: 7rem;
    margin: 0.18rem;
  }
  @media (max-width: 785px) {
    width: 20.8rem;
    height: 4.5rem;
    margin: 0.14rem;
  }
  @media (max-width: 710px) {
    width: 15rem;
    height: 1rem;
  }
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

  @media (max-width: 960px) {
    margin-left: 18rem;
    margin-top: 16px;
    font-size: 16px;
    padding: 13px 23px;
    border-radius: 6px;
  }
  @media (max-width: 785px) {
    margin-left: 16rem;
    margin-top: 14px;
    font-size: 13px;
    padding: 10px 20px;
    border-radius: 5px;
  }
  @media (max-width: 710px) {
    margin-left: 10rem;
  }
`
