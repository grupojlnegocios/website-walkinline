import { BotaoUp, BotaoSobe } from './style.styles'

import { useState, useEffect } from 'react'
import 'react-awesome-slider/dist/styles.css'

import { SectionOne } from './SectionOne'
import { SectionTwo } from './SectionTwo'
import { SectionThree } from './SectionThree'
import { SectionFour } from './SectionFour'
import { SectionFive } from './SectionFive'
import { SectionSix } from './SectionSix'
import { SectionSeven } from './SectionSeven'
import { Lgpd } from './Lgpd'

interface Props {
  cookie: boolean
}

export const Main = ({ cookie }: Props) => {
  const [buttonOnTop, setButtonOnTop] = useState(false)
  const [cursor, setCursor] = useState(false)
  const [buttonUp, setButtonUp] = useState(false)
  const [, setOldScroll] = useState<number>(window.scrollY)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setButtonOnTop(true)
        setCursor(true)
      } else {
        setButtonOnTop(false)
        setCursor(false)
      }

      setOldScroll((e) => {
        if (e < window.scrollY) {
          setButtonUp(false)
        } else {
          setButtonUp(true)
        }

        return window.scrollY
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function subirTela() {
    document.documentElement.scrollTop = 0
  }

  return (
    <main>
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <SectionSix />

      <SectionSeven />

      <Lgpd cookie={cookie} />

      <BotaoUp opacidade={buttonOnTop} cursor={cursor} subir={buttonUp}>
        <BotaoSobe size={45} onClick={subirTela} />
      </BotaoUp>
    </main>
  )
}
