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
  Progresso,
} from './style.styles'

import { SideBar } from '../SideBar'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { useState, useEffect } from 'react'
import logo from '../assets/images/logo-branca.png'

export const Header = () => {
  // Função de sumir o background Header quando sobe
  const [backgroundOnTop, setBackgroundOnTop] = useState(false)
  const [progress, setProgress] = useState(false)
  const [NavBarTop, setNavBarTop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('progress', {
      value: 100,
      scrollTrigger: {
        scrub: 0.5,
      },
    })
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBackgroundOnTop(true)
        setProgress(true)
      } else {
        setBackgroundOnTop(false)
        setProgress(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function abrirMenu() {
    setNavBarTop(true)
    setIsVisible(true)
  }

  function fecharMenu() {
    setNavBarTop(false)
    setIsVisible(false)
  }

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
            <ListaLink href="#software">Software</ListaLink>
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
          <HamburgerMenuIcon isVisible={isVisible} onClick={abrirMenu} />
        </BotaoAbrirNavBar>
      </HeaderDiv>
      <Progresso max="100" value="0" progresso={progress}></Progresso>
    </HeaderContainer>
  )
}
