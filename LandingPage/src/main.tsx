import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  background-color: #000;
  color: #fff;
    }

    *{
    box-sizing: border-box;
    }

`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
