import {
  HeaderContainer,
  ListaLink,
  Listas,
  ListaItens,
  Button,
  HeaderImg,
} from './style.styles'

import logo from '../assets/images/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={logo} alt="Logo" />
      <Listas>
        <ListaItens>
          <ListaLink href="#">Quem Somos</ListaLink>
        </ListaItens>
        <ListaItens>
          <ListaLink href="#">Nossos Serviços</ListaLink>
        </ListaItens>
        <ListaItens>
          <ListaLink href="#">Planos</ListaLink>
        </ListaItens>
        <ListaItens>
          <Button> Monte sua Central </Button>
        </ListaItens>
      </Listas>
    </HeaderContainer>
  )
}
