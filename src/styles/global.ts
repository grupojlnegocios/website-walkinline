import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    scroll-padding-top: 50px;
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme['body-background']};
    
    
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    
}
  
/* Track */
::-webkit-scrollbar-track {
    background: transparent; 
}

/* Handle */
::-webkit-scrollbar-thumb {
    background-color: #ddd; 
    border-radius: 8px;
    opacity: 0;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background-color: #ccc; 
    opacity: 1;
}
`
