import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Main />
      <Footer />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
