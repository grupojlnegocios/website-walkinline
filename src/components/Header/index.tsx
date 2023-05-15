import {
  HeaderContainer,
  ListaLink,
  Listas,
  ListaItens,
  Button,
  HeaderImg,
  HeaderDiv,
} from './style.styles'

import { useState, useEffect } from 'react'
import logo from '../assets/images/logo-branca.png'

export const Header = () => {
  const [backgroundOnTop, setBackgroundOnTop] = useState(false)

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

  // const [paddingOnTop, setPaddingOnTop] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setPaddingOnTop(true)
  //     } else {
  //       setPaddingOnTop(false)
  //     }
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])
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
            <Button> Monte sua Central </Button>
          </ListaItens>
        </Listas>
      </HeaderDiv>
    </HeaderContainer>
  )
}
