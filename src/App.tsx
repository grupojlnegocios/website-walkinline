import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { StartLoading } from './components/Main/StartLoading'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <StartLoading />
      <Header />
      <Main />
      <Footer />
      <Contact />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
