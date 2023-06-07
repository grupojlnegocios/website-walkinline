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
          <ListaLink href="#quem-somos" onClick={handleCloseSharpIconClick}>
            Quem Somos
          </ListaLink>
        </ListaItens>

        <ListaItens>
          <ListaLink
            href="#nosso-diferencial"
            onClick={handleCloseSharpIconClick}
          >
            Diferencial
          </ListaLink>
        </ListaItens>

        <ListaItens>
          <ListaLink href="#software" onClick={handleCloseSharpIconClick}>
            Software
          </ListaLink>
        </ListaItens>

        <ListaItens>
          <ListaLink href="#planos" onClick={handleCloseSharpIconClick}>
            Planos
          </ListaLink>
        </ListaItens>

        <ListaItens>
          <ListaLink href="#contato" onClick={handleCloseSharpIconClick}>
            Contatos
          </ListaLink>
        </ListaItens>

        <ListaItens>
          <Button href="#monte-sua-central" onClick={handleCloseSharpIconClick}>
            Monte sua Central
          </Button>
        </ListaItens>
      </Listas>
    </BarraLateralArea>
  )
}
