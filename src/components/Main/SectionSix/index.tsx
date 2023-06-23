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
  const [scrollArea, setScrollArea] = useState(false)
  const [scrollText, setScrollText] = useState(false)
  const [scrollCarousel, setScrollCarousel] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollScreen = 5200
      const textView = 5244
      const carousel = 5425

      const screenMobile = 3799
      const textViewMobile = 3876
      const carouselMobile = 3997

      if (window.scrollY >= scrollScreen || window.scrollY >= screenMobile) {
        setScrollText(true)
      } else {
        setScrollText(false)
      }

      if (window.scrollY >= textView || window.scrollY >= textViewMobile) {
        setScrollArea(true)
      } else {
        setScrollArea(false)
      }

      if (window.scrollY >= carousel || window.scrollY >= carouselMobile) {
        setScrollCarousel(true)
      } else {
        setScrollCarousel(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <SessaoSexta id="monte-sua-central">
      <SubSessaoSexta visible={scrollText}>
        <Titulo>Monte sua Central</Titulo>
        <Paragrafo visible={scrollArea}>
          Tudo que você precisa para abrir sua empresa de forma rápida e fácil.
        </Paragrafo>
        <Carousel visible={scrollCarousel}>
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
