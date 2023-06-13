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
        <Carousel>
          <div style={{ zIndex: 2, backgroundColor: 'white' }}>
            <div>
              <img
                alt="Wow"
                src={CarrosselUm}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div style={{ backgroundColor: 'white' }}>
            <img
              alt="Wow"
              src={CarrosselDois}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ backgroundColor: 'white' }}>
            <img
              alt="Wow"
              src={CarrosselTres}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div style={{ backgroundColor: 'white' }}>
            <img
              alt="Wow"
              src={CarrosselQuatro}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </Carousel>
      </SubSessaoSexta>
    </SessaoSexta>
  )
}
