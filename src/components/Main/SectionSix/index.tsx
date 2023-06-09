import {
  Carousel,
  SessaoSexta,
  SubSessaoSexta,
  Titulo,
  Paragrafo,
} from './style.styles'

import CarrosselUm from '../../assets/images/carousel-1.png'
import CarrosselDois from '../../assets/images/carousel-2.png'
import CarrosselTres from '../../assets/images/carousel-3.png'
import CarrosselQuatro from '../../assets/images/carousel-4.png'

export const SectionSix = () => {
  return (
    <SessaoSexta id="monte-sua-central">
      <SubSessaoSexta>
        <Titulo>Monte sua Central</Titulo>
        <Paragrafo>
          Tudo que você precisa para abrir sua empresa de forma rápida e fácil.
        </Paragrafo>
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
