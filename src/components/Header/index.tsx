import {
  HeaderContainer,
  ListaLink,
  Listas,
  ListaItens,
  Button,
  HeaderImg,
  HeaderDiv,
  HamburgerMenuIcon,
  BotaoAbrirNavBar,
} from './style.styles'

import { SideBar } from '../SideBar'

import { useState, useEffect } from 'react'
import logo from '../assets/images/logo-branca.png'

export const Header = () => {
  // Função de sumir o background Header quando sobe
  const [backgroundOnTop, setBackgroundOnTop] = useState(false)
  const [NavBarTop, setNavBarTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundOnTop(true)
      } else {
        setBackgroundOnTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function abrirMenu() {
    setNavBarTop(true)
  }

  function fecharMenu() {
    setNavBarTop(false)
  }

  /// //////////////////////////////////////////////////////////////////////

  return (
    <HeaderContainer background={backgroundOnTop}>
      <HeaderDiv>
        <HeaderImg src={logo} alt="Logo" />

        <Listas>
          <ListaItens>
            <ListaLink href="#quem-somos">Quem Somos</ListaLink>
          </ListaItens>

          <ListaItens>
            <ListaLink href="#nosso-diferencial">Diferencial</ListaLink>
          </ListaItens>

          <ListaItens>
            <ListaLink href="#plataforma">Plataforma</ListaLink>
          </ListaItens>

          <ListaItens>
            <ListaLink href="#planos">Planos</ListaLink>
          </ListaItens>

          <ListaItens>
            <ListaLink href="#contato">Contatos</ListaLink>
          </ListaItens>

          <ListaItens>
            <Button href="#monte-sua-central"> Monte sua Central </Button>
          </ListaItens>
        </Listas>
        <SideBar navbar={NavBarTop} fecharMenu={fecharMenu} />
        <BotaoAbrirNavBar>
          <HamburgerMenuIcon onClick={abrirMenu} />
        </BotaoAbrirNavBar>
      </HeaderDiv>
    </HeaderContainer>
  )
}
