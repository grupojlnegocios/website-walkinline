import {
  Listas,
  ListaItens,
  ListaLink,
  Button,
  CloseSharp,
  BarraLateralArea,
} from './style.styles'

export function SideBar() {
  return (
    <BarraLateralArea>
      <CloseSharp />

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
    </BarraLateralArea>
  )
}
