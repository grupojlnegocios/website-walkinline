import styled from 'styled-components'

export const ContactContainer = styled.div`
  display: inline-block;
  position: fixed;
  top: 89%;
  z-index: 1;
  right: 1%;
`

export const ContactIconArea = styled.div`
  padding: 0.6rem;
  background-color: #0cc243;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const ContactToolTip = styled.div`
  position: absolute;
  top: 25%;
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
    right: -4%;
    border: 8px solid transparent;
    border-width: 6px 0 6px 9px;
    border-left-color: ${(props) => props.theme['tooltip-background']};
  }

  ${ContactContainer}:hover & {
    display: block;
    opacity: 1;
  }
`
