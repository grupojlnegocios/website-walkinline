import {
  Listas,
  ListaItens,
  ListaLink,
  Button,
  CloseSharp,
  BarraLateralArea,
  AreaBotaoClose,
  FecharNavBar,
} from './style.styles'

interface SideBarProps {
  navbar: boolean
  fecharMenu: () => void
}

export function SideBar({ navbar, fecharMenu }: SideBarProps) {
  function handleCloseSharpIconClick() {
    fecharMenu()
  }
  return (
    <BarraLateralArea isOpen={navbar}>
      <AreaBotaoClose>
        <FecharNavBar>
          <CloseSharp onClick={handleCloseSharpIconClick} />
        </FecharNavBar>
      </AreaBotaoClose>

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
    </BarraLateralArea>
  )
}
