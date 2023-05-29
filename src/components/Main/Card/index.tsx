import { FaSimCard } from 'react-icons/fa'
import { MdGpsFixed } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { SlOrganization } from 'react-icons/sl'
import { GiSmartphone } from 'react-icons/gi'

import {
  CardBackground,
  CardText,
  Img,
  Paragrafo,
  Titulo,
} from './style.styles'

interface CardProps {
  icon: string
  title: string
  description: string
}
export const Card = ({ icon, title, description }: CardProps) => {
  let item
  switch (icon) {
    case 'simcard':
      item = <FaSimCard size={45} />
      break
    case 'equipamento':
      item = <MdGpsFixed size={45} />
      break
    case 'entidade':
      item = <BsPeopleFill size={45} />
      break
    case 'veiculo':
      item = <AiFillCar size={45} />
      break
    case 'os':
      item = <SlOrganization size={45} />
      break
    case 'app':
      item = <GiSmartphone size={45} />
      break
  }

  return (
    <CardBackground>
      <Img>{item}</Img>

      <CardText>
        <Titulo>{title}</Titulo>
        <Paragrafo>{description}</Paragrafo>
      </CardText>
    </CardBackground>
  )
}
