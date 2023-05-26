import { FaSimCard } from 'react-icons/fa'
import { MdGpsFixed } from 'react-icons/md'
import { BsPeopleFill } from 'react-icons/bs'
import { AiFillCar } from 'react-icons/ai'
import { SlOrganization } from 'react-icons/sl'
import { GiSmartphone } from 'react-icons/gi'

import { CardBackground } from './style.styles'

interface CardProps {
  icon: string
  title: string
  description: string
}
export const Card = ({ icon, title, description }: CardProps) => {
  let item
  switch (icon) {
    case 'simcard':
      item = <FaSimCard size={65} />
      break
    case 'equipamento':
      item = <MdGpsFixed size={65} />
      break
    case 'entidade':
      item = <BsPeopleFill size={65} />
      break
    case 'veiculo':
      item = <AiFillCar size={65} />
      break
    case 'os':
      item = <SlOrganization size={65} />
      break
    case 'app':
      item = <GiSmartphone size={65} />
      break
  }

  return (
    <CardBackground>
      {item}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </CardBackground>
  )
}
