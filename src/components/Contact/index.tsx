import {
  ContactContainer,
  ContactIconArea,
  ContactToolTip,
} from './style.styles'
import { FaWhatsapp } from 'react-icons/fa'

export const Contact = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5511996634534', '_blank')
  }

  return (
    <ContactContainer onClick={handleClick}>
      <ContactIconArea>
        <FaWhatsapp size={40} color="#FFF"></FaWhatsapp>
      </ContactIconArea>
      <ContactToolTip>
        <p>Fale com nossos consultores!</p>
      </ContactToolTip>
    </ContactContainer>
  )
}
