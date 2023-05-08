import { HeaderContainer, HeaderImg } from './style.styles'

import logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={logo} alt="Logo" />
    </HeaderContainer>
  )
}
