import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 80px;
  z-index: 1;
  right: 80px;
`

export const ContactIconArea = styled.div`
  padding: 0.6rem;
  background-color: #0cc243;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: fixed;
  transition: 0.5s ease-out;

  ${ContactContainer}:hover & {
    background-color: #1f845a;
    box-shadow: 0px 11px 18px 1px rgb(0 0 0 / 95%);
  }
`

export const ContactToolTip = styled.div`
  position: absolute;
  bottom: -50px;
  right: 100%;
  width: 230px;
  background-color: ${(props) => props.theme['tooltip-background']};
  color: #fff;
  margin-right: 1rem;
  padding: 0.5rem;
  border-radius: 8px;
  transition: 0.5s ease;
  opacity: 0;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 35%;
    right: -3%;
    border: 8px solid transparent;
    border-width: 6px 0 6px 9px;
    border-left-color: ${(props) => props.theme['tooltip-background']};
  }

  ${ContactContainer}:hover & {
    display: block;
    opacity: 1;
  }
`
