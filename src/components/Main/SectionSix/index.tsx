import {
  Carousel,
  SessaoSexta,
  SubSessaoSexta,
  Titulo,
  Paragrafo,
} from './style.styles'

import { useState, useEffect } from 'react'

import CarrosselUm from '../../assets/images/carousel-1.png'
import CarrosselDois from '../../assets/images/carousel-2.png'
import CarrosselTres from '../../assets/images/carousel-3.png'
import CarrosselQuatro from '../../assets/images/carousel-4.png'

export const SectionSix = () => {
  // valor para PC
  const [scrollArea, setScrollArea] = useState(false)
  const [scrollText, setScrollText] = useState(false)
  const [scrollCarousel, setScrollCarousel] = useState(false)

  // valor para Mobile
  const [scrollAreaMobile, setScrollAreaMobile] = useState(false)
  const [scrollTextMobile, setScrollTextMobile] = useState(false)
  const [scrollCarouselMobile, setScrollCarouselMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // valor do scrollY no PC
      const scrollScreen = 5169
      const textView = 5244
      const carousel = 5425

      //  valor do scrollY no Mobile
      const screenMobile = 3795
      const textViewMobile = 3876
      const carouselMobile = 3997

      //  verificação do valor no PC
      if (window.scrollY >= scrollScreen) {
        setScrollText(true)
      } else {
        setScrollText(false)
      }

      if (window.scrollY >= textView) {
        setScrollArea(true)
      } else {
        setScrollArea(false)
      }

      if (window.scrollY >= carousel) {
        setScrollCarousel(true)
      } else {
        setScrollCarousel(false)
      }

      // verificação do valor no Mobile
      if (window.scrollY >= screenMobile) {
        setScrollTextMobile(true)
      } else {
        setScrollTextMobile(false)
      }

      if (window.scrollY >= textViewMobile) {
        setScrollAreaMobile(true)
      } else {
        setScrollAreaMobile(false)
      }

      if (window.scrollY >= carouselMobile) {
        setScrollCarouselMobile(true)
      } else {
        setScrollCarouselMobile(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoSexta id="monte-sua-central">
      <SubSessaoSexta visibleMobile={scrollTextMobile} visible={scrollText}>
        <Titulo>Monte sua Central</Titulo>
        <Paragrafo visibleMobile={scrollAreaMobile} visible={scrollArea}>
          Tudo que você precisa para abrir sua empresa de forma rápida e fácil.
        </Paragrafo>
        <Carousel visibleMobile={scrollCarouselMobile} visible={scrollCarousel}>
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
