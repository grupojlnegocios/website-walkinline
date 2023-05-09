import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header'
import { Main } from './components/Main'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <Main />

      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
