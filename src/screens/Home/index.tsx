import { Contact } from '../../components/Contact'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Main } from '../../components/Main'
import { StartLoading } from '../../components/Main/StartLoading'
import { useState } from 'react'

export const Home = () => {
  const [cookie, setCookie] = useState(false)

  function handleLgpd() {
    const uuid = localStorage.getItem('UUID')
    const ip = localStorage.getItem('IP')
    if (uuid !== null && ip !== null) {
      setCookie(false)
    } else {
      setCookie(true)
    }
  }

  return (
    <>
      <StartLoading setLgpd={handleLgpd} />
      <Header />
      <Main cookie={cookie} />
      <Footer />
      <Contact />
    </>
  )
}
