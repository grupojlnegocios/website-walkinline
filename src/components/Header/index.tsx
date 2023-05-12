import {
  HeaderContainer,
  ListaLink,
  Listas,
  ListaItens,
  Button,
  HeaderImg,
  HeaderDiv,
} from './style.styles'

import logo from '../assets/images/logo-branca.png'

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderDiv>
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
      </HeaderDiv>
    </HeaderContainer>
  )
}
