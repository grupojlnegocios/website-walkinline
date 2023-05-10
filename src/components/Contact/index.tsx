import {
  ContactContainer,
  ContactIconArea,
  ContactToolTip,
} from './style.styles'
import { FaWhatsapp } from 'react-icons/fa'

export const Contact = () => {
  const handleClick = () => {
    window.open('https://www.google.com.br', '_blank')
  }

  return (
    <ContactContainer onClick={handleClick}>
      <ContactIconArea>
        <FaWhatsapp size={50} color="#FFF"></FaWhatsapp>
      </ContactIconArea>
      <ContactToolTip>
        <p>Fale com nossos consultores!</p>
      </ContactToolTip>
    </ContactContainer>
  )
}
