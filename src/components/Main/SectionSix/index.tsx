import {
  Carousel,
  SessaoSexta,
  SubSessaoSexta,
  Titulo3,
  ParagrafoSecundario,
} from './style.styles'

import CarrosselUm from '../../assets/images/carousel-1.png'
import CarrosselDois from '../../assets/images/carousel-2.png'
import CarrosselTres from '../../assets/images/carousel-3.png'
import CarrosselQuatro from '../../assets/images/carousel-4.png'

export const SectionSix = () => {
  return (
    <SessaoSexta id="monte-sua-central">
      <SubSessaoSexta>
        <Titulo3>Monte sua Central</Titulo3>
        <ParagrafoSecundario>
          Tudo que você precisa para abrir sua empresa de forma rápida e fácil.
        </ParagrafoSecundario>
        <Carousel
          media={[
            {
              source: CarrosselUm,
            },
            {
              source: CarrosselDois,
            },
            {
              source: CarrosselTres,
            },
            {
              source: CarrosselQuatro,
            },
          ]}
        />
      </SubSessaoSexta>
    </SessaoSexta>
  )
}
