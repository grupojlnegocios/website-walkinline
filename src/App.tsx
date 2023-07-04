import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'

import { WebSiteRoutes } from './routes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <WebSiteRoutes />
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
